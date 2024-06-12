import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import AppButton from "@/components/AppButton";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center h-full px-4 my-4 h-full">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[36px]"
          />
          <Text className="text-2xl text-white font-semibold mt-4">
            Login to Aora
          </Text>

          <FormField
            placeholder="Email"
            value={form.email}
            onChangeText={(e) => {
              setForm({ ...form, email: e });
            }}
            style={"mt-7"}
          />
          <FormField
            placeholder="Password"
            value={form.password}
            onChangeText={(e) => {
              setForm({ ...form, password: e });
            }}
            style={"mt-7"}
          />

          <AppButton title="Login" onPress={() => {}} style={"mt-9"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
