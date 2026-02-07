import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import StatisticsTop from "../../components/statistics/statistics-top";
import StatisticsTabs from "../../components/statistics/statistics-tabs";
import StatisticsFilter from "../../components/statistics/statistics-filter";
import StatisticsChart from "../../components/statistics/statistics-chart";
import StatisticsList from "../../components/statistics/statistics-list";

type TabKey = "Day" | "Week" | "Month" | "Year";

export default function StatisticScreen() {
  const [activeTab, setActiveTab] = useState<TabKey>("Day");

  return (
    <View style={styles.container}>
      <StatisticsTop />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <StatisticsTabs active={activeTab} onChange={setActiveTab} />
        <StatisticsFilter />
        <StatisticsChart />
        <StatisticsList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 18,
    paddingBottom: 28,
    gap: 18,
  },
});
