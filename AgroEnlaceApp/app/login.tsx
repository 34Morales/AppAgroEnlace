import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { COLORS } from "../constants/colors";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Login() {
  const router = useRouter();
  const { setUser } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (!email || !pass) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }

    setUser({ email });
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AgroEnlace 🌱</Text>

      <TextInput
        placeholder="Correo"
        style={styles.input}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        onChangeText={setPass}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});