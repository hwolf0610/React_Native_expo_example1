import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friend = [
        { name: 'Friend # 1' , key: '1'},
        { name: 'Friend # 2' , key: '2'},
        { name: 'Friend # 3' , key: '3'},
        { name: 'Friend # 4' , key: '4'},
        { name: 'Friend # 5' , key: '5'},
        { name: 'Friend # 6' , key: '6'},
        { name: 'Friend # 7' , key: '7'},
        { name: 'Friend # 8' , key: '8'},
        { name: 'Friend # 9' , key: '9' },
    ];

    return (
         <FlatList
            keyExtractor={friend => friend.name}
            data = {friend}
            renderItem = {({ item }) => {
            return <Text style={styles.textstyle}>{item.name}-key{item.key}</Text>;
            }}
            />   
    );
};
const styles = StyleSheet.create({
    textstyle:{
        marginVertical : 50
    }
});
export default ListScreen;