import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type TabKey = "Day" | "Week" | "Month" | "Year";

type StatisticsTabsProps = {
  active: TabKey;
  onChange: (value: TabKey) => void;
};

const TABS: TabKey[] = ["Day", "Week", "Month", "Year"];

export default function StatisticsTabs({ active, onChange }: StatisticsTabsProps) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const isActive = tab === active;
        return (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, isActive && styles.tabActive]}
            onPress={() => onChange(tab)}
            activeOpacity={0.9}
          >
            <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "transparent",
  },
  tabActive: {
    backgroundColor: "#2C7D78",
  },
  tabText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#9AA6A9",
  },
  tabTextActive: {
    color: "#fff",
  },
});
