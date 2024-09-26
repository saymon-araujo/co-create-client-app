import React, { ReactNode } from "react";

import { CartProvider } from "./cart";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return <CartProvider>{children}</CartProvider>;
}

export { AppProvider };
