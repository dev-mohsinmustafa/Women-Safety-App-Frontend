import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Image, ScrollView, TextInput, Button, FlatList } from 'react-native';
import Header from '../../components/header/Header';
import ratios from '../../styles/ratios';
import ErrorHandler from '../../components/ErrorHandler';







let {
    heightPixel,
    widthPixel,
    fontPixel,
} = ratios;







const EmergencyScreen = () => {

    // const [emergencyContacts, setEmergencyContacts] = useState([
    //     { name: 'Family Contact 1', phoneNumber: '0300-700900' },
    //     { name: 'Family Contact 2', phoneNumber: '0322-222-400' },
    //     // Add more emergency contacts as needed
    // ]);
    const emergencyNumbers = {
        police: '15', // Replace this with the emergency number for your region
        ambulance: '1122', // Replace this with the emergency number for your region
        cybercrime: "1991",
        familyMember1: "0300-7261440",
        familyMember2: "0300-7001440",
        recentCallNumber: "",
        mohsin: "0300-7261440",
        mohsin1: "0334-2871271",
    };

    const handleEmergencyCall = (phoneNumber) => {
        const phoneNumberWithProtocol = Platform.OS === 'ios' ? `telprompt:${phoneNumber}` : `tel:${phoneNumber}`;
        Linking.openURL(phoneNumberWithProtocol);
    };




    const [errormsg, setErrormsg] = useState(null);



    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const addContact = () => {
        if (name === "" || number === "") {
            setErrormsg("All fields are Required");
            return
        }
        else {
            setContacts([...contacts, { name, number }]);
            setName('');
            setNumber('');
        }
    };














    // delete and edit 
    const [isEditing, setIsEditing] = useState(false);
    const [editedContact, setEditedContact] = useState({});

    const startEditing = (contact) => {
        setIsEditing(true);
        // setEditedContact(contact);
        setEditedContact({ ...contact }); // Copy the contact to the editedContact

    };

    const finishEditing = () => {
        setIsEditing(false);
        // Find the index of the edited contact in the contacts array
        const contactIndex = contacts.findIndex(
            (contact) => contact.name === editedContact.name
        );
        if (contactIndex !== -1) {
            const updatedContacts = [...contacts];
            updatedContacts[contactIndex] = editedContact;
            setContacts(updatedContacts);
        }
    };

    const deleteContact = (index) => {
        const updatedContacts = [...contacts];
        updatedContacts.splice(index, 1);
        setContacts(updatedContacts);
    };


    // 


    return (
        <ScrollView style={styles.mainContainer}>
            <View style={{ flex: 0.3, marginTop: heightPixel(31) }}>
                <Header title="Emergency Call" image1={require("../../assets/images/arrow-left.png")}
                    image2={require("../../assets/images/bible.png")}
                />
            </View>
            <View style={{ flex: 0.5, alignItems: 'center', marginTop: heightPixel(50) }}>
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleEmergencyCall(emergencyNumbers.cybercrime)}
                >
                    <Text style={styles.buttonText}>Call Cyber Crime</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleEmergencyCall(emergencyNumbers.familyMember1)}
                >
                    <Text style={styles.buttonText}>Family Member 1</Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleEmergencyCall(emergencyNumbers.familyMember2)}
                >
                    <Text style={styles.buttonText}>Family Member 2</Text>
                </TouchableOpacity> */}

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleEmergencyCall(emergencyNumbers.recentCallNumber)}
                >
                    <Text style={styles.buttonText}>Recent Call Number</Text>
                </TouchableOpacity>

                <View style={styles.contactsContainer}>
                    <Text style={styles.contactsHeader}>Emergency Contacts</Text>


                    <TouchableOpacity
                        style={{ flexDirection: "row" }}
                        onPress={() => handleEmergencyCall(emergencyNumbers.mohsin)}
                    >
                        <Text style={styles.contactText}>family Contact 1 : </Text>
                        <Text style={styles.contactText}>0300-7261440</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ flexDirection: "row" }}
                        onPress={() => handleEmergencyCall(emergencyNumbers.mohsin1)}
                    >
                        <Text style={styles.contactText}>family Contact 2 : </Text>

                        <Text style={styles.contactText}>0334-2871271</Text>
                    </TouchableOpacity>

                    {/* 
                    {emergencyContacts.map((contact, index) => (
                        <TouchableOpacity>
                            <Text key={index} style={styles.contactText}>
                                {contact.name}: {contact.phoneNumber}
                            </Text>
                        </TouchableOpacity>
                    ))} */}
                </View>


            </View>






            <View style={{ flex: 1, marginVertical: 30 }}>

                <Text style={[styles.header, { textAlign: 'center' }]}>Add Custom Contacts</Text>

                {
                    // errormsg ? <ErrorHandler title="All fields are Required" /> : null
                    errormsg && <ErrorHandler title={errormsg} />

                }

                <View style={styles.inputContainer}>

                    <TextInput
                        placeholder="Contact Name"
                        placeholderTextColor="#372329"
                        style={styles.inputFieldColor}
                        value={name}
                        onChangeText={text => setName(text)}

                        onPressIn={() => setErrormsg(null)}

                    />
                </View>

                <View style={styles.inputContainer}>


                    <TextInput
                        placeholder="Contact Number"
                        placeholderTextColor="#372329"
                        style={styles.inputFieldColor}
                        value={number}
                        onChangeText={text => setNumber(text)}
                        onPressIn={() => setErrormsg(null)}

                    />
                </View>


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => addContact()}
                >
                    <Text style={styles.buttonText}>Add Contact</Text>
                </TouchableOpacity>

                {/* <Button title="Add Contact" onPress={addContact} /> */}

                {/* <FlatList
                    data={contacts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Text>{item.name}: {item.number}</Text>
                    )}
                /> */}
                {contacts.map((contact, index) => (
                    <View key={index} style={styles.contactItem}>
                        <Text style={styles.contactText}>
                            {contact.name}: {contact.number}
                        </Text>
                        <TouchableOpacity
                            style={styles.callButton}
                            onPress={() => handleEmergencyCall(contact.number)}
                        >
                            <Text style={styles.buttonText}>Call</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.editButton}
                            onPress={() => startEditing(contact)}
                        >
                            <Text style={styles.buttonText}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => deleteContact(index)}
                        >
                            <Text style={styles.buttonText}>Delete</Text>
                        </TouchableOpacity>


                    </View>
                ))}
            </View>


            {/* Edit Contact Modal */}
            {isEditing && (
                <View style={styles.editModal}>
                    <View style={styles.inputContainer}>

                        <TextInput
                            placeholder="Edit Name"
                            placeholderTextColor="#372329"
                            style={styles.inputFieldColor}
                            value={editedContact.name}
                            onChangeText={(text) =>
                                setEditedContact({ ...editedContact, name: text })
                            }
                        />
                    </View>


                    <View style={styles.inputContainer}>

                        <TextInput
                            placeholder="Edit Number"
                            placeholderTextColor="#372329"
                            style={styles.inputFieldColor}
                            value={editedContact.number}
                            onChangeText={(text) =>
                                setEditedContact({ ...editedContact, number: text })
                            }
                        />

                    </View>


                    <TouchableOpacity
                        style={styles.editSaveButton}
                        onPress={() => finishEditing()}
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            )}



        </ScrollView>
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
        marginTop: 30,
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
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 20
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
        fontSize: 12,
        // marginBottom: 5,
        color: "#FF3974"
    },



    contactItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10
    },
    callButton: {
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },



    editButton: {
        backgroundColor: 'green',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    deleteButton: {
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    editModal: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        position: 'absolute',
        top: '50%',
        left: '10%',
        right: '10%',
    },
    editSaveButton: {
        backgroundColor: 'green',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginTop: 20
    },

    inputContainer: {
        // borderWidth: 1,
        // borderColor: "#372329",
        // marginHorizontal: 22,
        // width: "90%",

        borderWidth: 1,
        borderColor: "#372329",
        // backgroundColor: "#FFECD0",
        borderRadius: 10,
        paddingHorizontal: widthPixel(10),
        marginHorizontal: widthPixel(22),
        marginTop: heightPixel(20)
    },
    inputFieldColor: {
        color: "#372329",
        fontFamily: "Nunito-SemiBold",
        fontSize: fontPixel(20),
        textAlignVertical: 'center'
    },
});

export default EmergencyScreen;
