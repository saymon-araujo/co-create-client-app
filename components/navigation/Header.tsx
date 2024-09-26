import React, { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { screen } from "@/constants/screen";
import { Text, View, XStack } from "tamagui";
import { Image } from "expo-image";
import { ArrowLeft } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

interface Props {
  goBack?: boolean;
  alternativeGoBackBehavior?: () => void;
  step?: 1 | 2 | 3;
  initialTime?: number;
}

export function Header({ goBack, alternativeGoBackBehavior, step, initialTime = 300 }: Props) {
  const router = useRouter();
  const imageSizeMultiplier = 0.09;

  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleGoBack = useCallback(() => {
    if (goBack) {
      alternativeGoBackBehavior ? alternativeGoBackBehavior() : router.back();
    }
  }, [goBack, router]);

  const formatTime = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }, []);

  const formattedTime = useMemo(() => formatTime(timeRemaining), [timeRemaining, formatTime]);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return;
    }

    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [timeRemaining]);

  return (
    <>
      <View
        pb={16}
        pt={16 + screen.statusBarHeight}
        px={16}
        bg={"$white1"}
        borderBottomWidth={1}
        borderColor={"$gray5"}
      >
        <XStack gap={16} alignItems="center" justifyContent={step ? "space-between" : "flex-start"}>
          {goBack && (
            <TouchableOpacity
              onPress={handleGoBack}
              hitSlop={{ bottom: 8, left: 8, right: 8, top: 8 }}
            >
              <ArrowLeft color={"#000"} />
            </TouchableOpacity>
          )}

          {!step ? (
            <Image
              cachePolicy={"disk"}
              source={require("@/assets/images/cocreate-logo-dark.png")}
              style={{
                width: 1600 * imageSizeMultiplier,
                height: 400 * imageSizeMultiplier,
              }}
            />
          ) : (
            <Text color={"$gray10"} letterSpacing={1.4} fontSize={12}>
              STEP {step}/3
            </Text>
          )}
        </XStack>
      </View>

      {step && (
        <>
          <View bg={"$gray2"} py={6}>
            <Text ta={"center"} letterSpacing={1.2}>
              TIME REMAINING {formattedTime}
            </Text>
          </View>
        </>
      )}
    </>
  );
}
