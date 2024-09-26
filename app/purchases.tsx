import React, { useEffect, useState } from "react";
import { Header } from "@/components";
import { PDPActionButton } from "@/components/compound/PDPActionButton";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "tamagui";

export default function PurchasesScreen() {
  const { checkoutId } = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  function handleStartCheckout() {
    setIsLoading(true);
    console.log("Starting checkout");
  }

  function handleOpenArtistInstragam() {
    console.log("Opening artist Instagram");
  }

  useEffect(() => {
    if (!checkoutId) {
      return;
    }
    // implement here the logic to fetch the checkout info from the server using the checkoutId
  }, [checkoutId]);

  return (
    <View flex={1} bg={"$white1"}>
      <Header goBack />
      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>

      <PDPActionButton title="SAVE" onPress={handleStartCheckout} isLoading={isLoading} />
    </View>
  );
}
