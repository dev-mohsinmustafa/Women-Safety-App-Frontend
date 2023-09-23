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
      from: '+15177422505',
      to: '+923007261440',
      
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
         console.error('Response Data:', error.response.data);
        console.error('Response Status:', error.response.status);
        Alert.alert("Your free trial is expired! Please recharge your account");

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




// 

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Image, Alert, TouchableOpacity, TextInput, ScrollView } from 'react-native';
// import ShakeEvent from 'react-native-shake';
// import axios from 'axios';
// import Header from '../../components/header/Header';

// const ShakeSignal = () => {
//   const [customContacts, setCustomContacts] = useState([]); // State for custom contacts
//   const [newContactName, setNewContactName] = useState('');
//   const [newContactNumber, setNewContactNumber] = useState('');

//   useEffect(() => {
//     // Start listening for shake events
//     ShakeEvent.addListener(() => {
//       console.log('Shake event detected!');
//       // Send the distress signal when shake is detected
//       sendDistressSignal();
//     });

//     // Clean up the event listener on unmount
//     return () => ShakeEvent.removeListener();
//   }, []);

//   const sendDistressSignal = async () => {
//     // Construct the message with custom contacts
//     const messageData = {
//       // Add the custom contact numbers to the "to" field
//       to: customContacts.map((contact) => contact.number).join(', '),
//       body:
//         "Emergency Alert: 🚨 Your safety is at risk. Take action now! This is to inform you that a distress signal has been activated and sent to your designated emergency contact number.Your immediate attention and assistance may be required.Please take appropriate action and contact the person who triggered this alert.Thank you for your prompt response.",
//     };

//     try {
//       const response = await axios.post('https://women-safety-app-backend-production.up.railway.app/sendDistressSignal', messageData);
//       Alert.alert("Emergency Alert: 🚨A Shake Phone Signal Has Been Sent");

//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//       console.error('Response Data:', error.response.data);
//       console.error('Response Status:', error.response.status);
//       Alert.alert("Your free trial is expired! Please recharge your account");
//     }
//   };

//   // Function to add a new custom contact
//   const addCustomContact = () => {
//     if (newContactName && newContactNumber) {
//       const contact = { name: newContactName, number: newContactNumber };
//       setCustomContacts([...customContacts, contact]);
//       setNewContactName('');
//       setNewContactNumber('');
//     } else {
//       Alert.alert('Please enter both name and number for the custom contact.');
//     }
//   };

//   return (
//     <ScrollView style={styles.mainContainer}>
//       <View style={{ flex: 0.2,marginTop:30 }}>
//         <Header title="Shake Phone" image1={require("../../assets/images/arrow-left.png")}
//           image2={require("../../assets/images/bible.png")}
//         />
//       </View>
//       <View style={{ flex: 0.1, marginTop:30 }}>
//         <Image
//           style={{ alignSelf: 'center', height: 200, width: 200, borderRadius: 30 }}
//           source={require("../../assets/images/shake2.png")}
//         />
//       </View>
//       <View style={styles.container}>
//         <Text style={styles.text}>Shake your phone to send a distress signal!</Text>
//       </View>
//       <View style={styles.container}>
//         <Text style={styles.customContactsHeader}>Custom Contacts</Text>
//         {customContacts.map((contact, index) => (
//           <View key={index} style={styles.customContactItem}>
//             <Text style={styles.customContactText}>
//               {contact.name}: {contact.number}
//             </Text>
//           </View>
//         ))}
//       </View>
//       <View style={styles.container}>
//         <TextInput
//           style={styles.inputField}
//           placeholder="Contact Name"
//           placeholderTextColor={"#372329"}
//           value={newContactName}
//           onChangeText={setNewContactName}
//         />
//         <TextInput
//           style={styles.inputField}
//           placeholder="Contact Number"
//           placeholderTextColor={"#372329"}
//           value={newContactNumber}
//           onChangeText={setNewContactNumber}
//           keyboardType="numeric"
//         />
//         <TouchableOpacity style={styles.addButton} onPress={addCustomContact}>
//           <Text style={styles.buttonText}>Add Custom Contact</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: "#FFECD0",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   text: {
//     textAlign: 'center',
//     color: "red",
//     fontFamily: "Nunito-SemiBold",
//     fontSize: 18,
//   },
//   customContactsHeader: {
//     color: "#FF3974",
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   customContactItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   customContactText: {
//     fontSize: 12,
//     color: "#FF3974",
//   },
//   inputField: {
//     borderWidth: 1,
//     borderColor: "#372329",
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginTop: 10,
//     width: "80%",
//     color:"#372329"
//   },
//   addButton: {
//     backgroundColor: 'red',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 8,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ShakeSignal;

// 