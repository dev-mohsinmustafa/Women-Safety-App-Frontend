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


const SafetyAtHome = () => {
    return (
        <View style={styles.container}>



            <Header title="Safety at Home" marginLeft={31} marginLeft1={27}
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
                        <Text style={styles.bible}>.1 **Home Security Measures**:</Text>
                        <Text style={styles.lorem}>

                            Install robust locks and deadbolts on all entry doors and windows. Consider a security system with alarms and surveillance cameras.
                        </Text>



                        <Text style={styles.bible}>.2 **Emergency Communication**:</Text>
                        <Text style={styles.lorem}>

                            Keep a charged mobile phone or landline phone in your bedroom to call for help in case of emergencies.
                        </Text>


                        <Text style={styles.bible}>.3 **Create a Safe Environment**:</Text>
                        <Text style={styles.lorem}>

                            Ensure that all areas of your home, including hallways and staircases, are well-lit. Consider motion-activated lights for added security.
                        </Text>



                        <Text style={styles.bible}>.4 **Keep Doors and Windows Secure**:</Text>
                        <Text style={styles.lorem}>
                            Lock all doors and windows when you're at home, and be cautious about who you allow inside. Use peepholes or doorbell cameras to screen visitors.

                        </Text>


                        <Text style={styles.bible}>.5 **Safe Room or Space**:</Text>
                        <Text style={styles.lorem}>
                            Designate a room or area in your home as a safe space where you can retreat if you feel threatened. Ensure it has a lock, phone, and supplies.

                        </Text>


                        <Text style={styles.bible}>.6 **Home Alone Safety**:</Text>
                        <Text style={styles.lorem}>
                            If you live alone, be cautious about sharing your living arrangements with strangers. Don't disclose your address online or to people you don't trust.
                        </Text>


                        <Text style={styles.bible}>.7 **Roommate Safety**:</Text>
                        <Text style={styles.lorem}>
                            If you have roommates, establish clear boundaries and communication about who is allowed in the house or apartment.
                        </Text>



                        <Text style={styles.bible}>.8 **Fire Safety**:</Text>


                        <Text style={styles.lorem}>
                            Install smoke detectors and fire extinguishers in your home, and conduct regular fire drills to ensure everyone knows how to exit safely.

                        </Text>


                        <Text style={styles.bible}>.9 **Domestic Violence Support**:</Text>
                        <Text style={styles.lorem}>
                            If you are experiencing domestic violence, seek help immediately. Reach out to domestic violence hotlines or shelters for assistance.

                        </Text>

                        <Text style={styles.bible}>.10 **Online Privacy**:</Text>
                        <Text style={styles.lorem}>
                            Be cautious about sharing your home address or location online, especially on social media platforms.
                        </Text>


                        <Text style={styles.bible}>.11 **Personal Defense**:</Text>
                        <Text style={styles.lorem}>
                            Consider taking self-defense classes to build confidence and learn techniques for personal protection.
                        </Text>

                        <Text style={styles.bible}>.12 **Safety Plans**:</Text>
                        <Text style={styles.lorem}>

                            Develop a safety plan that includes contact information for local authorities, friends, and family members who can provide support in case of emergencies.
                        </Text>

                        <Text style={styles.bible}>.13 **Trust Your Instincts**:</Text>
                        <Text style={styles.lorem}>
                            If something feels off or you sense danger, trust your instincts and take necessary precautions.
                        </Text>


                        <Text style={styles.bible}>.14 **Legal Protections**:</Text>
                        <Text style={styles.lorem}>
                            Familiarize yourself with local laws and regulations related to domestic violence, harassment, and restraining orders. Seek legal protection if needed.
                        </Text>
                        <Text style={styles.bible}>.15 **Home Security**:</Text>
                        <Text style={styles.lorem}>
                            In addition to the safety app, invest in home security measures such as locks, alarms, and surveillance cameras to enhance your safety at home.</Text>


                        <Text style={styles.bible}>.16 **Mental Health Support**:</Text>
                        <Text style={styles.lorem}>
                            If you're dealing with emotional or psychological abuse, consider seeking therapy or counseling to help cope with the effects.
                        </Text>



                        <Text style={styles.bible}>.17 **Financial Independence**:</Text>
                        <Text style={styles.lorem}>
                            Whenever possible, maintain financial independence to ensure you have the resources to leave an unsafe living situation if necessary.
                        </Text>


                        <Text style={styles.bible}>.18 **Community and Support Networks**:</Text>
                        <Text style={styles.lorem}>
                            Build a strong support network of friends, family, and neighbors who are aware of your living situation and can provide assistance if needed.

                        </Text>

                        <Text style={styles.bible}>.19 **Educate Children**:</Text>
                        <Text style={styles.lorem}>
                            If you have children, educate them about home safety, including how to call for help and what to do in emergencies.
                        </Text>

                        <Text style={styles.bible}>.20 **NOTE**:</Text>
                        <Text style={styles.lorem}>
                            Remember that your safety and well-being are paramount. If you are in an unsafe living situation, do not hesitate to seek help and support from local authorities, organizations, or shelters that specialize in assisting individuals facing domestic violence or unsafe living conditions.




                        </Text>

                        {/* <Text style={styles.lorem}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Quis vel eros donec ac odio tempor orci dapibus. Purus sit amet luctus venenatis lectus magna fringilla. Vitae et leo duis ut diam quam nulla porttitor massa. Convallis posuere morbi leo urna molestie at elementum. Nulla aliquet enim tortor at auctor urna. Laoreet id donec ultrices tincidunt. Blandit massa enim nec dui nunc.
                        </Text> */}

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

export default SafetyAtHome;