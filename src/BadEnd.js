
import React from 'react';

import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, DevSettings, ScrollView, Button } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';







const BadEnd = (props) => {

    const retry = () => {
        props.navigation.navigate('Guess')
    }

    return (

        <View style={style.view}>
            <View style={style.imageView}>
                <Image
                    style={style.image}
                    source={require('../Images/BadEndKillua.jpg')}
                />
            </View>
            <View>
                <Text style={style.Text}>GAME OVER</Text>
                <Text style={style.Text}>NO REMAINING GUESS</Text>
            </View>

            <View >
                <TouchableOpacity
                    style={style.button}
                    onPress={retry}
                >
                    <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', fontWeight: '700' }}>Retry</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    view: { backgroundColor: 'grey', flex: 1, height: hp('100%'), width: wp('100%') },
    image: { height: hp('36%'), width: wp('60%'), borderRadius: 200 },
    imageView: { alignItems: 'center', marginTop: 30 },
    Text: { fontSize: hp('3%'), color: 'white', textAlign: 'center', marginTop: 30, fontWeight: '700' },
    textInput: { fontWeight: '700', fontSize: 20, backgroundColor: 'black', marginLeft: 50, marginRight: 50, marginTop: 30, color: 'white', borderWidth: 2, borderColor: 'white', borderRadius: 20, textAlign: 'center' },
    button: { borderRadius: 30, marginTop: 10, marginLeft: '35%', marginRight: '35%', backgroundColor: 'black', paddingVertical: 15, justifyContent: 'center', alignItems: 'center' }

})

export default BadEnd;

