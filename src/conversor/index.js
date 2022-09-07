import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Conversor extends Component {
    
    constructor(pronps){
        super(pronps);
        this.state = {

        };
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>USD p/ BRL</Text>
                <TextInput
                    placeholder=""
                    style={styles.areaInput}
                    onChangeText={()=>{}}
                />

                <TouchableOpacity>
                    <Text>Converter</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
});

export default Conversor;