import { View, Text, FlatList, StyleSheet } from "react-native";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { COLORS } from "../../constants/colors";

export default function Cart() {
  const { cart } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito 🛒</Text>

      {cart.length === 0 ? (
        <Text>No hay productos</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text>{item.nombre}</Text>
              <Text>{item.precio}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 10,
  },
  title: {
    fontSize: 22,
    color: COLORS.primary,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
});