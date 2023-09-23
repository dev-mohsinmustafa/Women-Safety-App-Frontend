
// import React, { useEffect, useState } from 'react'
// import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, Alert, Pressable } from 'react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { locationData } from '../../constants/Constants';

// import ratios from '../../styles/ratios';
// import Locations from '../../components/locations/Locations';

// import AwesomeIcon from 'react-native-vector-icons/Ionicons';
// import AwesomeIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';


// let {
//   widthPixel,
//   heightPixel,
//   fontPixel,
//   pixelSizeVertical,
//   pixelSizeHorizontal,
// } = ratios


// const XplafesList = ({ navigation }) => {

//   // es data ko ap store be krwa skty hai 1 variable me
//   const [userdata, setUserdata] = useState(null)







//   //   // yaha ab get krna hai data
//   //   AsyncStorage.getItem("user")
//   //   .then(data=>{
//   // // console.log("async user data", data);
//   // // hook banane ke bad ab parse krwana hai data kyo wha hamne string ke format me bheja tha na
//   // // ab is taran log krwana se bar bar data data aye ga to ham es ko useEffect me 
//   // // call kr lenge function ko
//   // setUserdata(JSON.parse(data))

//   //   })
//   //   .catch(err=>{
//   //     Alert.alert(err)
//   //   })

//   useEffect(() => {
//     AsyncStorage.getItem("user")
//       .then(data => {
//         setUserdata(JSON.parse(data))

//       })
//       .catch(err => {
//         Alert.alert(err)
//       })
//   }, [])



//   // ab is taran log krwana se bar bar data data aye ga to ham es ko useEffect me 
//   // call kr lenge function ko ta ke 1 bar data aye bs
//   console.log("async userdata from XplafesList screen", userdata);

//   return (
//     <View style={styles.container}>
//       <View style={styles.container1}>
//         <Text style={styles.xplafes}>Xplafés Around</Text>
//         <Text style={styles.xplafes}>You</Text>
//       </View>

//       {/* <Pressable style={styles.refresh}
//         onPress={() => navigation.navigate("AllChats")}>
//         <AwesomeIcon name="chatbubbles" size={30} color="#FF3974"
//         />
//       </Pressable>

//       <Pressable style={styles.search}
//         onPress={() => navigation.navigate("SearchUserPage")}>
//         <AwesomeIcon1 name="account-search" size={35} color="#FF3974"
//         />
//       </Pressable> */}


//       <View style={styles.container2}>
//         {
//           locationData.map((item, index) => {
//             return (
//               // <Text key={index}>{item.location} - {item.address}</Text>
//               <Locations key={index} locationData={item} />
//             )
//           })
//         }


//       </View>



//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFECD0",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30
//   },
//   container1: {
//     flex: 0.2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: "red",
//     // marginBottom:61
//   },
//   xplafes: {
//     color: "#372329",
//     fontFamily: "Nunito-SemiBold",
//     fontSize: fontPixel(30),
//   },
//   container2: {
//     // backgroundColor: "green",
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   refresh: {
//     position: 'absolute',
//     top: 20,
//     right: 16,
//     zIndex: 1,
//   },
//   search: {
//     position: 'absolute',
//     top: 20,
//     left: 16,
//     zIndex: 1,
//   }


// })

// export default XplafesList;














// 

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Image, ScrollView, TextInput, Button, FlatList } from 'react-native';
import Header from '../../components/header/Header';
import ratios from '../../styles/ratios';
import ErrorHandler from '../../components/ErrorHandler';

import CallIcon from "react-native-vector-icons/Feather";
import ChartIcon from "react-native-vector-icons/MaterialIcons";






let {
  heightPixel,
  widthPixel,
  fontPixel,
} = ratios;







