import { GameUseCases } from '../../domain/usecases/GameUseCases';
import { Tablero, Ficha, EstadoJuego, ResultadoJuego } from '../../core/types';

export class GameViewModel {
    private listeners: Set<() => void> = new Set();

    // Estado del juego
    private _tablero: Tablero = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    private _miFicha: Ficha = null;
    private _esMiTurno: boolean = false;
    private _estadoJuego: EstadoJuego = 'esperando';
    private _resultado: ResultadoJuego = null;
    private _turnoActual: string | null = null;

    constructor(private gameUseCases: GameUseCases) {}

    // Getters
    get tablero(): Tablero {
        return this._tablero;
    }

    get miFicha(): Ficha {
        return this._miFicha;
    }

    get esMiTurno(): boolean {
        return this._esMiTurno;
    }

    get estadoJuego(): EstadoJuego {
        return this._estadoJuego;
    }

    get resultado(): ResultadoJuego {
        return this._resultado;
    }

    get turnoActual(): string | null {
        return this._turnoActual;
    }

    // Método para suscribirse a cambios
    subscribe(listener: () => void): () => void {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    // Notificar a todos los suscriptores
    private notify(): void {
        this.listeners.forEach(listener => listener());
    }

    // Métodos para actualizar el estado
    private setTablero(tablero: Tablero): void {
        this._tablero = tablero;
        this.notify();
    }

    private setMiFicha(ficha: Ficha): void {
        this._miFicha = ficha;
        this.notify();
    }

    private setEsMiTurno(turno: boolean): void {
        this._esMiTurno = turno;
        this.notify();
    }

    private setEstadoJuego(estado: EstadoJuego): void {
        this._estadoJuego = estado;
        this.notify();
    }

    private setResultado(resultado: ResultadoJuego): void {
        this._resultado = resultado;
        this.notify();
    }

    private setTurnoActual(turno: string | null): void {
        this._turnoActual = turno;
        this.notify();
    }

    resetGame(): void {
        this._tablero = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this._miFicha = null;
        this._esMiTurno = false;
        this._estadoJuego = 'esperando';
        this._resultado = null;
        this._turnoActual = null;
        this.notify();
    }

    convertirTablero(tableroServidor: string[][]): Tablero {
        return tableroServidor.map(fila =>
            fila.map(celda => {
                if (celda === ' ') return null;
                return celda as Ficha;
            })
        ) as Tablero;
    }

    async conectar(): Promise<void> {
        this.gameUseCases.registrarEventos({
            onJugadorAsignado: (ficha, esTuTurno) => {
                console.log('Jugador asignado:', ficha, esTuTurno);
                this.setMiFicha(ficha as 'X' | 'O');
                this.setEsMiTurno(esTuTurno);
            },
            onJuegoIniciado: (tableroServidor, turnoActual) => {
                console.log('Juego iniciado');
                const tablero = this.convertirTablero(tableroServidor);
                this.setTablero(tablero);
                this.setTurnoActual(turnoActual);
                this.setEstadoJuego('jugando');
            },
            onMovimientoRealizado: (tableroServidor) => {
                console.log('Movimiento realizado');
                const tablero = this.convertirTablero(tableroServidor);
                this.setTablero(tablero);
            },
            onCambioTurno: (turnoActual) => {
                console.log('Cambio de turno:', turnoActual);
                this.setTurnoActual(turnoActual);
                // Actualizar si es mi turno basado en el connectionId
                // Nota: necesitarás almacenar tu connectionId cuando te conectes
            },
            onJuegoTerminado: (resultado, ganador) => {
                console.log('Juego terminado:', resultado);
                this.setResultado(resultado as 'victoria' | 'derrota' | 'empate');
                this.setEstadoJuego('terminado');
            },
            onJugadorDesconectado: () => {
                console.log('Jugador desconectado');
                this.resetGame();
                this.setEstadoJuego('esperando');
            },
            onError: (mensaje) => {
                console.error('Error:', mensaje);
            },
        });

        await this.gameUseCases.iniciarConexion();
    }

    async colocarFicha(x: number, y: number): Promise<void> {
        await this.gameUseCases.realizarMovimiento(x, y);
    }

    async desconectar(): Promise<void> {
        await this.gameUseCases.cerrarConexion();
    }
}