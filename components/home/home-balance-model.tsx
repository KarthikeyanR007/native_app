import {View, Text, StyleSheet,useWindowDimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeBalanceModel() {
    const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width: width * 1.9 }]}>
        <View style={styles.box}>
          <View style={styles.balance}>
            <View style={styles.totalbalance}>
                <Text style={{ fontSize: 18, fontWeight: "bold",marginTop: 20 }}>Total Balance</Text>
                <Text style={{ fontSize: 22, fontWeight: "bold", margin: 4 }}>$12,345.67</Text>
            </View>
            <View style={{ marginTop: 22,marginRight: 20 }}>
                <Ionicons name="ellipsis-horizontal" size={24} color="#fff" />
            </View>
          </View>
          <View style={styles.incomeexpense}>
           <View style={styles.balance}>
            <View style={styles.totalbalance}>
                <Text style={{ fontSize: 14, fontWeight: "bold",marginTop: 20 }}>Income</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", margin: 4 }}>$12,345.67</Text>
            </View>
            <View style={styles.totalbalance}>
                <Text style={{ fontSize: 14, fontWeight: "bold",marginTop: 20 }}>Expenses</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold", margin: 4 }}>$12,345.67</Text>
            </View>
           </View>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: -90, // 👈 overlap amount
        alignSelf: "center",
        width: "100%",
        alignItems: "center",
        height: "60%",
    },
    box: {
        width: "48%",
        height: "100%",    
        backgroundColor: "#E0F2F1",
        borderRadius: 12,
        alignItems: "center",
        marginBottom: 16,
        elevation: 8,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
    totalbalance: {
        // width: "70%",
        // height: "40%",
        // backgroundColor: "#B2DFDB",
        // borderRadius: 8,
    },
    balance: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        width: "90%", 
        // marginTop: 20, 
        // marginBottom: 20
    },
    incomeexpense: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
    },
    incexptext: {
        fontSize: 14, 
        fontWeight: "bold", 
        marginTop: 20
    },
    incexpamount: {
        fontSize: 16, 
        fontWeight: "bold", 
        margin: 4
    }
});