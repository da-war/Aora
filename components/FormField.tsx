import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React from "react";

interface Props extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  style?: any;
}

const FormField: React.FC<Props> = ({
  placeholder = "placeholder",
  value,
  onChangeText,
  style,
  ...otherProps
}) => {
  return (
    <View className={`space-y-2 w-full mt-2 ${style}`}>
      <Text className="text-base text-gray-100 font-medium">{placeholder}</Text>

      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="w-full bg-black-100 p-5 rounded-xl text-gray-100 w-full"
        placeholderTextColor={"#fff"}
        {...otherProps}
      />
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});
