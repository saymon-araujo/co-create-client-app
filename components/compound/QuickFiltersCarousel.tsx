import React, { useCallback } from "react";
import { FlatList } from "react-native";
import { Button, Text } from "tamagui";
import { Image } from "expo-image";

interface Props {
  categories: FilterOptionsProps[];
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}

export interface FilterOptionsProps {
  title: string;
  value: string;
  imageUrl: string;
}

export function QuickFilterCarousel({ categories, selectedFilter, setSelectedFilter }: Props) {
  const isCategorySelected = useCallback(
    (categoryToCompare: string) => {
      return selectedFilter === categoryToCompare;
    },
    [selectedFilter]
  );

  const renderItem = useCallback(
    ({ item }: { item: FilterOptionsProps }) => (
      <Button
        onPress={() => setSelectedFilter(item.value)}
        bg={isCategorySelected(item.value) ? "$black1" : "$white1"}
        borderRadius={"$0"}
        px={8}
      >
        <Text color={isCategorySelected(item.value) ? "$white1" : "$black1"}>
          {item.title.toUpperCase()}
        </Text>
        <Image
          source={{ uri: item.imageUrl }}
          style={{
            width: 24,
            height: 24,
            borderRadius: 48,
          }}
        />
      </Button>
    ),
    [selectedFilter, isCategorySelected]
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item, index) => String(item.value)}
      contentContainerStyle={{ paddingHorizontal: 8 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
