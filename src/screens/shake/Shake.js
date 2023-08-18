import React, { useEffect } from 'react';
import { RNShake } from 'react-native-shake'; // Replace 'react-native-shake' with the correct import for your RNShake library
import { Linking, Platform } from 'react-native';

const Shake = () => {
  useEffect(() => {
    const makeEmergencyCall = () => {
      const emergencyPhoneNumber = '911'; // Replace with the actual emergency phone number

      // Handle platform-specific phone call handling
      if (Platform.OS === 'ios') {
        Linking.openURL(`tel:${emergencyPhoneNumber}`);
      } else if (Platform.OS === 'android') {
        // Implement the Android-specific phone call handling using native modules
        // You need to implement a native module for Android to make the phone call.
        // Refer to React Native documentation for creating native modules for Android:
        // https://reactnative.dev/docs/native-modules-android
      }
    };

    const subscription = RNShake.addListener(() => {
      makeEmergencyCall();
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return null;
};

export default Shake;
