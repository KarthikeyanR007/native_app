import { View, Text, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function StatisticsFilter() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Expense</Text>
      <Feather name="chevron-down" size={14} color="#6F7B7D" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDE4E5",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 12,
    color: "#2E3B3B",
    fontWeight: "600",
  },
});
