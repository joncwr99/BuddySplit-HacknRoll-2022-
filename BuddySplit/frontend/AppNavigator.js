import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";


import HomePage from "./screens/homePage";
import ViewHistory from "./screens/viewHistory";
import Settings from "./screens/settings";
import VersionInfo from "./screens/versionInfo";
import PayeeInfo from "./screens/payeeInfo";
import SplittingPage from "./screens/splittingPage";
import SplitApp from "./screens/splitPage";
import ItemSelection from "./screens/itemSelection";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Camera" component={HomePage} />
            <Stack.Screen name="ListItems" component={SplitApp} />
            <Stack.Screen name="PayeeInfo" component={PayeeInfo} />
            <Stack.Screen name="ItemSelection" component={ItemSelection} />
        </Stack.Navigator>
    )
}

export const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Scan Receipt" screenOptions={{ headerShown: true }}>
                <Drawer.Screen name="Scan Receipt" component={HomeNavigator} />
                <Drawer.Screen name="View History" component={ViewHistory} />
                <Drawer.Screen name="Settings" component={Settings} />
                <Drawer.Screen name="Version Info" component={VersionInfo} />
                <Drawer.Screen name="Item Info" component={ItemSelection} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}