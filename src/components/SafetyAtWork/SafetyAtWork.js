import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import ratios from '../../styles/ratios';
import Header from '../header/Header';

let {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
} = ratios


const SafetyAtWork = () => {
    return (
        <View style={styles.container}>



            <Header title="Safety at Work" marginLeft={31} marginLeft1={27}
                marginLeft2={9}
                image1={require("../../assets/images/arrow-left.png")}
                image2={require("../../assets/images/bible.png")}


            />


            {/* <View style={styles.container1}>
                <View>
                    <Image
                        source={require("../../assets/images/arrow-left.png")}
                    />
                </View>
                <Text style={styles.bible}>Safety at Work</Text>

                <View>
                    <Image
                        style={{ width: 45, height: 44 }}
                        source={require("../../assets/images/bible.png")}
                    />
                </View>
            </View> */}

            <View style={styles.container2}>
                <View>
                    <Image
                        source={require("../../assets/images/girlcycle.png")}
                        // style={{ width: 374, height: 194 }}
                        resizeMode='contain'
                    />
                </View>

                <ScrollView style={{ flex: 1 }}>

                    <View style={styles.container3}>
                        <Text style={styles.bible}>1. **Choose a Reputable App**:</Text>

                        <Text style={styles.lorem}>
                            Select a well-known and reputable safety app from a trusted source, such as the App Store or Google Play Store. Read user reviews and check ratings to ensure it meets your needs.
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Quis vel eros donec ac odio tempor orci dapibus. Purus sit amet luctus venenatis lectus magna fringilla. Vitae et leo duis ut diam quam nulla porttitor massa. Convallis posuere morbi leo urna molestie at elementum. Nulla aliquet enim tortor at auctor urna. Laoreet id donec ultrices tincidunt. Blandit massa enim nec dui nunc. */}

                        </Text>

                        <Text style={styles.bible}>2. **Share Your Location**:</Text>
                        <Text style={styles.lorem}>Most safety apps allow you to share your real-time location with trusted contacts. Use this feature when you're heading to or leaving work, especially if it's late at night.</Text>


                        <Text style={styles.bible}>3. **Set Safe Zones**:</Text>

                        <Text style={styles.lorem}>Some apps allow you to define safe zones or geofences. Configure these zones around your workplace and other frequently visited locations. If you leave or enter these areas, the app can send alerts to your contacts.</Text>


                        <Text style={styles.bible}>4. **Emergency Contacts**:</Text>
                        <Text style={styles.lorem}>Ensure that your emergency contacts are correctly set up within the app. These contacts should include family members, friends, and colleagues who can help in case of an emergency.</Text>

                        <Text style={styles.bible}>5. **Panic Button**:</Text>
                        <Text style={styles.lorem}>Familiarize yourself with the panic button feature in the app. Know how to quickly activate it if you feel threatened or unsafe at work.</Text>

                        <Text style={styles.bible}>6. **Safety Timer**:</Text>
                        <Text style={styles.lorem}>Some apps offer a safety timer feature that allows you to set a predetermined time for your activities. If you don't check in within the specified time, the app can notify your emergency contacts.</Text>

                        <Text style={styles.bible}>7. **Check-In Feature**:</Text>
                        <Text style={styles.lorem}>Use the check-in feature if your app offers it. It allows you to periodically update your status to let your contacts know you're safe.</Text>

                        <Text style={styles.bible}>8. **In-App Messaging**:</Text>
                        <Text style={styles.lorem}> Ensure you can send and receive messages within the app. This can be useful for communicating discreetly with your contacts or security personnel.</Text>

                        <Text style={styles.bible}>9. **Know How to Use SOS Features**:</Text>
                        <Text style={styles.lorem}>If the app has an SOS feature, understand how it works. Typically, it involves pressing a combination of buttons or a dedicated SOS button to send distress signals.</Text>


                        <Text style={styles.bible}>10. **Practice Using the App**:</Text>
                        <Text style={styles.lorem}>Familiarize yourself with all the app's features and practice using them. The more comfortable you are with the app, the more effectively it can assist you in a real emergency.</Text>

                        <Text style={styles.bible}>11. **Keep Your Phone Charged**:</Text>
                        <Text style={styles.lorem}> Ensure your phone is charged, and you have a backup power source like a portable charger or power bank. A safety app is only useful if your phone has power.</Text>

                        <Text style={styles.bible}>12. **Privacy Settings**:</Text>
                        <Text style={styles.lorem}>Review the app's privacy settings and adjust them according to your preferences. Be mindful of sharing personal information within the app.</Text>

                        <Text style={styles.bible}>13. **Practice Using the App**:</Text>
                        <Text style={styles.lorem}>Review the app's privacy settings and adjust them according to your preferences. Be mindful of sharing personal information within the app.</Text>

                        <Text style={styles.bible}>14. **Regular Updates**:</Text>
                        <Text style={styles.lorem}>Keep the safety app updated to the latest version to ensure you have access to the latest features and security enhancements.</Text>

                        <Text style={styles.bible}>15. **Alert Authorities**:</Text>
                        <Text style={styles.lorem}>If you feel you are in immediate danger, don't hesitate to use the app's SOS feature to alert local authorities.</Text>

                        <Text style={styles.bible}>16. **Train Your Colleagues**:</Text>
                        <Text style={styles.lorem}>If your workplace encourages the use of safety apps, consider conducting training sessions to educate your colleagues on their use and importance.</Text>

                        <Text style={styles.totor}>Remember that while safety apps can provide an added layer of security, they should complement other safety measures and precautions. Always prioritize your personal safety and trust your instincts when it comes to any potentially risky situation at work.</Text>


                    </View>

                </ScrollView>


            </View>













        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFECD0",
        borderRadius: 30,

    },
    container1: {
        flex: 0.3,
        // backgroundColor:"red",
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    // bible: {
    //     color: "#372329",
    //     fontFamily: "Nunito-SemiBold",
    //     fontSize: fontPixel(30),
    // },
    bible: {
        color: "#FF3974",
        fontFamily: "Nunito-Medium",
        fontSize: fontPixel(22),
    },
    container2: {
        // flex: 2,
        width: widthPixel(374),
        height: heightPixel(689),
        backgroundColor: "#FFFFFF69",
        borderRadius: 10,
        marginHorizontal: heightPixel(18),
        // justifyContent: 'center',
        alignItems: 'center',

    },
    container3: {
        marginTop: heightPixel(39),
        marginBottom: 20
    },
    lorem: {
        color: "#372329",
        fontFamily: "Nunito-Bold",
        fontSize: fontPixel(14),
        maxWidth: widthPixel(353),
        marginHorizontal: 9
    },
    totor: {
        marginTop: heightPixel(20),
        color: "#372329",
        fontFamily: "Nunito-Bold",
        fontSize: fontPixel(14),
        maxWidth: widthPixel(353),
        marginHorizontal: 9
    }


})

export default SafetyAtWork;