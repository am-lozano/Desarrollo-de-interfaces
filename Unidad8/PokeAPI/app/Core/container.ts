class Container {
    private dependencies: Map<symbol, () => any> = new Map();
    private instances: Map<symbol, any> = new Map();

    register<T>(token: symbol, factory: () => T): void {
        this.dependencies.set(token, factory);
    }

    resolve<T>(token: symbol): T {
        if (this.instances.has(token)) {
            return this.instances.get(token);
        }

        const factory = this.dependencies.get(token);
        if (!factory) {
            throw new Error(`No dependency registered for token: ${token.toString()}`);
        }

        const instance = factory();
        this.instances.set(token, instance);
        return instance;
    }

    registerDependencies(): void {
        this.register(TYPES.IPokeApiService, () => new PokeApiService());

        this.register(TYPES.IPokemonRepository, () => {
            const pokeApiService = this.resolve<IPokeApiService>(TYPES.IPokeApiService);
            return new PokemonRepositoryImpl(pokeApiService);
        });

        this.register(TYPES.GetPokemonListUseCase, () => {
            const pokemonRepository = this.resolve<IPokemonRepository>(TYPES.IPokemonRepository);
            return new GetPokemonListUseCase(pokemonRepository);
        });

        this.register(TYPES.PokemonViewModel, () => {
            const getPokemonListUseCase = this.resolve<GetPokemonListUseCase>(TYPES.GetPokemonListUseCase);
            return new PokemonViewModel(getPokemonListUseCase);
        });
    }
}
