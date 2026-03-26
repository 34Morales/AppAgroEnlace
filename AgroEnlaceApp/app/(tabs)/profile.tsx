import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useRouter } from "expo-router";
import { COLORS } from "../../constants/colors";

export default function Profile() {
  const { user, logout } = useContext(AppContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil 👤</Text>

      <Text>Email: {user?.email}</Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: COLORS.primary,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});