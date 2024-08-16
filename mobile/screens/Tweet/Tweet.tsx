import React from 'react';
import { View, Text, SafeAreaView, Pressable, StyleSheet } from 'react-native';


interface IHomeProps {
    navigation: any;
}


const Tweet: React.FC<IHomeProps> = ({ navigation }) => {

    const handleNav = () => {
        console.log("hello")
        navigation.push('Tweet')
    }
    const handleGoBack = () => {
        console.log("hello")
        navigation.pop()
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <Text>Tweet</Text>
                <Pressable onPress={handleNav}>
                    <Text>Go to Tweet</Text>
                </Pressable>
                <Pressable onPress={handleGoBack}>
                    <Text>Go to back</Text>
                </Pressable>
                <View>
                    <Text>Hello</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    subContainer: {
        flexDirection: 'column',
    }
})

export default Tweet;
