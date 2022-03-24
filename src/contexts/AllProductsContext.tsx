import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface CoffesProps {
  coffeDescription: string;
  coffeName: string;
  id: number;
  price: number;
  coffeImage: string;
  estoque: number;
}

export const AllProductsContext = createContext<CoffesProps[]>([]);

interface AllProductsProviderProps {
  children: ReactNode;
}

export function AllProductsProvider({ children }: AllProductsProviderProps) {
  const [coffes, setCoffes] = useState<CoffesProps[]>([]);
  const [loadingComponent, setIsLoadingComponent] = useState(true);

  useEffect(() => {
    api.get("/coffes").then((response) => {
      setCoffes(response.data);

      if (coffes) {
        setIsLoadingComponent(false);
      }
    });
  }, []);
  return (
    <AllProductsContext.Provider value={coffes}>
      {children}
    </AllProductsContext.Provider>
  );
}
