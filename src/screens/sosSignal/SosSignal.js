import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import axios from 'axios';
import Header from '../../components/header/Header';

const SosSignal = () => {
    const [emergencyContacts, setEmergencyContacts] = useState([
        { name: 'Emergency Contact 1', phoneNumber: '111-111-1111' },
        { name: 'Emergency Contact 2', phoneNumber: '222-222-2222' },
        // Add more emergency contacts as needed
    ]);

    const handlePanicButtonPress = async () => {
        const messageData = {
            to: '+923007261440',
            // from: '+17692103456',
            from: '+12512972937',
            // body: "🚨 EMERGENCY ALERT: Your safety is at risk. Take action now!",
            body: "Emergency Alert: 🚨 Your safety is at risk. Take action now! This is to inform you that a distress signal has been activated and sent to your designated emergency contact number.Your immediate attention and assistance may be required.Please take appropriate action and contact the person who triggered this alert.Thank you for your prompt response.",


        };


        try {
            const response = await axios.post('https://women-safety-app-backend-production.up.railway.app/sendDistressSignal', messageData);
            console.log(response.data);
            Alert.alert("Emergency Alert: 🚨A Distress Signal Has Been Sent Dear [Family Member], This is to inform you that a distress signal has been activated and sent to your designated emergency contact number.")
            // Alert.alert("🚨 EMERGENCY ALERT: A Distress Signal has been sent to your family phone number")
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 0.2 }}>
                <Header title="SOS" image1={require("../../assets/images/arrow-left.png")}
                    image2={require("../../assets/images/bible.png")}
                />
            </View>
            <View style={{ flex: 0.1 }}>
                <Image
                style={{alignSelf:'center', height:200, width:200, borderRadius:30}}
                source={require("../../assets/images/sos.png")} />
            </View>

            <View style={styles.container}>
                <Text style={styles.header}>SOS Screen</Text>
                <TouchableOpacity style={styles.button} onPress={handlePanicButtonPress}>
                    <Text style={styles.buttonText}>Panic Button</Text>
                </TouchableOpacity>
                <View style={styles.contactsContainer}>
                    <Text style={styles.contactsHeader}>Emergency Contacts</Text>
                    {emergencyContacts.map((contact, index) => (
                        <Text key={index} style={styles.contactText}>
                            {contact.name}: {contact.phoneNumber}
                        </Text>
                    ))}
                </View>
            </View>
        </View>
    );
};

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
    contactsContainer: {
        marginTop: 20,
    },
    contactsHeader: {
        color: "#372329",
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    contactText: {
        fontSize: 16,
        marginBottom: 5,
        color:"red"
    },
});

export default SosSignal;
