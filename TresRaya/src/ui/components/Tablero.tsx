import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Casilla } from './Casilla';
import { Tablero as TableroType } from '../../core/types';

interface TableroProps {
    tablero: TableroType;
    onCasillaPress: (x: number, y: number) => void;
    miTurno: boolean;
}

export const Tablero: React.FC<TableroProps> = ({ tablero, onCasillaPress, miTurno }) => {
    return (
        <View style={styles.container}>
            {tablero.map((fila, i) => (
                <View key={i} style={styles.fila}>
                    {fila.map((valor, j) => (
                        <Casilla
                            key={`${i}-${j}`}
                            valor={valor}
                            onPress={() => onCasillaPress(i, j)}
                            disabled={!miTurno || valor !== null}
                        />
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
        padding: 10,
        borderRadius: 10,
    },
    fila: {
        flexDirection: 'row',
    },
});