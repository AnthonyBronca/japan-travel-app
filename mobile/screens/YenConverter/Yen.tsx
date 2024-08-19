import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Pressable } from 'react-native';

const Yen = () => {

    type TypeEl = "+" | "-" | "/" | "*" | "%" | "clear" | "." | "=" | "" | "negate";

    const [usd, setUsd] = useState("0");
    const [yen, setYen] = useState("0");
    const [current, setCurrent] = useState("0");
    const [storedVal, setStoredVal] = useState("0");
    const [mode, setMode] = useState<"yen" | "usd">("yen");
    const [currOperator, setCurrOperator] = useState<TypeEl>("");



    useEffect(() => {
        if(mode === "yen"){
            setUsd(String((parseInt(current) / 146.555).toFixed(2)));
        } else{
            setYen(String((parseInt(current) * 146.555).toFixed(2)));
        }
    }, [current, mode])

    const storeOperator = (operator: TypeEl): void => {
        let currNum = parseInt(current);
        setStoredVal(String(currNum));
        setCurrOperator(operator);
        setCurrent("0");
    };



    const changeMode = () => {
        if (mode === "usd") {
            setMode("yen");
        } else {
            setMode("usd");
        }
    }

    const handleOperator = (operator: TypeEl): void => {
        if (operator === "clear") {
            setCurrOperator("");
            setCurrent("0");
            setStoredVal("");
            setUsd("0");
            setYen("0");
            return;
        } else if (operator === "negate") {
            setCurrent((prev) => {
                if (prev[0] === "-") {
                    return prev.slice(1);
                } else {
                    return `-${prev}`;
                }
            });
            return;
        } else if (operator === "%") {
            setCurrent(String(Number(current) * .01));
            setStoredVal(current);
            setCurrOperator("");
        } else {
            storeOperator(operator);
            return;
        }

    }


    const calculate = () => {
        let currNum = parseInt(current);
        let currStore = parseInt(storedVal);
        if (currOperator === "+") {
            setCurrent(String(currNum + currStore));
            setStoredVal("0");
            setCurrOperator("");
            return
        } else if (currOperator === "-") {
            setCurrent(String(currStore - currNum));
            setStoredVal("0");
            setCurrOperator("");
        } else if (currOperator === "*") {
            setCurrent(String(currNum * currStore));
            setStoredVal("0");
            setCurrOperator("");
        } else if (currOperator === "/") {
            setCurrent(String(currStore / currNum));
            setStoredVal("0");
            setCurrOperator("");
        } else if (currOperator === "%") {
            setCurrent(String(currNum * .01));
            setStoredVal("0");
            setCurrOperator("");
        }
        // conversion();
    }

    const calculator = (el: number) => {
        setCurrent((prev) => {
            if (prev === "0") {
                return String(el);
            } else {
                return prev + el;
            }
        });
    }




return (
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>
            <View style={styles.calculationBody}>
                <Text style={styles.text}>Mode: {mode}</Text>
                <Text style={styles.text}>{mode === "yen" ? `$USD: ${usd}` : `¥YEN: ${yen}`}</Text>
                {/* <Text style={styles.text}>Yen: {`¥${yen}`}</Text> */}
                <Text style={styles.text}>{mode === "usd" ? "$USD: " : "¥YEN: "}{current}</Text>
            </View>
            <View style={styles.numberBody}>
                <Pressable onPress={() => handleOperator("clear")}>
                    <View style={styles.specialButton}>
                        <Text style={styles.specialText}>AC</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handleOperator("negate")}>
                    <View style={styles.specialButton}>
                        <Text style={styles.specialText}>+/-</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handleOperator("%")}>
                    <View style={styles.specialButton}>
                        <Text style={styles.specialText}>%</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handleOperator("/")}>
                    <View style={styles.operatorButton}>
                        <Text style={styles.text}>÷</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => calculator(7)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>7</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => calculator(8)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>8</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => calculator(9)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>9</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handleOperator("*")}>
                    <View style={styles.operatorButton}>
                        <Text style={styles.text}>x</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => calculator(4)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>4</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => calculator(5)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>5</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => calculator(6)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>6</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handleOperator("-")}>
                    <View style={styles.operatorButton}>
                        <Text style={styles.text}>-</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => calculator(1)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>1</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => calculator(2)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>2</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => calculator(3)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>3</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handleOperator("+")}>
                    <View style={styles.operatorButton}>
                        <Text style={styles.text}>+</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => calculator(0)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>0</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => handleOperator(".")}>
                    <View style={styles.button}>
                        <Text style={styles.text}>.</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => changeMode()}>
                    <View style={styles.button}>
                        <Text style={styles.text}>{mode === "yen" ? "$" : "¥"}</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => calculate()}>
                    <View style={styles.operatorButton}>
                        <Text style={styles.text}>=</Text>
                    </View>
                </Pressable>
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
        flex: 1,
    },
    calculationBody: {
        paddingHorizontal: 20,
        height: (Dimensions.get("window").height) / 3,
        width: "100%"
    },
    button: {
        backgroundColor: "rgb(45,45,45)",
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    specialButton: {
        backgroundColor: "rgb(175,175,175)",
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    specialText: {
        color: "black",
        fontSize: 35,
        fontWeight: 600,
    },
    operatorButton: {
        backgroundColor: "orange",
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    numberBody: {
        flexDirection: "row",
        gap: 15,
        flexWrap: "wrap",
        justifyContent: "center",
        paddingHorizontal: 15
    },
    text: {
        color: "rgb(255, 255, 255)",
        fontSize: 35,
        fontWeight: 500
    }
})

export default Yen;
