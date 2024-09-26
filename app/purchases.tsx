import React, { useCallback, useEffect, useState } from "react";
import { Header } from "@/components";
import { PDPActionButton } from "@/components/compound/PDPActionButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "tamagui";
import { Step1 } from "@/components/payment/Step1";
import { Step2 } from "@/components/payment/Step2";
import { Step3 } from "@/components/payment/Step3";

export type StepsType = 1 | 2 | 3;

export default function PurchasesScreen() {
  const { checkoutId } = useLocalSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<StepsType>(1);

  function handleStartPayment() {}

  function handleNextStep() {
    if (currentStep === 3) {
      handleStartPayment();
      return;
    }

    setCurrentStep((prevStep) => (prevStep + 1) as StepsType);
  }

  useEffect(() => {
    if (!checkoutId) {
      return;
    }
    // implement here the logic to fetch the checkout info from the server using the checkoutId
  }, [checkoutId]);

  return (
    <View flex={1} bg={"$white1"}>
      <Header goBack step={currentStep} />

      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && (
        <Step3
          handleGoToStep={(value) => {
            setCurrentStep(value);
          }}
        />
      )}

      <PDPActionButton
        title={currentStep === 3 ? "PURCHASE" : "SAVE"}
        onPress={handleNextStep}
        isLoading={isLoading}
      />
    </View>
  );
}
