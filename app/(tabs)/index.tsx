import React, { useState } from "react";

import { H5, Paragraph, Text, View, XStack, YStack } from "tamagui";
import { Header } from "@/components";
import { QuickFilterCarousel } from "@/components/compound/QuickFiltersCarousel";
import { SlidersHorizontal } from "lucide-react-native";
import { FlashList } from "@shopify/flash-list";
import { mockFilters, mockProducts } from "@/mock";
import { productContainerHeight, ProductListItem } from "@/components/ProductListItem";
import { screen } from "@/constants/screen";

export default function HomeScreen() {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  return (
    <View bg={"$white1"} flex={1}>
      <Header />

      <FlashList
        data={mockProducts}
        keyExtractor={(item) => String(item.title + item.imageUrl)}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={() => (
          <YStack>
            <H5 ta="center" mb={16}>
              Browse our top styles
            </H5>

            <QuickFilterCarousel
              categories={mockFilters}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />

            <XStack alignItems="center" justifyContent="center" gap={8} my={16}>
              <View
                borderWidth={1}
                px={8}
                py={4}
                borderRadius={120}
                alignItems="center"
                justifyContent="center"
              >
                <Text>{!!selectedFilter ? "1" : "0"}</Text>
              </View>
              <Paragraph letterSpacing={2}>FILTERS</Paragraph>
              <SlidersHorizontal color={"#000"} size={16} />
            </XStack>
          </YStack>
        )}
        renderItem={({ item, index }) => <ProductListItem product={item} index={index} />}
        estimatedItemSize={productContainerHeight}
        ListFooterComponent={() => (
          <View w={screen.width} borderWidth={0.5} borderColor={"$gray8"} />
        )}
      />
    </View>
  );
}
