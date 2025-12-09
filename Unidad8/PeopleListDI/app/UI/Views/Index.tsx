import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { container } from "../../Core/container";
import { TYPES } from "../../Core/types";
import { Persona } from "../../Domain/Entities/Persona";
import { PeopleListVM } from "../ViewModel/PeopleListVM";

const viewModel = container.get<PeopleListVM>(TYPES.IndexVM);

export default function PeopleList() {

    const renderItem = ({ item }: { item: Persona }) => (
        <Pressable
            style={({ pressed }) => [
                styles.item,
                pressed && styles.itemPressed
            ]}
            onPress={() => { viewModel.personaSeleccionada = item }}
        >
            <Text style={styles.itemText}>
                {item.getName} {item.getSurname}
            </Text>
        </Pressable>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Listado de Personas</Text>

            <Text style={styles.subtitulo}>
                Persona seleccionada:{" "}
                <Text style={styles.resaltado}>
                    {viewModel.personaSeleccionada.getName} {viewModel.personaSeleccionada.getSurname}
                </Text>
            </Text>

            <FlatList
                data={viewModel.personasList}
                renderItem={renderItem}
                keyExtractor={(item) => item.getId.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListEmptyComponent={() => (
                    <Text style={styles.textoVacio}>No hay personas registradas</Text>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F4F7",
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    titulo: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#2D3748",
    },
    subtitulo: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
        color: "#4A5568",
    },
    resaltado: {
        fontWeight: "bold",
        color: "#2B6CB0",
    },

    // Tarjeta
    item: {
        backgroundColor: "#FFFFFF",
        padding: 18,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },
    itemPressed: {
        backgroundColor: "#E6F0FF",
    },
    itemText: {
        fontSize: 17,
        fontWeight: "500",
        color: "#2D3748",
    },

    separator: {
        height: 12,
    },

    textoVacio: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
        color: "#A0AEC0",
    },
});
