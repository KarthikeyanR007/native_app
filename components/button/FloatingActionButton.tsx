import {Pressable,View,StyleSheet } from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons';

export default function FloatingActionButton({onPress}: {onPress: () => void}) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={styles.fab}
        onPress={() => console.log('FAB Pressed')}
      >
        <MaterialIcons name="add" size={32} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#498F8A", // match your theme
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  wrapper: {
    position: "absolute",
    bottom: 70, // 👈 overlaps tab bar
    alignSelf: "center",
    zIndex: 100,
  },
});