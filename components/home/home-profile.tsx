import { View, Text, StyleSheet, Dimensions } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeProfile() {
  const { height } = Dimensions.get("window");
  const boxHeight = height * 0.4;

  return (
    <View style={[styles.container, { height: boxHeight }]}>
      <View style={styles.box}>
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>Hello, User!</Text>
        <Text style={{ color: "#fff", fontSize: 16, marginTop: 8 }}>Welcome back to your app.</Text>
      </View>
      <View>
        <Ionicons name="notifications" size={40} color="#fff" style={{ marginTop: 0 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#39847F",
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
    
  },
  box: {
    alignItems: "flex-start",
    width: "80%",
  }

});
