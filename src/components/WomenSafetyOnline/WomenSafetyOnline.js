import React from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'

import ratios from '../../styles/ratios';
import Header from '../header/Header';

let {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
} = ratios


const WomenSafetyOnline = () => {
    return (
        <View style={styles.container}>



            <Header title="Women Safety Online" marginLeft={31} marginLeft1={27}
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
                        <Text style={styles.bible}>1. **Protect Personal Information**:</Text>

                        <Text style={styles.lorem}>
                        Be cautious about sharing personal information such as your full name, address, phone number, and financial details online. Keep these private.
                        </Text>

                        <Text style={styles.bible}>2. **Strong Passwords**:</Text>
                        <Text style={styles.lorem}>
                        Use strong, unique passwords for your online accounts. A good password includes a mix of letters, numbers, and special characters.
                        </Text>


                        <Text style={styles.bible}>3. **Two-Factor Authentication (2FA)**:</Text>

                        <Text style={styles.lorem}>
                        Enable 2FA wherever possible. This adds an extra layer of security to your accounts by requiring a second verification step.

                            </Text>


                        <Text style={styles.bible}>4. **Social Media Privacy Settings**:</Text>
                        <Text style={styles.lorem}>Review and adjust your privacy settings on social media platforms to control who can see your posts and information.
</Text>

                        <Text style={styles.bible}>5. **Be Wary of Phishing**:</Text>
                        <Text style={styles.lorem}>
                        Be cautious of unsolicited emails or messages asking for personal information. Verify the source before responding or clicking on any links.

</Text>
                        <Text style={styles.bible}>6. **Safe Online Shopping**:</Text>
                        <Text style={styles.lorem}>
                        Only shop on secure websites with "https://" in the URL. Avoid making purchases on unfamiliar or suspicious websites.

                            </Text>

                        <Text style={styles.bible}>7. **Cyberbullying Awareness**:</Text>
                        <Text style={styles.lorem}>
                        If you experience cyberbullying, don't engage with the bully. Block and report them, and seek support if needed.

                            </Text>
                            


                        <Text style={styles.bible}>8. **Online Dating Safety**:</Text>
                        <Text style={styles.lorem}>
                        Be cautious when using dating apps. Meet in public places for the first few dates, inform a friend or family member about your plans, and trust your instincts.

                            </Text>

                            


                        <Text style={styles.bible}>9. **Online Gaming Safety**:</Text>
                        <Text style={styles.lorem}>
                        Use gaming platforms' privacy settings and avoid sharing personal information while gaming with strangers.
</Text>



                        <Text style={styles.bible}>10. **Secure Webcam and Microphone**:</Text>
                        <Text style={styles.lorem}>
                        Cover your webcam when not in use to prevent unauthorized access, and be mindful of your microphone settings during online meetings or calls.
</Text>

                        <Text style={styles.bible}>11. **Educate Yourself**:</Text>
                        <Text style={styles.lorem}> 
                        Stay informed about common online threats and scams. Knowledge is your best defense.


                        </Text>


                        <Text style={styles.bible}>12. **Trust Your Instincts**:</Text>
                        <Text style={styles.lorem}>

                        If something feels off or too good to be true online, it probably is. Trust your gut and err on the side of caution.

</Text>


                        <Text style={styles.bible}>13. **Online Harassment Reporting**:</Text>
                        <Text style={styles.lorem}>

                        If you face online harassment or threats, report them to the platform or social media site and consider involving law enforcement if necessary.

</Text>

                        <Text style={styles.bible}>14. **Stay Informed**:</Text>
                        <Text style={styles.lorem}>
                        Keep up to date with online safety best practices and be aware of evolving threats and trends.
</Text>

                        <Text style={styles.bible}>15. **Educate Others**:</Text>
                        <Text style={styles.lorem}>
                        Share these tips with friends and family to help create a safer online environment for everyone.
</Text>
                            

                        <Text style={styles.bible}>16. **NOTE**:</Text>
                        <Text style={styles.lorem}>
                        Remember that online safety is an ongoing process, and staying vigilant is key to protecting yourself in the digital world.

</Text>





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
        borderRadius: 30
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

export default WomenSafetyOnline;