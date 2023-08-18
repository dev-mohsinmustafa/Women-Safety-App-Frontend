import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Image } from 'react-native';
import Header from '../../components/header/Header';

const EmergencyScreen = () => {

    const [emergencyContacts, setEmergencyContacts] = useState([
        { name: 'Emergency Contact 1', phoneNumber: '111-111-1111' },
        { name: 'Emergency Contact 2', phoneNumber: '222-222-2222' },
        // Add more emergency contacts as needed
    ]);
    const emergencyNumbers = {
        police: '15', // Replace this with the emergency number for your region
        ambulance: '1122', // Replace this with the emergency number for your region
    };

    const handleEmergencyCall = (phoneNumber) => {
        const phoneNumberWithProtocol = Platform.OS === 'ios' ? `telprompt:${phoneNumber}` : `tel:${phoneNumber}`;
        Linking.openURL(phoneNumberWithProtocol);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 0.3 }}>
                <Header title="Emergency Call" image1={require("../../assets/images/arrow-left.png")}
                    image2={require("../../assets/images/bible.png")}
                />
            </View>
            <View style={{ flex: 0.5, alignItems: 'center' }}>
                <Image
                    style={{ width: 300, height: 200, borderRadius: 20 }}
                    source={require("../../assets/images/emergency.png")} />
            </View>

            <View style={styles.container}>
                <Text style={styles.header}>Emergency Services</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleEmergencyCall(emergencyNumbers.police)}
                >
                    <Text style={styles.buttonText}>Call Police</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleEmergencyCall(emergencyNumbers.ambulance)}
                >
                    <Text style={styles.buttonText}>Call Ambulance</Text>
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
        // marginTop:30,
        // backgroundColor:'red'
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

export default EmergencyScreen;
