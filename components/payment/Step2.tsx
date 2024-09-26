import { screen } from "@/constants/screen";
import { useCart } from "@/hooks/cart";
import { addDays, format } from "date-fns";
import React, { useState } from "react";
import { Calendar, DateData } from "react-native-calendars";
import { H2, Input, Label, Paragraph, ScrollView, Text, TextArea, YStack } from "tamagui";

export function Step2() {
  const { currentProduct } = useCart();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const markedDates = selectedDate
    ? {
        [selectedDate]: {
          selected: true,
          selectedColor: "black",
          selectedTextColor: "white",
        },
      }
    : {};

  return (
    <ScrollView showsVerticalScrollIndicator={false} mx={16}>
      <H2 fontWeight={"bold"} ta={"left"} mt={16}>
        Request Appointment Date
      </H2>

      <Paragraph color={"$gray11"} mt={4} mb={16}>
        Please suggest a preferred date for your appointment with {currentProduct?.artist.name} (
        {currentProduct?.artist.location}). They will contact you to confirm your requested date or
        suggest alternative dates.
      </Paragraph>

      <YStack mb={16}>
        <Input
          w={"100%"}
          placeholder={selectedDate ? selectedDate : "Select a date"}
          h={80}
          borderRadius={0}
          // There is 4 years that I use this library, and for some reason this issue never got fixed. Maybe it's a specific Brazil bug? Have to add 1 to show the correct date.
          value={selectedDate ? format(addDays(selectedDate, 1), "LLLL dd, yyyy") : ""}
          bg={"$white1"}
          borderColor={"$gray7"}
          borderLeftColor={"$white1"}
          borderRightColor={"$white1"}
          fontSize={14}
          editable={false}
        />
        <Label position="absolute" top={-2} left={16} fontSize={12} letterSpacing={1.6}>
          REQUEST DATE
        </Label>
      </YStack>

      <Calendar
        current={new Date().toISOString().split("T")[0]}
        minDate={new Date().toISOString().split("T")[0]}
        onDayPress={(day: DateData) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={markedDates}
        renderHeader={(date: Date) => {
          const header = new Date(date).toLocaleString("default", {
            month: "long",
            year: "numeric",
          });
          return (
            <Text fontSize={16} fontWeight={"bold"} ta={"center"}>
              {header}
            </Text>
          );
        }}
        theme={{
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "black",
          selectedDayTextColor: "white",
          todayTextColor: "#2d4150",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          arrowColor: "black",
          monthTextColor: "black",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
          textDayFontWeight: "bold",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "bold",
        }}
        hideExtraDays={true}
        disableMonthChange={true}
        enableSwipeMonths={true}
      />

      <YStack mt={16}>
        <TextArea
          w={"100%"}
          placeholder={
            "Any additional details you'd like the artist to consider, such as travel plans or preferred days of the week."
          }
          borderRadius={0}
          bg={"$white1"}
          borderColor={"$gray7"}
          borderLeftColor={"$white1"}
          borderRightColor={"$white1"}
          multiline={true}
          h={screen.height * 0.15}
          mb={32}
          pt={32}
        />
        <Label position="absolute" top={-2} left={16} fontSize={12} letterSpacing={1.6}>
          NOTES
        </Label>
      </YStack>
    </ScrollView>
  );
}
