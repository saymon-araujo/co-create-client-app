import { ProductProps } from "@/components/ProductListItem";
import { useContext, ReactNode, createContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  currentProduct: ProductProps | undefined;
  handleSetCurrentProduct: (product: ProductProps) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [currentProduct, setCurrentProduct] = useState<ProductProps | undefined>();

  function handleSetCurrentProduct(product: ProductProps) {
    setCurrentProduct(product);
  }

  return (
    <CartContext.Provider
      value={{
        currentProduct,
        handleSetCurrentProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart(): CartContextData {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
