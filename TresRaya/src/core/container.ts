import { SignalRConnection } from '../data/SignalRConnectionl';
import { GameUseCases } from '../domain/usecases/GameUseCases';
import { GameViewModel } from '../ui/viewmodels/GameViewModel';
import { IGameConnection } from '../domain/interfaces/IGameConnection';
import { TYPES } from './types';

class Container {
    private services: Map<symbol, any> = new Map();

    register<T>(identifier: symbol, factory: () => T): void {
        this.services.set(identifier, factory);
    }

    resolve<T>(identifier: symbol): T {
        const factory = this.services.get(identifier);
        if (!factory) {
            throw new Error(`No se encontró el servicio para ${identifier.toString()}`);
        }
        return factory();
    }

    clear(): void {
        this.services.clear();
    }
}

const container = new Container();

// Registrar dependencias
container.register<IGameConnection>(TYPES.GameConnection, () => {
    return new SignalRConnection();
});

container.register<GameUseCases>(TYPES.GameUseCases, () => {
    const connection = container.resolve<IGameConnection>(TYPES.GameConnection);
    return new GameUseCases(connection);
});

container.register<GameViewModel>(TYPES.GameViewModel, () => {
    const gameUseCases = container.resolve<GameUseCases>(TYPES.GameUseCases);
    return new GameViewModel(gameUseCases);
});

export default container;