const XplafesList = ({ navigation }) => {

  // const [emergencyContacts, setEmergencyContacts] = useState([
  //     { name: 'Family Contact 1', phoneNumber: '0300-700900' },
  //     { name: 'Family Contact 2', phoneNumber: '0322-222-400' },
  //     // Add more emergency contacts as needed
  // ]);
  const emergencyNumbers = {
    police: '15', // Replace this with the emergency number for your region
    ambulance: '1122', // Replace this with the emergency number for your region
    callPunjabHighwayPetrol: "1124",
    callMotowayPolice: "130",
    callPunjabCommission: "1043",
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
      console.log('Updated contacts:', updatedContacts); // Log the updated contacts

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
        <Header title="Emergency Calls" image1={require("../../assets/images/arrow-left.png")}
          image2={require("../../assets/images/bible.png")}
        />
      </View>
      <View style={{ flex: 0.5, alignItems: 'center', marginTop: heightPixel(50) }}>
        <Image
          style={{ width: 300, height: 200, borderRadius: 20 }}
          source={require("../../assets/images/emergency.png")} />
      </View>


      <View style={{ marginTop: 30, flex: 1, marginHorizontal: 10, flexDirection: "row", gap: 3 }}>
        <TouchableOpacity
          onPress={() => handleEmergencyCall(emergencyNumbers.police)}
          style={{ height: "100%", backgroundColor: "red", width: "50%", justifyContent: "center", alignItems: "center", paddingVertical: 20, borderRadius: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <CallIcon name="phone-call" size={45} color="white" />
            <Text style={styles.bible}>15</Text>
          </View>
          {/* <View style={{flexDirection:"row"}}> */}
          <Text style={styles.call}>Call</Text>
          <Text style={styles.call}>Police</Text>
          <Text style={styles.call}>پولیس کو کال کریں</Text>
          {/* </View> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleEmergencyCall(emergencyNumbers.ambulance)}

          style={{ height: "100%", backgroundColor: "red", width: "50%", justifyContent: "center", alignItems: "center", paddingVertical: 20, borderRadius: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <CallIcon name="phone-call" size={45} color="white" />
            <Text style={styles.bible}>1122</Text>
          </View>
          {/* <View style={{flexDirection:"row"}}> */}
          <Text style={styles.call}>Call</Text>
          <Text style={styles.call}>Rescue</Text>
          <Text style={styles.call}>ریسکیو کو کال کریں</Text>
          {/* </View> */}
        </TouchableOpacity>


      </View>




      <View style={{ marginTop: 10, flex: 1, marginHorizontal: 10, flexDirection: "row", gap: 3 }}>
        <TouchableOpacity
          onPress={() => handleEmergencyCall(emergencyNumbers.callPunjabHighwayPetrol)}

          style={{ height: "100%", backgroundColor: "red", width: "50%", justifyContent: "center", alignItems: "center", paddingVertical: 20, borderRadius: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <CallIcon name="phone-call" size={45} color="white" />
            <Text style={styles.bible}>1124</Text>
          </View>
          {/* <View style={{flexDirection:"row"}}> */}
          <Text style={styles.call}>Call Punjab</Text>
          <Text style={styles.call}>Highway Petrol</Text>
          <Text style={styles.call}>پنجاب ہائی وے پٹرولنگ کو کال کریں</Text>
          {/* </View> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleEmergencyCall(emergencyNumbers.callMotowayPolice)}

          style={{ height: "100%", backgroundColor: "red", width: "50%", justifyContent: "center", alignItems: "center", paddingVertical: 20, borderRadius: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <CallIcon name="phone-call" size={45} color="white" />
            <Text style={styles.bible}>130</Text>
          </View>
          {/* <View style={{flexDirection:"row"}}> */}
          <Text style={styles.call}>Call Motorway</Text>
          <Text style={styles.call}>Police</Text>
          <Text style={styles.call}>موٹروے پولیس کو کال کریں</Text>
          {/* </View> */}
        </TouchableOpacity>


      </View>




      <View style={{ marginTop: 10, flex: 1, marginHorizontal: 10, flexDirection: "row", gap: 3 }}>
        <TouchableOpacity
          onPress={() => handleEmergencyCall(emergencyNumbers.callPunjabCommission)}

          style={{ height: "100%", backgroundColor: "red", width: "50%", justifyContent: "center", alignItems: "center", paddingVertical: 20, borderRadius: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <CallIcon name="phone-call" size={45} color="white" />
            <Text style={styles.bible}>1043</Text>
          </View>
          {/* <View style={{flexDirection:"row"}}> */}
          {/* <Text style={styles.call}>Call Punjab</Text> */}
          <Text style={styles.call}>Call Punjab Commission on the status of Women</Text>
          {/* <Text style={styles.call}>the safety of women</Text> */}
          <Text style={styles.call}>پنجاب کمیشن کو کال کریں</Text>
          {/* </View> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleEmergencyCall(emergencyNumbers.cybercrime)}

          style={{ height: "100%", backgroundColor: "red", width: "50%", justifyContent: "center", alignItems: "center", paddingVertical: 20, borderRadius: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <CallIcon name="phone-call" size={45} color="white" />
            <Text style={styles.bible}>1991</Text>
          </View>
          {/* <View style={{flexDirection:"row"}}> */}
          <Text style={styles.call}>Call Cyer</Text>
          <Text style={styles.call}>Crime Helpline</Text>
          <Text style={styles.call}>سائبر کرائم ہیلپ لائن پر کال کریں</Text>
          {/* </View> */}
        </TouchableOpacity>


      </View>




      <View style={{ marginTop: 10, flex: 1, marginHorizontal: 10, flexDirection: "row", gap: 3, alignSelf: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("XplafesDetail")}

          style={{ height: "100%", backgroundColor: "red", width: "50%", justifyContent: "center", alignItems: "center", paddingVertical: 20, borderRadius: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <ChartIcon name="chat" size={45} color="white" />
            <Text style={styles.bible}>Chat</Text>
          </View>
          {/* <View style={{flexDirection:"row"}}> */}
          {/* <Text style={styles.call}>Call Punjab</Text> */}
          <Text style={styles.call}>Message Page</Text>
          {/* <Text style={styles.call}>the safety of women</Text> */}
          <Text style={styles.call}>یہاں پر کلک کر کے میسج بھیجیں</Text>
          {/* </View> */}
        </TouchableOpacity>



      </View>



      {/* comment */}

      <View style={styles.container}>
        <Text style={styles.header}>Recent Phone Call</Text>
        {/* 
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
        </TouchableOpacity> */}
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

        {/* <View style={styles.contactsContainer}> */}
        {/* <Text style={styles.contactsHeader}>Emergency Contacts</Text> */}


        {/* <TouchableOpacity
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
          </TouchableOpacity> */}

        {/* 
                    {emergencyContacts.map((contact, index) => (
                        <TouchableOpacity>
                            <Text key={index} style={styles.contactText}>
                                {contact.name}: {contact.phoneNumber}
                            </Text>
                        </TouchableOpacity>
                    ))} */}
        {/* </View> */}
      </View>
      {/* comment end */}





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
            keyboardType='number-pad'
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

          <TouchableOpacity
            style={{alignSelf:'flex-end'}}
            onPress={() => setIsEditing(false)} // Close the modal
          >
            <Text style={{ color: "black" }}>Close</Text>
          </TouchableOpacity>

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
              keyboardType='number-pad'
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
    fontSize: fontPixel(24),
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
    fontSize: fontPixel(18),
    fontWeight: 'bold',
  },
  contactsContainer: {
    marginTop: 20,
  },
  contactsHeader: {
    color: "#372329",
    fontSize: fontPixel(18),
    fontWeight: 'bold',
    marginBottom: 10,

  },
  contactText: {
    fontSize: fontPixel(12),
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
    // top: '70%',
    bottom: "10%",
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

  bible: {
    // color: "#372329",
    color: "white",
    fontFamily: "Nunito-SemiBold",
    fontSize: fontPixel(25),
    marginLeft: 27
  },
  call: {
    color: "white",
    // color: "#FF3974",
    fontSize: fontPixel(15),
    fontWeight: 'bold',
    paddingTop: 5
  },

});

export default XplafesList;


// 





