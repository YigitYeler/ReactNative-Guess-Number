import React, { useState, useEffect, forceUpdate } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var randomNumber = Math.floor(Math.random() * 50) + 1;





const Guess = (props) => {

    const [remGuess, setRemGuess] = useState(5);
    const [number, guessNumber] = useState('');
    const [status, setStatus] = useState('');

    const up = () => {
        setStatus('UP')
    }
    const down = () => {
        setStatus('DOWN')
    }

    if (remGuess == 0) {

        setRemGuess(5);
        randomNumber = Math.floor(Math.random() * 50) + 1;
        props.navigation.navigate('BadEnd');
        setStatus('');

    }

    const isTrue = () => {



        if (number > randomNumber) {
            down();
            setRemGuess(remGuess - 1);
        }
        else if (number < randomNumber) {
            up();
            setRemGuess(remGuess - 1);
        }
        else if (number == randomNumber) {
            props.navigation.navigate('End');
            randomNumber = Math.floor(Math.random() * 50) + 1;
            setRemGuess(5);
            setStatus('');
        }





    }

    return (

        <View style={style.view}>
            <View style={style.imageView}>
                <Image
                    style={style.image}
                    source={require('../Images/killua.jpg')}
                />
            </View>
            <View >
                <Text style={style.Text}>PREDICT A NUMBER BETWEEN 0 AND 50</Text>
            </View>
            <View>
                <TextInput onChangeText={(text) => guessNumber(text)} keyboardType='numeric' maxLength={2} style={style.textInput} />
            </View>
            <View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: hp('3%'), color: 'white', textAlign: 'center', fontWeight: '700' }}>{status}</Text>
                </View>
                <View >
                    <TouchableOpacity
                        style={style.button}
                        onPress={isTrue}
                    >
                        <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', fontWeight: '700' }}>Guess</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', fontWeight: '700' }}>REMAINING GUESS : {remGuess}</Text>
                </View>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    view: { backgroundColor: 'grey', flex: 1, height: hp('100%'), width: wp('100%') },
    image: { height: hp('36%'), width: wp('60%'), borderRadius: 200 },
    imageView: { alignItems: 'center', marginTop: 30 },
    Text: { fontSize: hp('3%'), color: 'white', textAlign: 'center', marginTop: 30, fontWeight: '700' },
    textInput: { fontWeight: '700', fontSize: hp('2%'), backgroundColor: 'black', marginLeft: 50, marginRight: 50, marginTop: 50, color: 'white', borderWidth: 2, borderColor: 'white', borderRadius: 20, textAlign: 'center' },
    button: { borderRadius: 30, marginTop: 10, marginLeft: 100, marginRight: 100, backgroundColor: 'black', paddingVertical: 15, justifyContent: 'center', alignItems: 'center' }
})

export default Guess;

