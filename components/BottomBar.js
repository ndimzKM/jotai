import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

function BottomBar() {
  const route = useRoute();
  // console.log(route.name);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.droidSafe}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <AntDesign name="find" size={32} color="#C0C0C0" />
          {/* <Text style={styles.iconTitle}>Dashboard</Text> */}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconMain}
          onPress={() => navigation.navigate("TransXact")}
        >
          <Ionicons
            name="mic"
            size={35}
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              paddingLeft: 2.3,
            }}
            color="#fff"
          />
          {/* <Text style={styles.iconTitle}>ask</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.navigate("Cards")}
        >
          <AntDesign
            name="hearto"
            size={28}
            color={route.name == "Cards" ? "#fc2154" : "#C0C0C0"}
          />
          {/* <Text style={styles.iconTitle}>Cards</Text> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  iconTitle: {
    paddingTop: 5,
  },
  droidSafe: {
    // position: "absolute",
    // bottom: 0,
    width: Dimensions.get("window").width,
    // paddingBottom: Platform.OS === "android" ? 0 : 10,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    zIndex: 12,
    backgroundColor: "#fff",

    // shadowColor: "#fc2154",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    // elevation: 4,
  },
  container: {
    width: "100%",
    paddingHorizontal: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 14,
    borderTopColor: "#eee",
    borderTopWidth: 1,
    paddingBottom: 15,
  },

  icon: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  iconMain: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fc2154",
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  iconTitle: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default BottomBar;
