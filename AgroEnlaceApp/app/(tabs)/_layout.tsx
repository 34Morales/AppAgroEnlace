import { Tabs } from "expo-router";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function Layout() {
  const { cart } = useContext(AppContext);

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: "#fff",

        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 10,
          height: 60,
        },

        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#888",

        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },

        tabBarIcon: ({ color, size, focused }) => {
          let iconName: any;

          // 🔥 ICONOS DINÁMICOS
          if (route.name === "index") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "explore") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* 🏠 INICIO */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
        }}
      />

      {/* 🛒 CARRITO CON BADGE */}
      <Tabs.Screen
        name="explore"
        options={{
          title: "Carrito",
          tabBarBadge: cart.length > 0 ? cart.length : undefined,
        }}
      />

      {/* 👤 PERFIL */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
        }}
      />
    </Tabs>
  );
}