import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Tablero } from '../components/Tablero';
import { Tablero as TableroType, Ficha } from '../../core/types';

interface GameScreenProps {
    tablero: TableroType;
    esMiTurno: boolean;
    miFicha: Ficha;
    onCasillaPress: (x: number, y: number) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ 
    tablero, 
    esMiTurno, 
    miFicha, 
    onCasillaPress 
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tres en Raya</Text>
            <Text style={styles.fichaTexto}>Eres: {miFicha}</Text>
            <Text style={[
                styles.turnoTexto,
                esMiTurno ? styles.miTurno : styles.noMiTurno
            ]}>
                {esMiTurno ? '¡Tu turno!' : 'Esperando al oponente...'}
            </Text>
            <Tablero
                tablero={tablero}
                onCasillaPress={onCasillaPress}
                miTurno={esMiTurno}
            />
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
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2c3e50',
    },
    fichaTexto: {
        fontSize: 20,
        marginBottom: 10,
        color: '#34495e',
    },
    turnoTexto: {
        fontSize: 18,
        marginBottom: 30,
        fontWeight: '600',
    },
    miTurno: {
        color: '#27ae60',
    },
    noMiTurno: {
        color: '#95a5a6',
    },
});