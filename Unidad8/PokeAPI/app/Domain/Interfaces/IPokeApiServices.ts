import { PokemonListResponseDto } from '../Dtos/PokemonListResponseDto';

interface IPokeApiService {
    fetchPokemonList(limit: number, offset: number): Promise<PokemonListResponseDto>;
}

export { IPokeApiService };