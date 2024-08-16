import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
import Yen from "./screens/YenConverter";



const RootNavigation: React.FC = (): JSX.Element => {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Yen/USD' component={Yen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
