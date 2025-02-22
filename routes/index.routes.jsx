import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppRoutes() {

     const Tab = createBottomTabNavigator();

     return (
          <Tab.Navigator>
               <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                         <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
               }} />
               <Tab.Screen name="User" component={UserScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                         <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
               }} />
          </Tab.Navigator>
     );

}