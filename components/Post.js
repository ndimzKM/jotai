import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import profile from "../assets/generated_photos_5e6888fa6d3b380006f220e5.jpg";
import female_profile from "../assets/female.jpg";
const { width } = Dimensions.get("screen");
export default function Post({
  name,
  handle,
  question,
  likes,
  time,
  listens,
  answerer,
  job,
  category,
  gender,
}) {
  return (
    <View style={styles.post}>
      <View style={styles.avatar}>
        <Image
          source={gender == "male" ? profile : female_profile}
          style={styles.profile_pic}
        />
      </View>
      <View style={styles.side}>
        <View style={styles.top}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.handle}>{handle}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.question}>
            {question} <Text style={styles.category}>- {category}</Text>
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.play}>
              <Ionicons name="play-circle" size={35} color="#fc2154" />
            </TouchableOpacity>
            <View style={styles.profile}>
              <View style={styles.profile_avatar}>
                <Image
                  source={gender == "male" ? female_profile : profile}
                  style={styles.profile_pic}
                />
              </View>
              <View style={styles.profile_details}>
                <Text style={styles.name}>{answerer}</Text>
                <Text style={styles.title}>{job}</Text>
              </View>
            </View>
          </View>
          <View style={styles.actualActions}>
            <TouchableOpacity style={styles.action_icon}>
              <Ionicons name="heart" size={25} color="#C0C0C0" />
              <Text style={styles.action_value}>{likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action_icon}>
              <Ionicons name="stopwatch" size={25} color="#C0C0C0" />
              <Text style={styles.action_value}>{time}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action_icon}>
              <Ionicons name="headset" size={25} color="#C0C0C0" />
              <Text style={styles.action_value}>{listens}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action_icon}>
              <Ionicons name="share-social" size={25} color="#C0C0C0" />
              <Text style={styles.action_value}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  side: {
    width: width - 50,
  },
  top: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
  },

  handle: {
    paddingLeft: 5,
    color: "#C0C0C0",
  },
  name: {
    fontSize: 14,
    fontWeight: "500",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#dcdcdc",
  },
  profile_pic: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  details: {
    marginTop: 10,
    padding: 10,
    paddingTop: 0,
    marginRight: 40,
    // backgroundColor: "red",
  },
  category: {
    fontSize: 14,
    color: "#C0C0C0",
  },
  question: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 10,
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
