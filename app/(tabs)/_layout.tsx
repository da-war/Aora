import { Image, Text, View } from "react-native";
import React from "react";

import { Tabs } from "expo-router";

import { icons } from "@/constants/icons";

interface TabBarIconProps {
  focused: Boolean;
  name: String;
  color: String;
  size: Number;
  icon: String;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({
  focused,
  name,
  color,
  size,
  icon,
}) => {
  return (
    <View className="justify-center items-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveBackgroundColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 83,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,

            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                name="Home"
                color={color}
                size={size}
                icon={icons.home}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            headerShown: false,

            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                name="bookmark"
                color={color}
                size={size}
                icon={icons.bookmark}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            headerShown: false,

            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                name="Create"
                color={color}
                size={size}
                icon={icons.plus}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,

            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon
                focused={focused}
                name="Profile"
                color={color}
                size={size}
                icon={icons.profile}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
