import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ResultadoJuego } from '../../core/types';

interface ResultadoScreenProps {
    resultado: ResultadoJuego;
    onNuevaPartida: () => void;
}

export const ResultadoScreen: React.FC<ResultadoScreenProps> = ({ resultado, onNuevaPartida }) => {
    const getResultadoTexto = () => {
        switch (resultado) {
            case 'victoria':
                return '¡Ganaste! 🎉';
            case 'derrota':
                return 'Perdiste 😔';
            case 'empate':
                return '¡Empate! 🤝';
            default:
                return '';
        }
    };

    const getColor = () => {
        switch (resultado) {
            case 'victoria':
                return '#27ae60';
            case 'derrota':
                return '#e74c3c';
            case 'empate':
                return '#f39c12';
            default:
                return '#95a5a6';
        }
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.resultadoTexto, { color: getColor() }]}>
                {getResultadoTexto()}
            </Text>
            <TouchableOpacity style={styles.boton} onPress={onNuevaPartida}>
                <Text style={styles.botonTexto}>Nueva Partida</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 20,
    },
    resultadoTexto: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    boton: {
        backgroundColor: '#3498db',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
    },
    botonTexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});