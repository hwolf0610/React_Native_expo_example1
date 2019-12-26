import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userid: '',
    }

  }
  componentDidMount = () => {

  }
  render() {
    const greeting = "Bye there!";
    const styles = StyleSheet.create({
      textStyle: {
        fontSize: 30
      }
    });
    console.log(this.props.navigation);
    return (
      <View>
        <Text style={styles.textStyle}>This is my first.</Text>
        <Button
          onPress={() => this.props.navigation.navigate('main')}
          title="Go to Components DEMO" />
        <Button
          onPress={() => this.props.navigation.navigate('Image')}
          title="Go to Image DEMO" />
        <Button
          onPress={() => this.props.navigation.navigate('Counter')}
          title="Go to Counter DEMO" />

        <Button
          onPress={() => this.props.navigation.navigate('Color')}
          title="Go to Color DEMO" />

<Button
          onPress={() => this.props.navigation.navigate('Box')}
          title="Go to Box DEMO" />
          
        <TouchableOpacity onPress={() => this.props.navigation.navigate('List')}>
          <Text style={styles.textStyle}>Go to List Demo</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default HomeScreen;
