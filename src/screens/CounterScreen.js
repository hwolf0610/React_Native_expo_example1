import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button title="Increase" onPress={() => {
                setCounter(counter + 1);
                console.log(counter);
            }} />
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
                console.log(counter);

            }} />
            <Text>Current counter: {counter} </Text>
        </View>
    )

}
export default CounterScreen;
