import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Ionicons name="person-circle" size={30} color="#cfcdca" />
      <View style={styles.logo_container}>
        <Ionicons
          style={styles.logo}
          name="logo-ionitron"
          size={40}
          color="#fc2154"
        />
      </View>
      <Ionicons name="notifications" size={30} color="#cfcdca" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 14,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#dcdcdc",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 50,
  },
});
