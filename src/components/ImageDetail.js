import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity,Image } from 'react-native';

class ImageDetail extends React.Component {
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
    console.log(this.props);
    return (
      <View>
          <Image source={this.props.imagesource} />
        <Text style={styles.textStyle}>{this.props.title}</Text>
    <Text>Image Score - {this.props.score}</Text>
       </View>
    )
  }
}
export default ImageDetail;
