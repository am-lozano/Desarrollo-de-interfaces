const container = new Container();
container.registerDependencies();

const PokemonApp: React.FC = () => {
    const [viewModel] = useState(() => container.resolve<PokemonViewModel>(TYPES.PokemonViewModel));
    const [, forceUpdate] = useState({});

    useEffect(() => {
        const observer = () => forceUpdate({});
        viewModel.addObserver(observer);
    }, [viewModel]);

    const handleLoadMore = () => {
        viewModel.loadNextPage();
    };

    const handleReset = () => {
        viewModel.reset();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                            <span className="text-5xl">🎮</span>
                            Pokédex MVVM
                        </h1>
                        <p className="text-gray-600">
                            Arquitectura limpia con Clean Architecture y MVVM
                        </p>
                    </div>

                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={handleLoadMore}
                            disabled={viewModel.isLoading}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            {viewModel.isLoading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Cargando...
                                </>
                            ) : (
                                <>
                                    Cargar 20 Pokémon
                                    {viewModel.pokemonList.length > 0 && ` (${viewModel.pokemonList.length} cargados)`}
                                </>
                            )}
                        </button>

                        {viewModel.pokemonList.length > 0 && (
                            <button
                                onClick={handleReset}
                                disabled={viewModel.isLoading}
                                className="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                                Reset
                            </button>
                        )}
                    </div>

                    {viewModel.error && (
                        <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded flex items-start gap-3">
                            <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                            <div>
                                <p className="font-semibold text-red-800">Error</p>
                                <p className="text-red-700 text-sm">{viewModel.error}</p>
                            </div>
                        </div>
                    )}

                    {viewModel.pokemonList.length === 0 && !viewModel.isLoading && !viewModel.error && (
                        <div className="text-center py-16 text-gray-500">
                            <p className="text-lg mb-2">¡No hay Pokémon cargados!</p>
                            <p className="text-sm">Pulsa el botón para cargar los primeros 20 Pokémon</p>
                        </div>
                    )}

                    {viewModel.pokemonList.length > 0 && (
                        <div className="space-y-2">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-gray-700">
                                    Lista de Pokémon
                                </h2>
                                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                    Total: {viewModel.pokemonList.length}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2">
                                {viewModel.pokemonList.map((pokemon, index) => (
                                    <div
                                        key={`${pokemon.name}-${index}`}
                                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-blue-600 border-2 border-blue-300">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-gray-800 capitalize text-lg">
                                                    {pokemon.name}
                                                </p>
                                                <p className="text-xs text-gray-500 truncate">
                                                    {pokemon.url}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="text-center text-sm text-gray-500">
                            <p>
                                <strong>Arquitectura:</strong> MVVM + Clean Architecture
                            </p>
                            <p className="mt-1">
                                <strong>Capas:</strong> Domain → Data → Presentation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonApp;