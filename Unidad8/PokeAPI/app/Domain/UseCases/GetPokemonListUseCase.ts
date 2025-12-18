class GetPokemonListUseCase {
    constructor(private pokemonRepository: IPokemonRepository) { }

    async execute(limit: number, offset: number): Promise<Pokemon[]> {
        return await this.pokemonRepository.getPokemonList(limit, offset);
    }
}