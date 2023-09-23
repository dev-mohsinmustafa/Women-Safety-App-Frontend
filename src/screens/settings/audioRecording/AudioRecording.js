import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from '../../../components/header/Header';
import Button from '../../../components/button/Button';


// import { Audio } from "expo-av";
import { Audio } from "react-native";



const AudioRecording = () => {
    const [emergencyContacts, setEmergencyContacts] = useState([
        { name: 'Emergency Contact 1', phoneNumber: '111-111-1111' },
        { name: 'Emergency Contact 2', phoneNumber: '222-222-2222' },
        // Add more emergency contacts as needed
    ]);




    // 
    const [recording, setRecording] = useState();
    // List of Recordings 
    const [recordings, setRecordings] = useState([]);

    // method in return
    async function startRecording() {
        try {
            const perm = await Audio.requestPermissionsAsync();
            if (perm.status === "granted") {
                await Audio.setAudioModeAsync({
                    allowsRecordingsIOS: true,
                    playsInSilentModeIOS: true,
                });
                const { recording } = await Audio.Recordings.createAsync(Audio.RECORDING_OPTIONS_PRESENT_HIGH_QUALITY);
                setRecording(recording);
            }
        } catch (error) {

        }
    }


    async function stopRecording() {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        let allRecordings = [...recording];
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        allRecordings.push({
            sound: sound,
            duration: getDurationFormatted(status.durationMillis),
            file: recording.getURI()
        });

        setRecording(allRecordings);

    }



    // Duration of Recording
    function setDurationFormatted(milliseconds) {

        const minutes = milliseconds / 1000 / 60;
        const seconds = Math.round((minutes - Math.floor(minutes)) * 60);
        return seconds < 10 ? `${Math.floor(minutes)}: 0${seconds}`
            :
            `${Math.floor(minutes)} : ${seconds}`
    }


    function getRecordingLines() {
        return recordings.map((recordingLine, index) => {
            return (
                <View key={index} style={styles.row}>
                    <Text>Recording # 1{index + 1} | {recordingLine.duration}</Text>
                    <TouchableOpacity onPress={() => recordingLine.second.relayAsync()}>
                        <Button title="Play" />
                    </TouchableOpacity>
                </View>
            );
        });
    }


    function clearRecordings() {
        setRecording([])
    }


    return (
        <View style={styles.mainContainer}>
            <View style={{ flex: 0.2 }}>
                <Header title="Audio" image1={require("../../../assets/images/arrow-left.png")}
                    image2={require("../../../assets/images/bible.png")}
                />
            </View>
            <View style={{ flex: 0.1 }}>
                <Image
                    style={{ alignSelf: 'center', height: 200, width: 200, borderRadius: 30 }}
                    source={require("../../../assets/images/audio.png")} />
            </View>

            <View style={styles.container}>
                <Text style={styles.header}>Audio Recording</Text>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Audio Button</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={recording ? stopRecording : startRecording}>
                    <Button title={recording ? "Stop Recording" : "Start Recording"} />
                </TouchableOpacity>
                {
                    getRecordingLines()
                }
                <TouchableOpacity onPress={clearRecordings}>
                    <Button title={recordings.length > 0 ? "Clear Recording" : ""} />
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
        color: "red"
    },


    row: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 40,
    },
    fill: {
        flex: 1,
        margin: 15,
    }
});

export default AudioRecording;
