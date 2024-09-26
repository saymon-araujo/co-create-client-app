import React from "react";
import { screen } from "@/constants/screen";
import { View } from "tamagui";
import { Image } from "expo-image";

export function Header() {
  const imageSizeMultiplier = 0.09;

  return (
    <View pb={16} pt={16 + screen.statusBarHeight} px={16} bg={"$white1"}>
      <Image
        cachePolicy={"disk"}
        source={require("@/assets/images/cocreate-logo-dark.png")}
        style={{
          width: 1600 * imageSizeMultiplier,
          height: 400 * imageSizeMultiplier,
        }}
      />
    </View>
  );
}
