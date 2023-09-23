// import React from 'react'
// import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'

// const Home = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.navigate("ConnectNearby")}>

//         <View>
//           <ImageBackground
//           resizeMode='cover'
//           style={{width:"100%", height:"100%",}}
//             source={require("../../assets/images/map.png")}
//           >

//           </ImageBackground>
//         </View>

//       </TouchableOpacity>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFECD0",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30
//   }
// })

// export default Home;






import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, PermissionsAndroid, Platform, TouchableOpacity,Alert } from 'react-native'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps



import Share from 'react-native-share';
import files from "../../assets/filesBase64";



import { Marker } from 'react-native-maps';


import { Callout } from 'react-native-maps';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { GOOGLE_MAPS_API_KEY } from '../../constants/keys/Keys';

import MapViewDirections from 'react-native-maps-directions';

import GetLocation from 'react-native-get-location';

import Button from '../../components/button/Button';



const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
});



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
    // urls: [files.image1, files.image2, ],

    // For pdf
    url: files.samplepdf2,

  }

  // now share this message we use try catch

  try {
    const ShareResponse = await Share.open(shareOptions);
    console.log(JSON.stringify(ShareResponse));
  } catch (error) {
    console.log("Error => ", error);
  }


};


const Home = () => {

  const mapRef = useRef(null);





  // Video 6 Coding with Zain
  // in todays video we are making routes 


  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();




  // Video 6 End





  //   Video 8 Coding with Zain 
  //   Get Location Permission 

  const [permissionGranted, setPermissionGranted] = useState(false);
  // 





  // if we have many markers 
  const [markersList, setMarkersList] = useState([
    {
      id: 1,
      latitude: 31.439870963634046,
      longitude: 73.1208668264174,
      title: "Faisalabad",
      description: "This is Faislabad current Location",
    },
    {
      id: 2,
      latitude: 31.52115778849021,
      longitude: 74.33430990809879,
      title: "Lahore",
      description: "This is Lahore current Location",
    },
    {
      id: 3,
      latitude: 33.693411219299215,
      longitude: 73.03247212931144,
      title: "Islamabad",
      description: "This is Islamabad current Location",
    },
    {
      id: 4,
      latitude: 24.888151933480124,
      longitude: 67.02053909675928,
      title: "Karachi",
      description: "This is Karachi current Location",
    },
  ])



  // Extra 
  const MyCustomMarkerView = () => {
    return (
      <Image
        style={{ width: 30, height: 30 }}
        source={require("../../assets/images/mohsin.png")} />
    )
  }



  const MyCustomCalloutView = () => {
    return (
      <View >
        <Text style={{ color: 'red' }}>Mohsin Picture</Text>
      </View>
    )
  }



  // mtlb when we click on any address on search it will move to location
  async function moveToLocation(latitude, longitude) {
    mapRef.current.animateToRegion(
      {
        latitude,
        longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      2000,
    );
  }





  // how to get location permission on android


  useEffect(() => {
    _getLocationPermission();
  }, [])


  async function _getLocationPermission() {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'Please Allow Location permission to continue..',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {

          // 
          _getCurrentLocation();
          // 
          console.log('You can use the Location');
          // after the permission granted we have this code to show our ui
          setPermissionGranted(true);

        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }

  }



  // to get the current location i will be using we use this code from documentation
  function _getCurrentLocation() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log("My Current Location is ==> ", location);
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }


//if we want share in whatsapp
   // Function to get and share current location on WhatsApp
   const shareCurrentLocation = async () => {
    try {
      const location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      });

      const shareOptions = {
        // You can customize the message here
        message: `My current location is: http://maps.google.com/?q=${location.latitude},${location.longitude}`,
      };

      await Share.open(shareOptions);

    } catch (error) {
      console.error('Error sharing location:', error);
    }
  };
//



//if we want share in google maps



