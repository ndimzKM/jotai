import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function Head() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name="form" size={25} color="#333" />
      </TouchableOpacity>
      <View style={styles.right}>
        <TouchableOpacity style={styles.btn}>
          <AntDesign name="search1" size={25} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <AntDesign name="bells" size={25} color="#333" style={styles.bell} />
          <Ionicons style={styles.dot} name="ellipse" size={10} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Profile")}
        >
          <AntDesign name="user" size={25} color="#333" />
        </TouchableOpacity>
      </View>
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
  right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bell: {
    position: "relative",
  },
  dot: {
    position: "absolute",
    top: 0,
    right: 0,
    color: "#fc2154",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 30,
  },
});
