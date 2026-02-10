export type EstadoJuego = 'esperando' | 'jugando' | 'terminado';
export type ResultadoJuego = 'victoria' | 'derrota' | 'empate' | null;
export type Ficha = 'X' | 'O' | null;
export type Tablero = (Ficha)[][];

export const TYPES = {
    GameConnection: Symbol.for('GameConnection'),
    GameUseCases: Symbol.for('GameUseCases'),
    GameViewModel: Symbol.for('GameViewModel'),
};