// AuthStatus.tsx
import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "./AuthContext";

export default function AuthStatus() {
    const { isLoggedIn, userName, loginUser, logoutUser } = useContext(AuthContext);

    return (
        <View style={{ padding: 20 }}>
            {/* Estado general */}
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
                {isLoggedIn ? "✅ Conectado" : "❌ Desconectado"}
            </Text>

            {/* Mostrar nombre del usuario */}
            {isLoggedIn && (
                <Text style={{ fontSize: 16, marginBottom: 10 }}>
                    Usuario: {userName}
                </Text>
            )}

            {/* Botón dinámico */}
            {isLoggedIn ? (
                <Button
                    title="Cerrar Sesión"
                    onPress={logoutUser}
                    color="red"
                />
            ) : (
                <Button
                    title="Iniciar Sesión"
                    onPress={() => loginUser("Antonio")}
                    color="green"
                />
            )}
        </View>
    );
}
