import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from '../../components/header/Header';


const RegisterAccountCreated = ({ navigation }) => {
    return (
        <View style={styles.container}>


            <View style={{ flex: 0.1, marginTop: 43 }}>
                <Header title="Account Created"
                    image1={require("../../assets/images/arrow-left.png")}
                    image2={require("../../assets/images/bible.png")}
                />
            </View>

            <View style={styles.girlImage}>
                <Image 
                
                style={{width:250, height:250}}
                source={require("../../assets/images/logo/women.png")} />

                <View style={styles.row}>
                    <MaterialCommunityIcons name="check-decagram" size={30} color="#99B83C" />
                    <Text style={styles.formHead2}> Account Created Successfully</Text>
                </View>

                <Text style={styles.formbtn}
                    onPress={() => navigation.navigate('Login')}
                >
                    Let's Roll
                </Text>
            </View>
        </View>
    )
}

export default RegisterAccountCreated

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFECD0",
        borderRadius: 30,
    },
    girlImage: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        marginVertical: 10
    },
    formHead2: {
        fontSize: 20,
        color: '#372329',
        textAlign: 'center',
        // fontWeight: 'bold',
        // backgroundColor: 'white',
    },
    formbtn: {
        width: '80%',
        backgroundColor: '#FF3974',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
        marginVertical: 10,
    },
})