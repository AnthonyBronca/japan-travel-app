import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tweet from "./screens/Tweet";
import Home from "./screens/Home";



const RootNavigation: React.FC = (): JSX.Element => {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
                <Stack.Screen name='Home' component={Home} />
                {/* <Stack.Screen name='Tweet' component={Tweet} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
