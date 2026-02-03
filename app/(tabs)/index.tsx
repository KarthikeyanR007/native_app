import {StyleSheet, Text, View, FlatList} from 'react-native';
import HomeProfile from '../../components/home/home-profile';
import HomeBalanceModel from '../../components/home/home-balance-model';


export default function HomeScreen() {

  const transactions = [
                          { id: 1, title: "Upwork", date: "Today", amount: "+$450.00" },
                          { id: 2, title: "Upwork", date: "Today", amount: "+$450.00" },
                          { id: 3, title: "Upwork", date: "Today", amount: "+$450.00" },
                          { id: 4, title: "Upwork", date: "Today", amount: "+$450.00" },
                        ];

  return (
   <View style={styles.container}>
    <View style={styles.headerWrapper}>
      <HomeProfile />
      <HomeBalanceModel />
    </View>
    <View style={styles.bodyWrapper}>
      <View style={styles.transHeader}>
        <Text >Transactions history</Text>
        <Text >See all</Text>
      </View>
      {/* Transaction list would go here */}
      <FlatList
        contentContainerStyle={{
          width: "100%",
          alignItems: "center",
        }}
        data={transactions}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.transListItem}>
            <View>
              <Text style={styles.ItemText}>{item.title}</Text>
              <Text>{item.date}</Text>
            </View>
            <Text>{item.amount}</Text>
          </View>
        )}
      />
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
    position: 'relative',
    width: '100%',
  },
  bodyWrapper: {
    flex: 1,
    paddingTop: 120,
  },
  transHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 16,
  },
  transListItem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 12,
  },
  ItemText:{
    fontWeight: 'bold',
    fontSize: 16,
  }
});