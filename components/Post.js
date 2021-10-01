import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Post() {
  return (
    <View style={styles.post}>
      <View style={styles.top}>
        <View style={styles.avatar}></View>
        <Text>UX Design</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.question}>
          Who gave you the single best advice in your career?
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.play}>
            <Ionicons name="play-circle" size={35} color="#fc2154" />
          </TouchableOpacity>
          <View style={styles.profile}>
            <View style={styles.profile_avatar}></View>
            <View style={styles.profile_details}>
              <Text style={styles.name}>Saul Sawaneh</Text>
              <Text style={styles.title}>Design at Y Combinator</Text>
            </View>
          </View>
        </View>
        <View style={styles.actualActions}>
          <TouchableOpacity style={styles.action_icon}>
            <Ionicons name="heart" size={25} color="#C0C0C0" />
            <Text style={styles.action_value}>900</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action_icon}>
            <Ionicons name="stopwatch" size={25} color="#C0C0C0" />
            <Text style={styles.action_value}>5:00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action_icon}>
            <Ionicons name="headset" size={25} color="#C0C0C0" />
            <Text style={styles.action_value}>2.1k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action_icon}>
            <Ionicons name="share-social" size={25} color="#C0C0C0" />
            <Text style={styles.action_value}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    marginTop: 10,
  },
  top: {
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    marginRight: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#dcdcdc",
  },
  details: {
    marginTop: 10,
    padding: 10,
    paddingTop: 0,
  },
  question: {
    fontSize: 25,
    lineHeight: 30,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  play: {
    marginRight: 5,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile_avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#dcdcdc",
    marginRight: 5,
  },
  actualActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  action_icon: {
    flexDirection: "row",
    alignItems: "center",
  },
  action_value: {
    paddingLeft: 5,
  },
});
