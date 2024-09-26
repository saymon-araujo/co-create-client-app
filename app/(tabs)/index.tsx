import React, { useState } from "react";

import { getToken, getTokens, H5, Paragraph, Text, View, XStack } from "tamagui";
import { Header } from "@/components";
import { OptionsProps, QuickFilterCarousel } from "@/components/compound/QuickFiltersCarousel";
import { SlidersHorizontal } from "lucide-react-native";

const mockCategories: OptionsProps[] = [
  {
    imageUrl:
      "https://wmciapwndxhbupdywzet.supabase.co/storage/v1/render/image/public/assets/top_styles/botanical.jpg?width=64&quality=100&resize=contain",
    title: "Botanical",
    value: "botanical",
  },
  {
    imageUrl:
      "https://wmciapwndxhbupdywzet.supabase.co/storage/v1/render/image/public/assets/top_styles/surrealism.jpg?width=64&quality=100&resize=contain",
    title: "Surrealism",
    value: "surrealism",
  },
  {
    imageUrl:
      "https://wmciapwndxhbupdywzet.supabase.co/storage/v1/render/image/public/assets/top_styles/black_work.jpg?width=64&quality=100&resize=contain",
    title: "Blackwork",
    value: "blackwork",
  },
  {
    imageUrl:
      "https://wmciapwndxhbupdywzet.supabase.co/storage/v1/render/image/public/assets/top_styles/geometric.jpg?width=64&quality=75&resize=contain",
    title: "Geometric",
    value: "geometric",
  },
];

export default function HomeScreen() {
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const colors = getTokens().color;

  return (
    <View bg={"$white1"}>
      <Header />

      <H5 ta="center" mb={16}>
        Browse our top styles
      </H5>

      <QuickFilterCarousel
        categories={mockCategories}
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
    </View>
  );
}
