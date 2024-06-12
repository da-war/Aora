import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { isLoading } from "expo-font";

interface AppButtonProps {
  //all possible properties
  onPress: () => void;
  title: string;
  color?: string;
  style?: any;
  loading?: boolean;
  textStyle?: object;
}

const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  style,
  color,
  title,
  loading,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary w-full min-h-[50px] justify-center items-center py-3 rounded-xl mt-5 ${style} ${color} ${
        loading ? "opacity-50" : ""
      }`}
      onPress={onPress}
      disabled={loading}
    >
      <Text className={`font-pbold text-primary text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
