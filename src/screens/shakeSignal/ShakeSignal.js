import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
// import ShakeEvent from 'react-native-shake-event';
import axios from 'axios';
import ShakeEvent from 'react-native-shake'; // Import from 'react-native-shake'
import Header from '../../components/header/Header';

const ShakeSignal = () => {
  useEffect(() => {
    // Start listening for shake events
    ShakeEvent.addListener(() => {
      console.log("shake working", ShakeEvent);
      console.log('Shake event detected!'); // Add this console log

      // Send the distress signal when shake is detected
      sendDistressSignal();
    });

    // Clean up the event listener on unmount
    return () => ShakeEvent.removeListener();

  }, []);

  const sendDistressSignal = async () => {
    const messageData = {
      to: '+923007261440',
      // from: '+17692103456',
      from: '+12512972937',

      // body: "🚨 EMERGENCY ALERT: Your safety is at risk. Take action now!",
      body: "Emergency Alert: 🚨 Your safety is at risk. Take action now! This is to inform you that a distress signal has been activated and sent to your designated emergency contact number.Your immediate attention and assistance may be required.Please take appropriate action and contact the person who triggered this alert.Thank you for your prompt response.",
  };


    try {
      const response = await axios.post('https://women-safety-app-backend-production.up.railway.app/sendDistressSignal', messageData);
      // Alert.alert("🚨 EMERGENCY ALERT: A Distress Signal has been sent to your family phone number")
      Alert.alert("Emergency Alert: 🚨A Shake Phone Signal Has Been Sent Dear [Family Member], This is to inform you that a distress signal has been activated and sent to your designated emergency contact number.")


      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    // try {
    //   // Replace with your backend URL
    //   const backendUrl = 'http://10.0.0.2:8090/sendDistressSignal';
    //   const response = await axios.post(backendUrl);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error('Error sending distress signal: ', error);
    // }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 0.2 }}>
        <Header title="Shake Phone" image1={require("../../assets/images/arrow-left.png")}
          image2={require("../../assets/images/bible.png")}
        />
      </View>
      <View style={{ flex: 0.1 }}>
        <Image
          style={{ alignSelf: 'center', height: 200, width: 200, borderRadius: 30 }}
          source={require("../../assets/images/shake2.png")}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Shake your phone to send a distress signal!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: "#FFECD0",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:5
  },
  text: {
    textAlign: 'center',
    color: "red",
    fontFamily: "Nunito-SemiBold",
    fontSize: 18,
  },
});

export default ShakeSignal;
