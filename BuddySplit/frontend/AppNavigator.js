import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomePage from "./screens/homePage";
import ViewHistory from "./screens/viewHistory";
import Settings from "./screens/settings";
import VersionInfo from "./screens/versionInfo";
import PayeeInfo from "./screens/payeeInfo";


const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Scan Receipt">
                <Drawer.Screen name="Scan Receipt" component={HomePage} />
                <Drawer.Screen name="View History" component={ViewHistory} />
                <Drawer.Screen name="Settings" component={Settings} />
                <Drawer.Screen name="Version Info" component={VersionInfo} />
                <Drawer.Screen name="Payee Info" component= {PayeeInfo} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}