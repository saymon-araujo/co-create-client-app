import { Header } from "@/components";
import { useCart } from "@/hooks/cart";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "tamagui";

export default function ProductDetailScreen() {
  const { currentProduct } = useCart();
  const router = useRouter();
  const { productId } = useLocalSearchParams();

  console.log(currentProduct);

  return (
    <View flex={1}>
      <Header goBack />
      <Text>Product ID: {"123"}</Text>
    </View>
  );
}
