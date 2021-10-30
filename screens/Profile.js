import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Detail from "../components/Detail";
import Post from "../components/Post";

export default function Profile() {
  const [show, setShow] = useState("answers");
  return (
    <SafeAreaView style={styles.droidSafe}>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="arrowleft" size={28} color="#333" />
          <Text style={{ paddingLeft: 15, fontSize: 20 }}>
            Alieu Ndimbalane
          </Text>
        </View>
        <ScrollView>
          <View style={styles.background}>
            <View
              style={{
                height: 150,
                backgroundColor: "red",
                position: "absolute",
                width: "100%",
              }}
            ></View>
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: "green",
                position: "absolute",
                top: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="camerao" size={30} color="#eee" />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                paddingVertical: 20,
                backgroundColor: "blue",
                width: "48%",
                borderRadius: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="pluscircle" size={20} color="#fff" />
              <Text style={{ color: "#fff", paddingLeft: 10, fontSize: 18 }}>
                Add to Story
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                paddingVertical: 20,
                backgroundColor: "#333",
                width: "48%",
                borderRadius: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="edit" size={20} color="#fff" />
              <Text style={{ color: "#fff", paddingLeft: 10, fontSize: 18 }}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.details}>
            <Detail
              text="Validate email addresses, phone numbers, VAT numbers and domain names."
              icon="bulb1"
            />
            <Detail text="Brikama Town" icon="enviromento" />
            <Detail text="Born 4 December 2001" icon="gift" />
            <Detail text="Joined January 2017" icon="calendar" />
          </View>
          <View style={styles.main}>
            <View style={styles.top}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setShow("answers")}
              >
                <Text style={styles.btnText}>Answers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  (styles.btn,
                  {
                    borderBottomColor: show == "questions" ? "#fc2154" : "#fff",
                  })
                }
                onPress={() => setShow("questions")}
              >
                <Text style={styles.btnText}>Questions</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 10,
                display: show == "answers" ? "flex" : "none",
              }}
            >
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
              <Post
                name="Mark Noble"
                handle="@noble"
                question="How did you identify a great startup to join at an early stage?How did you identify a great startup to join at an early stage?"
                likes={121}
                time="2:12"
                listens="1.21k"
                answerer="Omar Jeng"
                job="Engineer at Facebook"
                category="Startups"
                gender="female"
              />
            </View>
            <View
              style={{
                marginTop: 10,
                display: show == "questions" ? "flex" : "none",
              }}
            >
              <Text>Questions</Text>
            </View>
          </View>
        </ScrollView>
      </View>
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
    position: "relative",
  },
  background: {
    position: "relative",
    alignItems: "center",
    height: 200,
  },
  details: {
    marginTop: 30,
  },
  main: {
    marginTop: 10,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#fc2154",
    borderBottomWidth: 3,
    marginRight: 25,
  },
  btnText: {
    fontSize: 18,
    paddingBottom: 5,
  },
});
