import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {}

const AppStatusBar: React.FC<Props> = () => {
  return (
    <StatusBar
      backgroundColor={"#161622"}
      showHideTransition={"fade"}
      barStyle="light-content"
    />
  );
};

export default AppStatusBar;

const styles = StyleSheet.create({});
