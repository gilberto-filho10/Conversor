import React, { Component } from "react";
import {  StyleSheet, View, Text} from 'react-native';

class App extends Component {
  render(){
    return(
      <View>
        <Text>
          <Conversor/>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
