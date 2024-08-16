import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Pressable} from 'react-native';

const Yen = () => {

    const [usd, setUsd] = useState(0);
    const [yen, setYen] = useState(0);
    const [mode, setMode] = useState<"yen"|"usd">("yen");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={styles.calculationBody}>
                    <Text style={styles.text}>Mode: {mode}</Text>
                    <Text style={styles.text}>USD: {usd}</Text>
                    <Text style={styles.text}>Yen: {yen}</Text>
                </View>
                <View style={styles.numberBody}>
                    <View style={styles.button}>
                        <Text style={styles.text}>AC</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>+/-</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>%</Text>
                    </View>
                    <View style={styles.operatorButton}>
                        <Text style={styles.text}>÷</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>7</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>8</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>9</Text>
                    </View>
                    <View style={styles.operatorButton}>
                        <Text style={styles.text}>x</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>4</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>5</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>6</Text>
                    </View>
                    <View style={styles.operatorButton}>
                        <Text style={styles.text}>-</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>1</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>2</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>3</Text>
                    </View>
                    <View style={styles.operatorButton}>
                        <Text style={styles.text}>+</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>0</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>.</Text>
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.text}>$</Text>
                    </View>
                    <View style={styles.operatorButton}>
                        <Text style={styles.text}>=</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    body: {
        alignItems: 'center',
    },
    calculationBody: {

    },
    button: {
        backgroundColor: "rgb(45,45,45)",
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    operatorButton: {
        backgroundColor: "orange",
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    numberBody: {
        flexDirection:"row",
        gap: 35,
        flexWrap: "wrap",
        top: (Dimensions.get("window").height / 5),
        paddingHorizontal: 15
    },
    text: {
        color: "rgb(255, 255, 255)",
        fontSize: 30
    }
})

export default Yen;
