import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BottomBar from "../components/BottomBar";
import Header from "../components/Header";
import Post from "../components/Post";
import VoiceQuestion from "../components/VoiceQuestion";
import Head from "../components/Head";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.droidSafe}>
      <View>
        {/* <Header /> */}
        <Head />
        <View style={styles.container}>
          <Post
            name="UX Design"
            handle="@uxdesign"
            question="Who gave you the single best advice in your career?"
            likes={900}
            time="5:00"
            listens="2.1k"
            answerer="Saul Sawaneh"
            job="Design at Y Combinator"
            category="Web Development"
            gender="male"
          />
          <Post
            name="Mark Noble"
            handle="@noble"
            question="How did you identify a great startup to join at an early stage?"
            likes={121}
            time="2:12"
            listens="1.21k"
            answerer="Omar Jeng"
            job="Engineer at Facebook"
            category="Startups"
            gender="female"
          />
          {/* <VoiceQuestion
            name="Mark Noble"
            handle="@noble"
            likes={121}
            time="2:12"
            listens="1.21k"
            answerer="Omar Jeng"
            job="Engineer at Facebook"
            category="Startups"
          /> */}
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
    paddingTop: Platform.OS === "android" ? 15 : 0,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
});
