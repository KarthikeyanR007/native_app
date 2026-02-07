import { View, Text, StyleSheet, Dimensions } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width } = Dimensions.get("window");

export default function WalletTop() {
  return (
    <View style={styles.container}>
      <View style={styles.circleOne} />
      <View style={styles.circleTwo} />
      <View style={styles.circleThree} />

      <View style={styles.row}>
        <AntDesign name="left" size={18} color="#fff" />
        <Text style={styles.title}>Connect Wallet</Text>
        <Ionicons name="notifications" size={22} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2C7D78",
    width: "100%",
    paddingTop: 60,
    paddingBottom: 40,
    borderBottomLeftRadius: width / 5,
    borderBottomRightRadius: width / 5,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  circleOne: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(255,255,255,0.06)",
    right: -40,
    top: -50,
  },
  circleTwo: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
    left: -30,
    top: 20,
  },
  circleThree: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "rgba(255,255,255,0.04)",
    right: 40,
    bottom: -60,
  },
});
