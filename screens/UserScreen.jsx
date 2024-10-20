import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function UserScreen() {
     return (
          <View style={styles.container}>
               <Text>User Screen</Text>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
     },
});