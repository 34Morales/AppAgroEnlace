import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { COLORS } from "../../constants/colors";

const productos = [
  {
    id: "1",
    nombre: "Manzanas",
    precio: "$30/kg",
    imagen: "https://via.placeholder.com/150"
  },
  {
    id: "2",
    nombre: "Tomates",
    precio: "$25/kg",
    imagen: "https://via.placeholder.com/150"
  },
];

export default function Home() {
  const { addToCart } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos 🌽</Text>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
            <Text style={styles.name}>{item.nombre}</Text>
            <Text>{item.precio}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.buttonText}>Agregar al carrito</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    color: COLORS.text,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});