import React from "react";
import { H2, H3, Input, Label, Paragraph, ScrollView, YStack } from "tamagui";

export function Step3() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} mx={16} bg={"$white1"}>
      <H2 fontWeight={"bold"} ta={"left"} mt={16}>
        Enter Contact{"\n"}Information
      </H2>

      <Paragraph color={"$gray11"} mt={4} mb={16}>
        To schedule your session, we need to collect some essential information.
      </Paragraph>
      <YStack>
        <H3 fontWeight={"bold"} ta={"left"}>
          Personal Details
        </H3>
        <Paragraph color={"$gray11"} mb={8}>
          Your artist will use these details to address you properly.
        </Paragraph>

        {/* // This could be componetinzed to recude amount of lines, but because it's a prototype I'll keep it here. */}
        <YStack alignItems="flex-start" space="$2">
          <Input
            w={"100%"}
            placeholder={`Your first name`}
            h={80}
            borderRadius={0}
            bg={"$white1"}
            borderColor={"$gray7"}
            borderLeftColor={"$white1"}
            borderRightColor={"$white1"}
            fontSize={14}
          />
          <Label position="absolute" top={-2} left={16} fontSize={12} letterSpacing={1.6}>
            FIRST NAME
          </Label>
        </YStack>

        <YStack alignItems="flex-start" space="$2">
          <Input
            w={"100%"}
            placeholder={`Your last name`}
            h={80}
            borderRadius={0}
            bg={"$white1"}
            borderColor={"$gray7"}
            borderLeftColor={"$white1"}
            borderRightColor={"$white1"}
            fontSize={14}
          />
          <Label position="absolute" top={-2} left={16} fontSize={12} letterSpacing={1.6}>
            LAST NAME
          </Label>
        </YStack>

        <YStack alignItems="flex-start" space="$2">
          <Input
            w={"100%"}
            placeholder={`Your last name`}
            h={80}
            borderRadius={0}
            bg={"$white1"}
            borderColor={"$gray7"}
            borderLeftColor={"$white1"}
            borderRightColor={"$white1"}
            fontSize={14}
          />
          <Label position="absolute" top={-2} left={16} fontSize={12} letterSpacing={1.6}>
            PRONOUNS (OPTIONAL)
          </Label>
        </YStack>
      </YStack>

      <YStack mt={16}>
        <H3 fontWeight={"bold"} ta={"left"}>
          Phone Number
        </H3>
        <Paragraph color={"$gray11"} mb={8}>
          The artist may use this number to contact you for anything urgent regarding your
          appointment.
        </Paragraph>

        {/* // Didn't implement the select to gain some time. */}
        <YStack alignItems="flex-start" space="$2">
          <Input
            w={"100%"}
            placeholder={`Your country code`}
            h={80}
            borderRadius={0}
            bg={"$white1"}
            borderColor={"$gray7"}
            borderLeftColor={"$white1"}
            borderRightColor={"$white1"}
            fontSize={14}
          />
          <Label position="absolute" top={-2} left={16} fontSize={12} letterSpacing={1.6}>
            COUNTRY CODE
          </Label>
        </YStack>

        {/* // A input mask is necessary here as well */}
        <YStack alignItems="flex-start" space="$2">
          <Input
            w={"100%"}
            placeholder={`Your last name`}
            h={80}
            borderRadius={0}
            bg={"$white1"}
            borderColor={"$gray7"}
            borderLeftColor={"$white1"}
            borderRightColor={"$white1"}
            fontSize={14}
          />
          <Label position="absolute" top={-2} left={16} fontSize={12} letterSpacing={1.6}>
            PHONE NUMBER
          </Label>
        </YStack>

        <YStack alignItems="flex-start" space="$2">
          <Input
            w={"100%"}
            placeholder={`Your last name`}
            h={80}
            borderRadius={0}
            bg={"$white1"}
            borderColor={"$gray7"}
            borderLeftColor={"$white1"}
            borderRightColor={"$white1"}
            fontSize={14}
          />
          <Label position="absolute" top={-2} left={16} fontSize={12} letterSpacing={1.6}>
            PRONOUNS (OPTIONAL)
          </Label>
        </YStack>
      </YStack>

      <YStack mt={16} mb={32}>
        <H3 fontWeight={"bold"} ta={"left"}>
          Your Location
        </H3>
        <Paragraph color={"$gray11"} mb={8}>
          This helps your artist understand if you are traveling a long distance for your session.
        </Paragraph>

        <YStack alignItems="flex-start" space="$2">
          <Input
            w={"100%"}
            placeholder={`Your Country`}
            h={80}
            borderRadius={0}
            bg={"$white1"}
            borderColor={"$gray7"}
            borderLeftColor={"$white1"}
            borderRightColor={"$white1"}
            fontSize={14}
          />
          <Label position="absolute" top={-2} left={16} fontSize={12} letterSpacing={1.6}>
            COUNTRY
          </Label>
        </YStack>

        <YStack alignItems="flex-start" space="$2">
          <Input
            w={"100%"}
            placeholder={`Your State`}
            h={80}
            borderRadius={0}
            bg={"$white1"}
            borderColor={"$gray7"}
            borderLeftColor={"$white1"}
            borderRightColor={"$white1"}
            fontSize={14}
          />
          <Label position="absolute" top={-2} left={16} fontSize={12} letterSpacing={1.6}>
            STATE
          </Label>
        </YStack>

        <YStack alignItems="flex-start" space="$2">
          <Input
            w={"100%"}
            placeholder={`Your City`}
            h={80}
            borderRadius={0}
            bg={"$white1"}
            borderColor={"$gray7"}
            borderLeftColor={"$white1"}
            borderRightColor={"$white1"}
            fontSize={14}
          />
          <Label position="absolute" top={-2} left={16} fontSize={12} letterSpacing={1.6}>
            CITY
          </Label>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
