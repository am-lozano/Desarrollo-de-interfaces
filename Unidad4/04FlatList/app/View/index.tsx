import { Text, View, FlatList, StyleSheet, TouchableOpacity, Alert, Platform } from "react-native"
import RepositoryPerson from "../Model/Data/RepositoryPerson";
import IndexVM from "../ViewModel/IndexVM";

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ffb22e',
        },
        container: {
        backgroundColor: '#840322',
        margin: 20,
        borderRadius: 20,        
        },
        item: {
        padding: 10,
        borderWidth: 3,
        borderColor: '#1a6caf',
        borderRadius: 20,
        alignItems: 'center'
    },
    text: {
        color: 'white', 
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
    }
})

export default function Index() {

    const users = new IndexVM();

    return(
        <FlatList
        data = {users.getUsers()}
        keyExtractor = {(item) => item.getId.toString()}
        renderItem = {({ item }) => (
            <View style = {styles.background}>
                <View style = {styles.container}>
                    <TouchableOpacity
                        style = {styles.item}
                        onPress={() => {
                            const title = 'Información de la persona';
                            const message = `Nombre: ${item.getName}\nApellido: ${item.getSurname}\n`;
                            console.log('item pressed:', item);
                            if (Platform.OS === 'web') {
                                // on web, use the browser alert as a reliable fallback
                                (window as any).alert(`${title}\n\n${message}`);
                            } else {
                                Alert.alert(title, message);
                            }
                        }}
                    >
                        <Text style = {styles.text}>{item.getName} {item.getSurname}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )}
        />
    )
}