// 



  //   Video 8 Coding with Zain 
  //   Get Location Permission 
  if (!permissionGranted) {
    return (
      <View><Text>Please Allow Location permission to continue..</Text></View>
    )
  }


  // 




  return (
    <View style={styles.container} >


      {/* <View style={{ zIndex: 1, backgroundColor: "pink",flex:0.5  }}>

        <GooglePlacesAutocomplete

          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          onFail={(error) => {
            console.log(error);
          }}
        />
      </View> */}


      <View style={{ width: "100%", paddingVertical: 20, paddingHorizontal: 10, position: "absolute", top: 0, left: 0, right: 0, zIndex: 1, flexDirection: 'row' }}>

        {/* now we get two search bars so we need two view tags */}

        <View style={{  flex: 0.5 }}>
          <GooglePlacesAutocomplete
            // now we get lang long 
            // mtlb when we click on any address on search it will move to location
            fetchDetails={true}

            // 
            // placeholder='Search'
            placeholder='Origin'
            textInputProps={{
              placeholderTextColor: '#A6AAB4',
              // style: {
              //   backgroundColor: 'red',
              //   paddingHorizontal: 20,
              //   width: '100%',
              // },
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);

              // mtlb when we click on any address on search it will move to location
              console.log(JSON, stringify(data));
              console.log(JSON.stringify(details?.geometry?.location));
              // 

              // Video 6 
              let originCoordinates = {
                latitude: details?.geometry?.location.lat,
                longitude: details?.geometry?.location.lng,
              };

              setOrigin(originCoordinates);

              // Video 6 call origin in moveToLocation code

              moveToLocation(details?.geometry?.location.lat, details?.geometry?.location.lng)
              moveToLocation(originCoordinates);

              // end long lang
            }}
            query={{
              // key: GOOGLE_MAPS_API_KEY,
              key: "AIzaSyBRXj2DhUtd9c-hvmKWDJm4DIv-YUgWvjw",
              
              language: 'en',
            }}
            onFail={(error) => {
              console.log("You must enable Billing on the Google Cloud",error);
              Alert.alert("You must enable Billing on the Google Cloud to use this")
            }}

            // styling
            styles={{
              textInputContainer: {
                // backgroundColor: 'blue', // Set the background color to blue
                borderTopWidth: 0, // Optional: Remove top border
                borderBottomWidth: 0, // Optional: Remove bottom border
              },
              textInput: {
                color: 'black', // Set the text color
                fontSize: 16, // Set the font size
              },
              placeholder: {
                color: 'red', // Set the placeholder text color here
              },
              // ...other styles
            }}
          />
        </View>

        <View style={{  flex: 0.5, marginLeft: 5 }}>
          <GooglePlacesAutocomplete
            // now we get lang long 
            // mtlb when we click on any address on search it will move to location
            fetchDetails={true}

            // 
            placeholder='destination'
            textInputProps={{
              placeholderTextColor: '#A6AAB4',
              // style: {
              //   backgroundColor: 'red',
              //   paddingHorizontal: 20,
              //   width: '100%',
              // },
            }}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);

              // mtlb when we click on any address on search it will move to location

              // 
              // Video 6 
              let destinationCoordinates = {
                latitude: details?.geometry?.location.lat,
                longitude: details?.geometry?.location.lng,
              };
              setDestination(destinationCoordinates);
              console.log("Mohsin Destination Dekho", setDestination);


              // Video 6 call origin in moveToLocation code
              moveToLocation(destinationCoordinates);
              console.log("Mohsin Location Dekho", moveToLocation);


              // end long lang
            }}
            query={{
              // key: GOOGLE_MAPS_API_KEY,
              key: "AIzaSyBRXj2DhUtd9c-hvmKWDJm4DIv-YUgWvjw",
              
              language: 'en',
            }}
            onFail={(error) => {
              console.log(error);
            }}

            // styling
            styles={{
              textInputContainer: {
                // backgroundColor: 'blue', // Set the background color to blue
                borderTopWidth: 0, // Optional: Remove top border
                borderBottomWidth: 0, // Optional: Remove bottom border
              },
              textInput: {
                color: 'black', // Set the text color
                fontSize: 16, // Set the font size
              },
              placeholder: {
                color: 'red', // Set the placeholder text color here
              },
              // ...other styles
            }}
          />
        </View>



      </View>


      {/* <View style={{ position: 'absolute', top: 10 }}>
        <Text style={{ color: "red" }}>Mohsin</Text>
      </View> */}


      <MapView
        // mtlb when we click on any address on search it will move to location
        ref={mapRef}

        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{



          // Faisalabad
          // latitude: 31.453929982678847,
          // longitude:73.11537622243549,
          // latitudeDelta: 0.1,
          // longitudeDelta: 0.1,


          // For Pakistan
          latitude: 30.00128397509374,
          longitude: 69.45545864509043,
          latitudeDelta: 0.1,
          longitudeDelta: 10.1,



        }}
        onRegionChange={x => {
          console.log(x);
        }}
      >




        {/*  Video 6 Coding with Zain when marker comments we use auto marker when user enter origin then marker appear */}

        {origin !== undefined ?
          <Marker coordinate={origin}>
          </Marker> : null}

        {destination !== undefined ?
          <Marker coordinate={destination}>
          </Marker> : null}




        {/*  */}




        {/* For Marker */}
        {/* <Marker
          coordinate={{ latitude: 31.439870963634046, longitude: 73.1208668264174 }}
          title={"I am here"}
          description={"This is Faislabad"}
        /> */}




        {/* Rendering a custom Marker with a custom Callout */}

        {/* when we add origin we comment this marker code */}
        {/* <Marker coordinate={{ latitude: 27.91860439837177, longitude: 71.11117250728748 }}>
          <MyCustomMarkerView /> */}
          {/* show text on image */}
          {/* <Callout style={{ width: 300, height: 100, }}>
            <MyCustomCalloutView />
          </Callout>
        </Marker> */}

        {/* For multiple marker use mapping */}
        {
          markersList.map((marker) => {
            return (
              <Marker
                key={marker.id}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                title={marker.title}
                description={marker.description}
              />
            )
          })
        }
        {/*end comment code when we add origin we comment this marker code */}




        {/*  Video 6 Coding with Zain */}
        {/*  in todays video we are making routes  */}

        {/* Two conditions that we have to check origin and destination not equal to undefined*/}
        {
          origin != undefined && destination != undefined ?
            <MapViewDirections
              origin={origin}
              strokeColor='red'
              strokeWidth={2}
              destination={destination}
              // apikey={GOOGLE_MAPS_API_KEY}
              apikey={"AIzaSyBRXj2DhUtd9c-hvmKWDJm4DIv-YUgWvjw"}
            /> : null

        }

      </MapView>



      {/* <TouchableOpacity style={{ position: 'absolute', bottom: 20 }} onPress={() => _getCurrentLocation()}>
        <Button title="Get Current Location" />
      </TouchableOpacity> */}
      <TouchableOpacity style={{ position: 'absolute', bottom: 20, width:"100%" }} onPress={() => shareCurrentLocation()}>
        <Button title="Share Current Location" />
      </TouchableOpacity>


      {/* <View style={{ backgroundColor: "red", }}>
        <Button title='Share' onPress={myCustomerShare} />
      </View> */}
    </View>


    // <View style={{ flex: 1 }}>
    //   <View style={{ width: "100%", height: "100%", padding: 20 }}>

    //     <GooglePlacesAutocomplete
    //       placeholder='Search'
    //       // placeholderTextColor='#FF3974'
    //       onPress={(data, details = null) => {
    //         // 'details' is provided when fetchDetails = true
    //         console.log(data, details);
    //       }}
    //       query={{
    //         key: GOOGLE_MAPS_API_KEY,
    //         language: 'en',
    //       }}
    //       styles={{
    //         textInputContainer: {
    //           // backgroundColor: 'blue', // Set the background color to blue
    //           borderTopWidth: 0, // Optional: Remove top border
    //           borderBottomWidth: 0, // Optional: Remove bottom border
    //         },
    //         textInput: {
    //           color: 'black', // Set the text color
    //           fontSize: 16, // Set the font size
    //         },
    //         placeholder: {
    //           color: 'red', // Set the placeholder text color here
    //         },
    //         // ...other styles
    //       }}
    //       onFail={(error) => {
    //         console.log(error);
    //       }}
    //     />
    //   </View>

    // </View>
  )
};



export default Home;


