import { useCart } from "@/hooks/cart";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function ProductDetailScreen() {
  const { currentProduct } = useCart();
  const router = useRouter();
  const { productId } = useLocalSearchParams();

  console.log(currentProduct);

  return (
    <View>
      <Text>Product ID: {"123"}</Text>
    </View>
  );
}
