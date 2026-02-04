import {View,Text,StyleSheet} from 'react-native';

export default function ProfileNameEmail() {
  return (
    <View style={styles.container}>
        <Text>Enjelin Morgeana</Text>
        <Text>@enjelin_morgeana</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
});