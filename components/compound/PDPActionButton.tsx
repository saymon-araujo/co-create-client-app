import React from "react";
import { Platform, TouchableOpacity, ActivityIndicator } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import { getBottomInset } from "rn-iphone-helper";
import { Heading, View, XStack } from "tamagui";
import { screen } from "@/constants/screen";

interface Props extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export function PDPActionButton({ title, isLoading, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest} disabled={isLoading}>
      <XStack
        bg={"black"}
        ai={"center"}
        justifyContent="center"
        gap={8}
        width={screen.width}
        p={16}
        pb={Platform.OS === "android" ? 16 : getBottomInset() + 8}
        opacity={isLoading ? 0.7 : 1}
      >
        {isLoading && <ActivityIndicator animating={isLoading} color={"#fff"} />}
        <Heading color={"$white1"} fontWeight={"bold"} ta={"center"}>
          {title}
        </Heading>
      </XStack>
    </TouchableOpacity>
  );
}
