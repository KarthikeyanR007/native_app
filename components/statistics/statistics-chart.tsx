import { View, Text, StyleSheet } from "react-native";

export default function StatisticsChart() {
  return (
    <View style={styles.container}>
      <View style={styles.curveOne} />
      <View style={styles.curveTwo} />
      <View style={styles.curveThree} />

      <View style={styles.markerLine} />
      <View style={styles.marker}>
        <Text style={styles.markerText}>$1,230</Text>
      </View>
      <View style={styles.dot} />

      <View style={styles.months}>
        <Text style={styles.monthText}>Mar</Text>
        <Text style={styles.monthText}>Apr</Text>
        <Text style={[styles.monthText, styles.monthActive]}>May</Text>
        <Text style={styles.monthText}>Jun</Text>
        <Text style={styles.monthText}>Jul</Text>
        <Text style={styles.monthText}>Aug</Text>
        <Text style={styles.monthText}>Sep</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6FAFA",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 12,
    height: 180,
    justifyContent: "flex-start",
  },
  curveOne: {
    position: "absolute",
    left: 10,
    top: 84,
    width: 120,
    height: 40,
    borderTopWidth: 2,
    borderTopColor: "#2C7D78",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  curveTwo: {
    position: "absolute",
    left: 110,
    top: 52,
    width: 140,
    height: 60,
    borderTopWidth: 2,
    borderTopColor: "#2C7D78",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  curveThree: {
    position: "absolute",
    left: 230,
    top: 84,
    width: 120,
    height: 40,
    borderTopWidth: 2,
    borderTopColor: "#2C7D78",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  markerLine: {
    position: "absolute",
    left: 92,
    top: 50,
    width: 1,
    height: 90,
    backgroundColor: "#D6E3E2",
  },
  marker: {
    position: "absolute",
    left: 58,
    top: 24,
    backgroundColor: "#EAF6F4",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  markerText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2C7D78",
  },
  dot: {
    position: "absolute",
    left: 87,
    top: 74,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#2C7D78",
    borderWidth: 2,
    borderColor: "#EAF6F4",
  },
  months: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  monthText: {
    fontSize: 11,
    color: "#98A4A6",
  },
  monthActive: {
    color: "#2C7D78",
    fontWeight: "700",
  },
});
