import { screen } from "@/constants/screen";
import { formatCentsToDollars } from "@/utils/formatCentsToDollars";
import { Image } from "expo-image";
import React from "react";
import { TouchableOpacity } from "react-native";
import { H5, Text, View } from "tamagui";

interface Props {
  product: ProductProps;
  index: number;
}

export interface ProductProps {
  title: string;
  description: string;
  priceInCents: number;
  artist: ArtistProps;
  imageUrl: string;
}

interface ArtistProps {
  name: string;
  location: string;
  description: string;
  instagram: string;
}

const productContainerWidth = screen.width * 0.5;
const imageHeight = screen.height * 0.28;

export const productContainerHeight = imageHeight + screen.width * 0.1;

export function ProductListItem({ product, index }: Props) {
  function handleGoToProductPage() {}

  return (
    <TouchableOpacity onPress={handleGoToProductPage}>
      <View
        w={productContainerWidth}
        h={productContainerHeight}
        borderTopWidth={0.5}
        borderRightWidth={index % 2 === 0 ? 0 : 0.5}
        borderColor={"$gray8"}
      >
        <Image
          source={{ uri: product.imageUrl }}
          contentFit="contain"
          // May need to verify this when fetching many images to be sure that it doesn't cause performance issues as it will save all of then in memory.
          cachePolicy={"memory-disk"}
          style={{
            width: productContainerWidth,
            height: productContainerWidth,
            alignSelf: "center",
          }}
        />

        <View flex={1} mx={16} my={8}>
          <H5 fontWeight={"bold"}>{product.artist.name}</H5>
          <Text fontSize={"12"}>
            {formatCentsToDollars(product.priceInCents)} <Text color={"gray"}>| BUY NOW</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
