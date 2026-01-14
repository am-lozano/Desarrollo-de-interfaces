import { Pokemon } from '../../Domain/Entities/Pokemon';
import { GetPokemonListUseCase } from '../../Domain/UseCases/GetPokemonListUseCase';

class PokemonViewModel {
    private _pokemonList: Pokemon[] = [];
    private _currentOffset: number = 0;
    private _limit: number = 20;
    private _isLoading: boolean = false;
    private _error: string | null = null;
    private observers: Function[] = [];

    constructor(private getPokemonListUseCase: GetPokemonListUseCase) { }

    get pokemonList(): Pokemon[] {
        return this._pokemonList;
    }

    get currentOffset(): number {
        return this._currentOffset;
    }

    get limit(): number {
        return this._limit;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    get error(): string | null {
        return this._error;
    }

    addObserver(observer: Function): void {
        this.observers.push(observer);
    }

    private notifyObservers(): void {
        this.observers.forEach(observer => observer());
    }

    async loadNextPage(): Promise<void> {
        if (this._isLoading) return;

        try {
            this._isLoading = true;
            this._error = null;
            this.notifyObservers();

            const newPokemon = await this.getPokemonListUseCase.execute(this._limit, this._currentOffset);
            this._pokemonList = [...this._pokemonList, ...newPokemon];
            this._currentOffset += this._limit;

            this._isLoading = false;
            this.notifyObservers();
        } catch (error) {
            this._isLoading = false;
            this._error = error instanceof Error ? error.message : 'Error desconocido';
            this.notifyObservers();
        }
    }

    reset(): void {
        this._pokemonList = [];
        this._currentOffset = 0;
        this._error = null;
        this.notifyObservers();
    }
}