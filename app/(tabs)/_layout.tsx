import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { PenTool } from "@tamagui/lucide-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Tattoos",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "code-slash" : "code-slash-outline"} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Artists"
          options={{
            title: "Artists",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "code-slash" : "code-slash-outline"} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="conceptCreator"
          options={{
            title: "Concept Creator",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "code-slash" : "code-slash-outline"} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? "code-slash" : "code-slash-outline"} color={color} />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
