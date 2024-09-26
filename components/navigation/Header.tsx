import React from "react";
import { screen } from "@/constants/screen";
import { View, XStack } from "tamagui";
import { Image } from "expo-image";
import { ChevronLeft } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface Props {
  goBack?: boolean;
}

export function Header({ goBack }: Props) {
  const router = useRouter();
  const imageSizeMultiplier = 0.09;

  function handleGoBack() {
    if (goBack) {
      router.back();
    }
  }

  return (
    <View pb={16} pt={16 + screen.statusBarHeight} px={16} bg={"$white1"}>
      <XStack gap={16} alignItems="center">
        {goBack && (
          <TouchableOpacity
            onPress={handleGoBack}
            hitSlop={{ bottom: 8, left: 8, right: 8, top: 8 }}
          >
            <View borderWidth={1.5} borderRadius={4} p={1} borderColor={"black"}>
              <ChevronLeft color={"#000"} />
            </View>
          </TouchableOpacity>
        )}

        <Image
          cachePolicy={"disk"}
          source={require("@/assets/images/cocreate-logo-dark.png")}
          style={{
            width: 1600 * imageSizeMultiplier,
            height: 400 * imageSizeMultiplier,
          }}
        />
      </XStack>
    </View>
  );
}
