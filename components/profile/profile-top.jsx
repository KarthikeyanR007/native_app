import { View, Text, StyleSheet, Dimensions } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');

export default function ProfileTop() {
  const boxHeight = height * 0.3;

  return (
    <View style={[styles.container, { height: boxHeight }]}>
      <View>
        <AntDesign name="left" size={17} color="#fff" />
      </View>

      <View style={styles.box}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          Profile
        </Text>
      </View>

      <View>
        <Ionicons name="notifications" size={25} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#39847F',
    width: '100%',
    borderBottomLeftRadius: width/6,
    borderBottomRightRadius: width/6,
    overflow: 'hidden',
    paddingTop: 60,
  },
  box: {
    alignItems: "center",
    width: "80%",
  },
});
