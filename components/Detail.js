import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Detail({ text, icon }) {
  return (
    <View style={styles.detail}>
      <View style={{ width: "7%" }}>
        <AntDesign name={icon} size={25} color="#333" />
      </View>
      <View style={styles.detailTextContainer}>
        <Text style={styles.detailText}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detail: {
    flexDirection: "row",
    marginBottom: 15,
  },
  detailTextContainer: {
    paddingLeft: 20,
    width: "93%",
  },
  detailText: {
    fontSize: 18,
  },
});
