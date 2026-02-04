import {StyleSheet, Text, View } from 'react-native';
import ProfileTop from '../../components/profile/profile-top';
import ProfileImg from '../../components/profile/profile-img';
import ProfileNameEmail from '../../components/profile/profile-nameemail';
import ProfileSettings from '../../components/profile/profile-settings';

export default function Profile() {
  return (
   <View style={styles.container}>
    <View style={styles.headerWrapper}>
      <ProfileTop />
      <ProfileImg />
      <ProfileNameEmail />
      <ProfileSettings />
    </View>
    <View style={styles.bodyWrapper}>
      {/* Profile body content would go here */}
    </View>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerWrapper: {
    width: '100%',
  },
  bodyWrapper: {
    flex: 1,
    width: '100%',
  },
});