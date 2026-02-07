import { View, Text, StyleSheet, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

type ItemKind = "coffee" | "person" | "youtube";

type SpendingItem = {
  id: string;
  name: string;
  date: string;
  amount: string;
  variant: "negative" | "positive";
  highlight?: boolean;
  icon: ItemKind;
};

const DATA: SpendingItem[] = [
  {
    id: "starbucks",
    name: "Starbucks",
    date: "Jan 12, 2022",
    amount: "- $150.00",
    variant: "negative",
    icon: "coffee",
  },
  {
    id: "transfer",
    name: "Transfer",
    date: "Yesterday",
    amount: "+ $85.00",
    variant: "positive",
    highlight: true,
    icon: "person",
  },
  {
    id: "youtube",
    name: "Youtube",
    date: "Jan 16, 2022",
    amount: "- $11.99",
    variant: "negative",
    icon: "youtube",
  },
];

export default function StatisticsList() {
  const renderIcon = (icon: ItemKind, isHighlight: boolean) => {
    if (icon === "coffee") {
      return <FontAwesome5 name="coffee" size={14} color="#2C7D78" />;
    }
    if (icon === "youtube") {
      return <Ionicons name="logo-youtube" size={14} color="#fff" />;
    }
    return (
      <Ionicons
        name="person"
        size={14}
        color={isHighlight ? "#fff" : "#2C7D78"}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Spending</Text>
        <Ionicons name="options-outline" size={18} color="#909B9D" />
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const isHighlight = Boolean(item.highlight);
          const cardStyle = [styles.card, isHighlight && styles.cardHighlight];
          const nameStyle = isHighlight ? styles.nameInverse : styles.name;
          const dateStyle = isHighlight ? styles.dateInverse : styles.date;
          const amountStyle =
            item.variant === "positive" ? styles.positive : styles.negative;

          return (
            <View style={cardStyle}>
              <View
                style={[
                  styles.iconWrap,
                  item.icon === "coffee" && styles.iconGreen,
                  item.icon === "youtube" && styles.iconRed,
                  item.icon === "person" && styles.iconPhoto,
                ]}
              >
                {renderIcon(item.icon, isHighlight)}
              </View>
              <View style={styles.textBlock}>
                <Text style={nameStyle}>{item.name}</Text>
                <Text style={dateStyle}>{item.date}</Text>
              </View>
              <Text style={amountStyle}>{item.amount}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  list: {
    gap: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1D2B2B",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F9F9",
    borderRadius: 14,
    padding: 12,
    gap: 12,
  },
  cardHighlight: {
    backgroundColor: "#2C7D78",
  },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconGreen: {
    backgroundColor: "#E6F4F2",
  },
  iconRed: {
    backgroundColor: "#F04D3A",
  },
  iconPhoto: {
    backgroundColor: "#1F6F6A",
  },
  textBlock: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1D2B2B",
  },
  date: {
    fontSize: 11,
    color: "#8C989A",
  },
  nameInverse: {
    fontSize: 13,
    fontWeight: "700",
    color: "#fff",
  },
  dateInverse: {
    fontSize: 11,
    color: "rgba(255,255,255,0.7)",
  },
  negative: {
    fontSize: 12,
    fontWeight: "700",
    color: "#E25B4D",
  },
  positive: {
    fontSize: 12,
    fontWeight: "700",
    color: "#C7F3EB",
  },
});
