import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ficha } from '../../core/types';

interface CasillaProps {
    valor: Ficha;
    onPress: () => void;
    disabled: boolean;
}

export const Casilla: React.FC<CasillaProps> = ({ valor, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.casilla, disabled && styles.disabled]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[
                styles.texto,
                valor === 'X' && styles.textoX,
                valor === 'O' && styles.textoO,
            ]}>
                {valor || ''}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    casilla: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    disabled: {
        opacity: 0.6,
    },
    texto: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    textoX: {
        color: '#e74c3c',
    },
    textoO: {
        color: '#3498db',
    },
});