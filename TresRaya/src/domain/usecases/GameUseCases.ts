import { IGameConnection } from '../interfaces/IGameConnection';

export class GameUseCases {
    constructor(private connection: IGameConnection) {}

    async iniciarConexion(): Promise<void> {
        await this.connection.conectar();
    }

    async realizarMovimiento(x: number, y: number): Promise<void> {
        await this.connection.colocarFicha(x, y);
    }

    async cerrarConexion(): Promise<void> {
        await this.connection.desconectar();
    }

    registrarEventos(callbacks: {
        onJugadorAsignado: (ficha: string, esTuTurno: boolean) => void;
        onJuegoIniciado: (tablero: any, turnoActual: string) => void;
        onMovimientoRealizado: (tablero: any) => void;
        onCambioTurno: (turnoActual: string) => void;
        onJuegoTerminado: (resultado: string, ganador: string | null) => void;
        onJugadorDesconectado: () => void;
        onError: (mensaje: string) => void;
    }): void {
        this.connection.onJugadorAsignado(callbacks.onJugadorAsignado);
        this.connection.onJuegoIniciado(callbacks.onJuegoIniciado);
        this.connection.onMovimientoRealizado(callbacks.onMovimientoRealizado);
        this.connection.onCambioTurno(callbacks.onCambioTurno);
        this.connection.onJuegoTerminado(callbacks.onJuegoTerminado);
        this.connection.onJugadorDesconectado(callbacks.onJugadorDesconectado);
        this.connection.onError(callbacks.onError);
    }
}