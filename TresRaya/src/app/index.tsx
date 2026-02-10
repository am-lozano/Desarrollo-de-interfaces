import React, { useEffect, useState, useCallback } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import container from '../core/container';
import { TYPES } from '../core/types';
import { GameViewModel } from '../ui/viewmodels/GameViewModel';
import { EsperaScreen } from '../ui/views/EsperaScreen';
import { GameScreen } from '../ui/views/GameScreen';
import { ResultadoScreen } from '../ui/views/ResultadoScreen';

export default function Index() {
    const [viewModel] = useState(() => container.resolve<GameViewModel>(TYPES.GameViewModel));
    const [, forceUpdate] = useState({});

    // Forzar re-render cuando el ViewModel notifique cambios
    const handleUpdate = useCallback(() => {
        forceUpdate({});
    }, []);

    useEffect(() => {
        // Suscribirse a cambios del ViewModel
        const unsubscribe = viewModel.subscribe(handleUpdate);

        const iniciar = async () => {
            try {
                await viewModel.conectar();
            } catch (error) {
                console.error('Error al conectar:', error);
                Alert.alert('Error', 'No se pudo conectar al servidor');
            }
        };

        iniciar();

        return () => {
            unsubscribe();
            viewModel.desconectar();
        };
    }, [viewModel, handleUpdate]);

    const handleCasillaPress = async (x: number, y: number) => {
        try {
            await viewModel.colocarFicha(x, y);
        } catch (error) {
            console.error('Error al colocar ficha:', error);
        }
    };

    const handleNuevaPartida = async () => {
        try {
            await viewModel.desconectar();
            viewModel.resetGame();
            
            // Crear nueva instancia del ViewModel
            const nuevoViewModel = container.resolve<GameViewModel>(TYPES.GameViewModel);
            await nuevoViewModel.conectar();
            
            // En producción, necesitarías actualizar el estado para usar el nuevo viewModel
            // Por simplicidad, recargamos la página
            if (typeof window !== 'undefined') {
                window.location.reload();
            }
        } catch (error) {
            console.error('Error al reiniciar:', error);
            Alert.alert('Error', 'No se pudo reiniciar la partida');
        }
    };

    return (
        <View style={styles.container}>
            {viewModel.estadoJuego === 'esperando' && <EsperaScreen />}
            {viewModel.estadoJuego === 'jugando' && (
                <GameScreen
                    tablero={viewModel.tablero}
                    esMiTurno={viewModel.esMiTurno}
                    miFicha={viewModel.miFicha}
                    onCasillaPress={handleCasillaPress}
                />
            )}
            {viewModel.estadoJuego === 'terminado' && (
                <ResultadoScreen
                    resultado={viewModel.resultado}
                    onNuevaPartida={handleNuevaPartida}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});