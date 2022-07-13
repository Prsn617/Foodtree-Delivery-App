import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

export default function App() {
  const [navRight, setNavRight] = useState(-200);
  const myData = [
    {
      store: "Sneha Dokan",
      amt: 200,
      customer: "Prsn",
      ctc: 981315321,
      prds: 3,
      os: "pending",
      ps: "pending",
    },
    {
      store: "Nischal Bhatti",
      amt: 900,
      customer: "Sir",
      ctc: 983721821,
      prds: 9,
      os: "pending",
      ps: "pending",
    },
    {
      store: "Prsn Bar",
      amt: 1200,
      customer: "Nischal",
      ctc: 981315321,
      prds: 2,
      os: "completed",
      ps: "completed",
    },
    {
      store: "DeftTree",
      amt: 835,
      customer: "Sneha",
      ctc: 983280923,
      prds: 11,
      os: "pending",
      ps: "pending",
    },
    {
      store: "Foodtree",
      amt: 2200,
      customer: "Prsn",
      ctc: 938239032,
      prds: 8,
      os: "pending",
      ps: "pending",
    },
  ];

  const slideNav = () => {
    if (navRight === 0) {
      setNavRight(-200);
    } else {
      setNavRight(0);
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { right: navRight }]}>
        <Text>All Orders</Text>
        <Text>Assigned Orders</Text>
        <Text>Pending Orders</Text>
        <Text>Cancelled Orders</Text>
        <Text>Completed Orders</Text>
        <TouchableOpacity
          style={{ position: "absolute", top: 20, right: 20 }}
          onPress={slideNav}
        >
          <Text style={{ color: "red", fontSize: 28 }}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ position: "absolute", right: 20, top: 20 }}
          onPress={slideNav}
        >
          <FontAwesomeIcon icon={faBars} size={28} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.section}>
          {myData.map((data, index) => {
            return (
              <View key={index} style={styles.orders}>
                <Text>{data.store}</Text>
                <Text>Total Amount: {data.amt}</Text>
                <Text>Customer Name: {data.customer}</Text>
                <Text>Primary Contact: {data.ctc}</Text>
                <Text>Total Products{data.prds}</Text>
                <Text>Order Status: {data.os}</Text>
                <Text>Payment Status: {data.ps}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : b ? b : a,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    position: "relative",
  },
  header: {
    width: "100%",
    height: 75,
    backgroundColor: "blue",
    marginTop: 30,
    position: "relative",
  },
  btn: {
    borderWidth: 2,
    borderColor: "white",
    ...padding(10, 20, 10, 20),
    fontSize: 18,
    margin: 10,
    color: "white",
  },
  bar: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 200,
    height: "100%",
    position: "absolute",
    backgroundColor: "gray",
    color: "white",
    zIndex: 2,
  },
  section: {
    flex: 1,
    marginTop: 20,
  },
  orders: {
    flex: 1,
    width: 240,
    padding: 10,
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 10,
  },
});
