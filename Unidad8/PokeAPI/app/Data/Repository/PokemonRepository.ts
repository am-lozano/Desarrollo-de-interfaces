class PokemonRepositoryImpl implements IPokemonRepositoryImpl {
    constructor(private pokeApiService: IPokeApiService) { }

    async getPokemonList(limit: number, offset: number): Promise<Pokemon[]> {
        const response = await this.pokeApiService.fetchPokemonList(limit, offset);
        return response.results.map(dto => this.mapDtoToEntity(dto));
    }

    private mapDtoToEntity(dto: PokemonDto): Pokemon {
        return new Pokemon(dto.name, dto.url);
    }
}