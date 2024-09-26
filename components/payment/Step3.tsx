import { StepsType } from "@/app/purchases";
import { screen } from "@/constants/screen";
import { useCart } from "@/hooks/cart";
import { formatCentsToDollars } from "@/utils/formatCentsToDollars";
import { Image } from "expo-image";
import React from "react";
import {
  Button,
  H2,
  H3,
  H5,
  Input,
  Label,
  Paragraph,
  ScrollView,
  Text,
  XStack,
  YStack,
} from "tamagui";

interface Props {
  handleGoToStep: (step: StepsType) => void;
}

export function Step3({ handleGoToStep }: Props) {
  const { currentProduct } = useCart();

  return (
    <ScrollView showsVerticalScrollIndicator={false} mx={16} bg={"$white1"}>
      <H2 fontWeight={"bold"} ta={"left"} mt={16}>
        Review Your Information
      </H2>

      <Paragraph color={"$gray11"} mt={4} mb={16}>
        Please review your details below. You can edit any section if needed. Payment information
        will be entered on the next page.
      </Paragraph>

      <Text fontWeight={"bold"} fontSize={16} letterSpacing={1.3} mt={32} mb={16}>
        Tattoo Details
      </Text>

      <XStack alignItems="flex-start">
        <Image
          source={{ uri: currentProduct?.imageUrl }}
          contentFit="contain"
          cachePolicy={"memory-disk"}
          style={{
            width: screen.width * 0.3,
            height: screen.width * 0.3,
            alignSelf: "center",
          }}
        />

        <YStack mb={16} ml={32} gap={4}>
          <H5 ta={"left"}>{currentProduct?.title}</H5>
          <Text ta={"left"} color={"$gray11"}>
            BY {currentProduct?.artist.name.toUpperCase()}
          </Text>
          <Text ta={"left"} color={"$gray11"}>
            {formatCentsToDollars(currentProduct?.priceInCents ?? 0)}
          </Text>
        </YStack>
      </XStack>

      <Text fontWeight={"bold"} fontSize={16} letterSpacing={1.3} mt={32} mb={16}>
        Contact Information
      </Text>

      <YStack gap={8}>
        <XStack alignItems="flex-start" space="$2">
          <Text fontSize={12} width={"50%"} color={"$gray10"}>
            NAME
          </Text>
          <Text>SAYMON ARAÚJO</Text>
        </XStack>

        <XStack alignItems="flex-start" space="$2">
          <Text fontSize={12} width={"50%"} color={"$gray10"}>
            PHONE
          </Text>
          <Text>+5531995408466</Text>
        </XStack>

        <XStack alignItems="flex-start" space="$2">
          <Text fontSize={12} width={"50%"} color={"$gray10"}>
            LOCATION
          </Text>
          <Text fontSize={12} width={"50%"}>
            {"Belo Horizonte, Minas Gerais, BRA".toUpperCase()}
          </Text>
        </XStack>

        <Button
          borderRadius={0}
          borderColor={"$gray8"}
          borderWidth={1}
          mt={8}
          onPress={() => handleGoToStep(1)}
        >
          EDIT
        </Button>
      </YStack>

      <Text fontWeight={"bold"} fontSize={16} letterSpacing={1.3} mt={32} mb={16}>
        Requested date
      </Text>

      <YStack gap={8} mb={32}>
        <XStack alignItems="flex-start" space="$2">
          <Text fontSize={12} letterSpacing={1.2}>
            OCTOBER 4, 2024
          </Text>
        </XStack>

        <Button
          borderRadius={0}
          borderColor={"$gray8"}
          borderWidth={1}
          mt={8}
          onPress={() => handleGoToStep(2)}
        >
          EDIT
        </Button>
      </YStack>
    </ScrollView>
  );
}
