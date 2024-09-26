import { Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";

import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { PenTool, Signature, User, VenetianMask } from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#000",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Tattoos",
            tabBarIcon: ({ color }) => <PenTool color={color} />,
          }}
        />
        <Tabs.Screen
          name="Artists"
          options={{
            title: "Artists",
            tabBarIcon: ({ color }) => <VenetianMask color={color} />,
          }}
        />
        <Tabs.Screen
          name="conceptCreator"
          options={{
            title: "Concept Creator",
            tabBarIcon: ({ color }) => <Signature color={color} />,
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <User color={color} />,
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
