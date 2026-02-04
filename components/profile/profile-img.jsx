import {View,StyleSheet,Image} from 'react-native';

export default function ProfileImg() {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image source={require('../../assets/images/react-logo.png')} style={styles.img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
 },
   imgWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#39847F',
  },
   img: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
});