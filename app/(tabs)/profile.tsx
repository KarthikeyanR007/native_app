import {StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
   <View style={styles.container}>
      <Text >Welcome to the Homess Screen</Text>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});