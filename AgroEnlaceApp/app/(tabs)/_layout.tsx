import { Tabs } from "expo-router";
import { COLORS } from "../../constants/colors";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: "#fff",
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Inicio" }} />
      <Tabs.Screen name="explore" options={{ title: "Carrito" }} />
      <Tabs.Screen name="profile" options={{ title: "Perfil" }} />
    </Tabs>
  );
}