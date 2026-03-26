import { createContext, useState, ReactNode } from "react";

export const AppContext = createContext<any>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{ user, setUser, cart, addToCart, logout }}
    >
      {children}
    </AppContext.Provider>
  );
}