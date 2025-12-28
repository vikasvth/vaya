import { View, Text, Pressable, StyleSheet, Image } from "react-native";

import { Icons } from "@/constants/icons";
import { fonts } from "@/constants/fonts";
import { router } from "expo-router";

export default function Header() {
  return (
    <View style={styles.Container}>
      <View style={styles.Wrapper}>
        <Pressable onPress={() => router.back()}>
          <View style={styles.BackButton}>
            <Icons.ChevronLeft />
          </View>
        </Pressable>
        <View style={styles.Info}>
          <View style={styles.ImageContainer}>
            <Image
              source={require("../assets/images/profile.jpg")}
              style={styles.Image}
            />
          </View>
          <View style={styles.TextContainer}>
            <Text style={styles.Name}>Sanjai Maharaj</Text>
            <Text style={styles.Role}>Vedic Astrologer</Text>
          </View>
        </View>
      </View>
      <Pressable>
        <Icons.Setting />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  Wrapper: {
    flexDirection: "row",
    columnGap: 14,
    alignItems: "center",
  },
  BackButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#E7E5E4",
  },
  Info: {
    flexDirection: "row",
    columnGap: 12,
    alignItems: "center",
  },
  ImageContainer: {
    height: 44,
    width: 44,
    borderRadius: 22,
    overflow: "hidden",
  },
  Image: {
    resizeMode: "cover",
    width: "100%",
    height: "130%",
  },
  TextContainer: { rowGap: 3 },
  Name: {
    fontFamily: fonts.Inter.SemiBold,
    fontSize: 16,
    color: "#292524",
  },
  Role: {
    fontFamily: fonts.Inter.Regular,
    fontSize: 12,
    color: "#78716C",
  },
});
