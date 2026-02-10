import { Tablero } from '../../core/types';

export interface IGameConnection {
    conectar(): Promise<void>;
    colocarFicha(x: number, y: number): Promise<void>;
    desconectar(): Promise<void>;
    
    onJugadorAsignado(callback: (ficha: string, esTuTurno: boolean) => void): void;
    onJuegoIniciado(callback: (tablero: Tablero, turnoActual: string) => void): void;
    onMovimientoRealizado(callback: (tablero: Tablero) => void): void;
    onCambioTurno(callback: (turnoActual: string) => void): void;
    onJuegoTerminado(callback: (resultado: string, ganador: string | null) => void): void;
    onJugadorDesconectado(callback: () => void): void;
    onError(callback: (mensaje: string) => void): void;
}