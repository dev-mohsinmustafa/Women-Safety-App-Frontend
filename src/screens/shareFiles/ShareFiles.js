import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'

import Share from 'react-native-share';
import files from "../../assets/filesBase64";
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';


const ShareFiles = () => {






    const myCustomerShare = async () => {
        const shareOptions = {
            // message: "This is a text message",
            // For Our own message
            message: "Emergency Alert: 🚨 Your safety is at risk. Take action now! This is to inform you that a distress signal has been activated and sent to your designated emergency contact number.Your immediate attention and assistance may be required.Please take appropriate action and contact the person who triggered this alert.Thank you for your prompt response.",

            // Share Single File
            // url : files.image3,
            // url : files.applogo,
            // 
            // Share Multiple Files
            urls: [files.image1, files.image2,],

            // For pdf
            // url : files.samplepdf2,

        }

        // now share this message we use try catch

        try {
            const ShareResponse = await Share.open(shareOptions);
            console.log(JSON.stringify(ShareResponse));
        } catch (error) {
            console.log("Error => ", error);
        }


    };




    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 0.2 }}>
                <Header title="Share Files" image1={require("../../assets/images/arrow-left.png")}
                    image2={require("../../assets/images/bible.png")}
                />
            </View>
            <View style={{ flex: 0.1 }}>
                <Image
                resizeMode='contain'
                    style={{ alignSelf: 'center', width: "80%", }}
                    source={require("../../assets/images/share.png")} />
            </View>

            <View style={styles.container}>
                <Text style={styles.header}>Share Files Screen</Text>
                {/* <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Share Files</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={myCustomerShare}>
                        <Button title="Share Files" />
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default ShareFiles;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, backgroundColor: "#FFECD0",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        color: "#FF3974",
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    
});