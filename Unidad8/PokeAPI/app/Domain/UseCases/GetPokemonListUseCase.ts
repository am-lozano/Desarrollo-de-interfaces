import { IPokemonRepository } from '../Repositories/IPokemonRepository';
import { Pokemon } from '../Entities/Pokemon';

class GetPokemonListUseCase {
    constructor(private pokemonRepository: IPokemonRepository) { }

    async execute(limit: number, offset: number): Promise<Pokemon[]> {
        return await this.pokemonRepository.getPokemonList(limit, offset);
    }
}

export { GetPokemonListUseCase };