import React from 'react';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import { Text, StyleSheet, View } from 'react-native';



class ComponentScreen extends React.Component {

    render() {
        const greeting = "Bye there!";
        const styles = StyleSheet.create({
            textStyle: {
                fontSize: 30
            }
        });
        return (
            <View>
                <Text style={styles.textStyle}>This is my first.</Text>
                <Text>{greeting}</Text>
            </View>
        )
    }
}


// const ComponentScreen=()=>{
//     const greeting="Bye there!";
//     return(
//     <View>
//         <Text style={styles.textStyle}>This is my first.</Text>
//         <Text>{greeting}</Text>
//     </View>
//     );
// };

// const styles = StyleSheet.create({
//     textStyle:{
//         fontSize:30
//     }
// });

export default ComponentScreen;
