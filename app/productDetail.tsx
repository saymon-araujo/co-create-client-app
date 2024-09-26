import React, { useEffect, useState } from "react";
import { Header } from "@/components";
import { PDPActionButton } from "@/components/compound/PDPActionButton";
import { ProductProps } from "@/components/ProductListItem";
import { screen } from "@/constants/screen";
import { useCart } from "@/hooks/cart";
import { formatCentsToDollars } from "@/utils/formatCentsToDollars";
import { Image } from "expo-image";
import { useRouter, useLocalSearchParams } from "expo-router";
import { H1, H4, Heading, ScrollView, Text, View, XStack, YStack } from "tamagui";
import { Instagram } from "lucide-react-native";
import { Alert, Linking, TouchableOpacity } from "react-native";

export default function ProductDetailScreen() {
  const { currentProduct } = useCart();
  const router = useRouter();
  const { productId } = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const [productInfo, setProductInfo] = useState<ProductProps | undefined>(currentProduct);

  function handleStartCheckout() {
    // setIsLoading(true); // uncomment this line when implementing the checkout logic
    router.push({ pathname: "/purchases", params: { checkoutId: "mock-id" } });
    console.log("Starting checkout");
  }

  function handleOpenArtistInstragam() {
    if (productInfo?.artist.instagram) {
      const instagramUrl = `https://www.instagram.com/${productInfo.artist.instagram}/`;
      Linking.canOpenURL(instagramUrl)
        .then((supported) => {
          if (supported) {
            Linking.openURL(instagramUrl);
          } else {
            Alert.alert("Error", "Instagram app is not installed or the URL is not supported.");
          }
        })
        .catch((err) => console.error("An error occurred while opening Instagram:", err));
    } else {
      Alert.alert("Error", "Instagram handle not available for this artist.");
    }
  }

  useEffect(() => {
    if (!productId) {
      return;
    }

    if (!productInfo) {
      // implement here the logic to fetch the product info from the server using the productId
    }
  }, [productInfo, productId]);

  return (
    <View flex={1} bg={"$white1"}>
      <Header goBack />
      {productInfo ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={{ uri: productInfo?.imageUrl }}
            contentFit="contain"
            cachePolicy={"memory-disk"}
            style={{
              width: screen.width,
              height: screen.width * 0.8,
              alignSelf: "center",
            }}
          />

          <YStack justifyContent="center" alignItems="center">
            <H1 fontWeight={"bold"} ta={"center"} mt={8}>
              {productInfo?.title}
            </H1>
            <Text ta={"center"} mx={32} mt={16}>
              {productInfo?.description}
            </Text>
            <Text ta={"center"} my={16}>
              {productInfo?.artist.name}
            </Text>

            <XStack ai={"center"}>
              <Text ta={"center"} fontWeight={"bold"} fontSize={28}>
                {formatCentsToDollars(productInfo?.priceInCents)}.00{" "}
              </Text>

              <Text color={"$gray11"} fontWeight={"normal"} fontSize={14}>
                USD
              </Text>
            </XStack>
          </YStack>

          <View width={screen.width} minHeight={1} bg={"$gray7"} mt={screen.height * 0.1} />

          <YStack mx={16} mt={16} mb={64}>
            <H4 fontWeight={"bold"} mb={24}>
              THE ARTIST
            </H4>
            <Heading fontWeight={"bold"} mb={8}>
              {productInfo?.artist.name}
            </Heading>
            <Text mb={16} color={"$gray11"}>
              {productInfo?.artist.location}
            </Text>

            <Text fontWeight={"bold"} mb={16}>
              {productInfo?.artist.description}
            </Text>

            <TouchableOpacity
              onPress={handleOpenArtistInstragam}
              hitSlop={{
                bottom: 8,
                left: 8,
                right: 8,
                top: 8,
              }}
            >
              <Instagram color={"#000"} strokeWidth={1.25} />
            </TouchableOpacity>
          </YStack>
        </ScrollView>
      ) : (
        <></>
      )}

      <PDPActionButton title="Purchase" onPress={handleStartCheckout} isLoading={isLoading} />
    </View>
  );
}
