interface IPokeApiService {
    fetchPokemonList(limit: number, offset: number): Promise<PokemonListResponseDto>;
}