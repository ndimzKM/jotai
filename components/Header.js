import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text>AN</Text>
      </View>
      <Text style={styles.logo}>Jotai</Text>
      <Ionicons name="notifications" size={24} color="#000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 14,
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
    fontSize: 28,
  },
});
