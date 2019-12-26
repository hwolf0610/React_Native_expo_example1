import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';

class ImageScreen extends React.Component {
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
        <ImageDetail title="Forest" imagesource={require('../../assets/forest.jpg')} score={9}/>
        <ImageDetail title="Beach" imagesource={require('../../assets/beach.jpg')} score={7}/>
        <ImageDetail title="Mountain" imagesource={require('../../assets/mountain.jpg')} score={10}/>
       </View>
    )
  }
}
export default ImageScreen;
