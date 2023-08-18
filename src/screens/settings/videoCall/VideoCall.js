// App.js
import React, { Component } from 'react';

import { ZegoUIKitPrebuiltCall,
     ONE_ON_ONE_VIDEO_CALL_CONFIG,
     GROUP_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { View, StyleSheet } from 'react-native';


// parameter ke ander jo id ayege callId wo hama yaha receive krenge route ko hooks se
import {useRoute} from "@react-navigation/native"

import { useNavigation } from '@react-navigation/native';

export default function VideoCall(props) {

    const userId = String(Math.floor(Math.random() * 100000));
    // console.log(userId);


    // to route ka yaha variable bana lete hai
    const route = useRoute();
    // ab is ke parameter ko elada kerna hai
    const {callId , username} = route.params; 
    // console.log(callId);
    // ab is callid ko neche paste krde


    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={81000291}
                appSign={"74f47a6f6c44cd1205cc503f60a33da955f0e105ded13cdc044a6623c464d146"}
                userID={userId} // userID can be something like a phone number or the user id on your own user system. 
                // userID={"121212"} // userID can be something like a phone number or the user id on your own user system. 
                // userName={"user_12345"}
                userName={username} // group call ke leye
                // userName={`user_${userId}`}
                callID={callId} // callID can be any unique string. 
                // callID={"group123"} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    // ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    ...GROUP_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => {
                        navigation.goBack();
                        //  props.navigation.navigate('Settings1') 
                    },
                    onHangUp: () => {
                        navigation.goBack();
                        // props.navigation.navigate('Settings1')
                    },
                }}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})