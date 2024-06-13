import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import AppButton from "@/components/AppButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 my-4">
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

          <AppButton
            title="Login"
            onPress={() => {
              setLoading(true);
              console.log(form);
              setTimeout(() => {
                setLoading(false);
              }, 2000);
            }}
            style={"mt-9"}
            loading={loading}
          />

          <View className="justify-center items-center flex-row gap-2 mt-3">
            <Text className="font-pregular text-gray-100">
              Don't have an account?
            </Text>
            <Link
              className="text-secondary-200 font-bold text-lg"
              href="/sign-up"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
