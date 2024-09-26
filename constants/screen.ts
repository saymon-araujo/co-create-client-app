import { Dimensions } from "react-native";
import { getTopInset } from "rn-iphone-helper";

export const screen = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
  statusBarHeight: getTopInset(),
};
