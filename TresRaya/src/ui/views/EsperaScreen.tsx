import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export const EsperaScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#3498db" />
            <Text style={styles.texto}>Esperando oponente...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
    },
    texto: {
        marginTop: 20,
        fontSize: 24,
        color: '#2c3e50',
        fontWeight: '600',
    },
});