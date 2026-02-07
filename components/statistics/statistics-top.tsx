import { View, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export default function StatisticsTop() {
  return (
    <View style={styles.container}>
      <AntDesign name="left" size={18} color="#1D2B2B" />
      <Text style={styles.title}>Statistics</Text>
      <Feather name="upload" size={18} color="#1D2B2B" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1D2B2B",
    letterSpacing: 0.2,
  },
});
