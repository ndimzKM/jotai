import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BottomBar from "../components/BottomBar";
import Header from "../components/Header";
import Post from "../components/Post";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.droidSafe}>
      <View>
        <Header />
        <View style={styles.container}>
          <Text>Recommended For You</Text>
          <Post />
        </View>
      </View>
      <BottomBar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
  },
  droidSafe: {
    flex: 1,
    paddingBottom: Platform.OS === "android" ? 25 : 0,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
});
