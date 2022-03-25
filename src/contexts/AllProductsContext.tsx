import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/api";

interface Coffes {
  coffeDescription: string;
  coffeName: string;
  id: number;
  price: number;
  coffeImage: string;
  estoque: number;
}

interface ProductsDataContext {
  coffes: Coffes[];
}

interface AllProductsProviderProps {
  children: ReactNode;
}

export const AllProductsContext = createContext<ProductsDataContext>({
  coffes: [],
});

export function AllProductsProvider({ children }: AllProductsProviderProps) {
  const [coffes, setCoffes] = useState<Coffes[]>([]);

  useEffect(() => {
    api.get("/coffes").then((response) => {
      setCoffes(response.data);
    });
  }, []);
  return (
    <AllProductsContext.Provider value={{ coffes }}>
      {children}
    </AllProductsContext.Provider>
  );
}
