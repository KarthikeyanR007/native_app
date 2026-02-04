import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const SETTINGS = [
  { id: 1, label: 'Invite Friends' },
  { id: 2, label: 'Privacy' },
  { id: 3, label: 'Notifications' },
  { id: 4, label: 'Help & Support' },
];

export default function ProfileSettings() {
  return (
    <View>
      {SETTINGS.map(item => (
        <Pressable 
            key={item.id} 
              style={({ pressed }) => [
                    styles.container,
                    pressed && { opacity: 0.5 },
                ]}
            onPress={() => console.log('Pressed:', item.label)}
        >
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={styles.img}
          />
          <Text style={styles.settingtext}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  img: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  settingtext: {
    fontSize: 18,
    color: '#222',
  },
});
