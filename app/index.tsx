import "react-native-url-polyfill/auto";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import AppButton from "@/components/AppButton";

const index = () => {
  return (
    <>
      <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full  items-center min-h-[85vh] px-4">
            <Image
              resizeMode="contain"
              source={images.logo}
              className="h-[130px] w-[84px]"
            />
            <Image
              className="max-w--[380px] w-full h-[300px]"
              source={images.cards}
              resizeMode="contain"
            />

            <View className="relative mt-5">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities With
                <Text className="text-secondary-200"> Aora</Text>
              </Text>
              <Image
                source={images.path}
                className="absolute -bottom-7 -right-8 w-[130px] h-[50px]"
                resizeMode="contain"
              />
            </View>

            <Text className="text-sm font-pregular text-gray-100 text-center mt-7">
              Where creativity meets innovation: embark on a journey of
              limitless exploration with Aora
            </Text>

            <AppButton
              onPress={() => router.push("/sign-in")}
              title="Continue With Email"
            />
            <StatusBar
              backgroundColor={"#161622"}
              showHideTransition={"fade"}
              barStyle="light-content"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default index;
