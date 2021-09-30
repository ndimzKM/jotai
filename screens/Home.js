import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import BottomBar from "../components/BottomBar";
import Header from "../components/Header";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.droidSafe}>
      <View>
        <Header />
      </View>
      <BottomBar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafe: {
    flex: 1,
    paddingBottom: Platform.OS === "android" ? 25 : 0,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
});
