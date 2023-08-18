import React, { useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { Accelerometer } from 'react-native-sensors';
import PhoneCall from 'react-native-phone-call';

const ShakeToCall = () => {
    const lastShakeTimeRef = useRef(0);

    useEffect(() => {
        const subscription = new Accelerometer({
            updateInterval: 100, // Adjust this value for the accelerometer update interval
        }).subscribe(({ x, y, z }) => {
            const currentTime = Date.now();
            const SHAKE_THRESHOLD = 1000; // Adjust this value to set the shake threshold (in milliseconds)

            if (currentTime - lastShakeTimeRef.current > SHAKE_THRESHOLD) {
                const shakeMagnitude = Math.sqrt(x * x + y * y + z * z);
                const SHAKE_SENSITIVITY = 1.5; // Adjust this value to set the shake sensitivity

                if (shakeMagnitude > SHAKE_SENSITIVITY) {
                    lastShakeTimeRef.current = currentTime;
                    initiateCall(); // Call the function to make a phone call
                }
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const initiateCall = () => {
        const phoneNumber = '923007261440'; // Replace this with the desired phone number
        const args = {
            number: phoneNumber,
            prompt: true,
        };

        PhoneCall(args).catch(console.error);
    };

    return (
        <View>
            <Text>Shake your phone to make a call!</Text>
        </View>
    );
};

export default ShakeToCall;
