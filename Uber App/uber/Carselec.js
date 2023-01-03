import { View, Text, Image, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const Carselec = () => {
  let [pickupCar, setPickupCar] = useState("dsad");
  let [selectBtn,setSelectBtn] = useState(false)

  // const selectCar = () => {
  //   alert(pickupCar)
  // };

  // if (pickupCar.length > 0) {
  //   setSelectBtn(false)
  // }

  return (
    <View>
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        Select Your Car{" "}
      </Text>
      <View style={styles.car1}>
        <Image
          source={require("./assets/car1.jpg")}
          style={styles.car}
          onPress={() => {
            setPickupCar("Without AC");
          }}
        />
        <Button
          title="Uber X"
          color="#841584"
          
          disabled={selectBtn}
          style={{ marginTop: "4%" }}
          // onPress={selectCar}
        />
        <Image
          source={require("./assets/car1.jpg")}
          style={styles.car}
          onPress={() => {
            setPickupCar("With AC");
          }}
        />
        <Button
          title="With AC"
          color="#841584"
          
          disabled={selectBtn}
          style={{ marginTop: "4%" }}
          // onPress={selectCar}
        />
        <Image
          source={require("./assets/car1.jpg")}
          style={styles.car}
          onPress={() => {
            setPickupCar("Uber-X");
          }}
        />

        <Button
          title="Without AC"
          color="#841584"
          
          disabled={selectBtn}
          style={{ marginTop: "4%" }}
          // onPress={selectCar}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  car1: {
    height: "30%",
    width: "70%",
    marginTop: "5%",
    marginLeft: "15%",
  },
  car: {
    width: "100%",
    marginTop: "2%",
  },
});

export default Carselec;
