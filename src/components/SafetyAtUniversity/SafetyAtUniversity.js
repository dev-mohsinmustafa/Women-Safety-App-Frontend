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


const SafetyAtUniversity = () => {
    return (
        <View style={styles.container}>



            <Header title="Safety at University" marginLeft={31} marginLeft1={27}
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
                        <Text style={styles.bible}>1. **Campus Security Awareness**:</Text>

                        <Text style={styles.lorem}>
                            Familiarize yourself with campus security measures, including emergency phone locations, safe zones, and the campus security office's contact information.

                        </Text>

                        <Text style={styles.bible}>2. **Campus Escort Services**:</Text>
                        <Text style={styles.lorem}>
                            Many universities offer campus escort services, where security personnel or trained volunteers can accompany students to their destination, especially during late hours.

                        </Text>




                        <Text style={styles.bible}>3. **Well-Lit Paths and Areas**:</Text>

                        <Text style={styles.lorem}>
                            Use well-lit pathways and common areas, and avoid shortcuts through dark or isolated spots, especially at night.
                        </Text>



                        <Text style={styles.bible}>4. **Emergency Phones and Apps**:</Text>
                        <Text style={styles.lorem}>

                            Know the locations of emergency phones on campus. Additionally, consider downloading safety apps that allow you to quickly alert campus security or your emergency contacts if needed.
                        </Text>

                        <Text style={styles.bible}>5. **Report Incidents**:</Text>
                        <Text style={styles.lorem}>
                            Encourage a culture of reporting. If you experience harassment, assault, or any safety concerns, report them to campus authorities. Many universities have dedicated offices for this purpose.
                        </Text>


                        <Text style={styles.bible}>6. **Travel in Groups**:</Text>
                        <Text style={styles.lorem}>
                            Whenever possible, walk or travel with friends or classmates, particularly during late hours or in less populated areas.
                        </Text>



                        <Text style={styles.bible}>7. **Self-Defense Classes**:</Text>
                        <Text style={styles.lorem}>
                            Consider taking self-defense classes offered by the university or in the local community. These can provide valuable skills and boost confidence.
                        </Text>


                        <Text style={styles.bible}>8. **Lock Doors and Windows**:</Text>
                        <Text style={styles.lorem}>
                            Ensure your dorm room or apartment doors and windows are locked at all times, even when you're inside.
                        </Text>



                        <Text style={styles.bible}>9. **Safe Party Practices**:</Text>
                        <Text style={styles.lorem}>

                            If attending parties or social events, go with friends, and always watch your drink. Avoid excessive alcohol consumption and have a plan for getting home safely.

                        </Text>


                        <Text style={styles.bible}>10. **Trust Your Intuition**:</Text>
                        <Text style={styles.lorem}>
                            If something or someone makes you uncomfortable, trust your instincts and remove yourself from the situation. Seek help if necessary.

                        </Text>


                        <Text style={styles.bible}>11. **Emergency Contacts**:</Text>
                        <Text style={styles.lorem}>

                            Program important emergency contacts, including campus security and local law enforcement, into your phone.
                        </Text>

                        <Text style={styles.bible}>12. **Cybersecurity Awareness**:</Text>
                        <Text style={styles.lorem}>
                            Be mindful of cybersecurity. Protect your personal information and report any online harassment or cyberbullying.

                        </Text>


                        <Text style={styles.bible}>13. **Know Title IX Rights**:</Text>
                        <Text style={styles.lorem}>
                            Familiarize yourself with Title IX policies and procedures related to gender discrimination, harassment, and assault on campus. Understand your rights and how to seek support.

                        </Text>


                        <Text style={styles.bible}>14. **Supportive Communities**:</Text>
                        <Text style={styles.lorem}>
                            Connect with women's groups or support networks on campus. These communities can provide resources and a safe space for sharing experiences.

                        </Text>

                        <Text style={styles.bible}>15. **Advocate for Change**:</Text>
                        <Text style={styles.lorem}>
                            Get involved in student organizations or campaigns that work to improve campus safety and address gender-based violence. Advocate for policy changes and awareness campaigns.
                        </Text>


                        <Text style={styles.bible}>16. **Transportation Safety**:</Text>
                        <Text style={styles.lorem}>

                            If using university transportation services, ensure they are safe and reliable. When using public transportation, be aware of schedules and routes.
                        </Text>



                        <Text style={styles.bible}>17. **Mental Health Support**:</Text>
                        <Text style={styles.lorem}>
                            Universities often provide counseling and mental health services. Seek help if you experience emotional distress or trauma related to safety concerns.
                        </Text>

                        <Text style={styles.bible}>18. **NOTE**:</Text>
                        <Text style={styles.lorem}>
                            Creating a safer university environment for women requires collaboration between students, faculty, and administrators. It's important to raise awareness, advocate for change, and ensure that universities are proactive in addressing safety concerns and providing support to those who need it.




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

export default SafetyAtUniversity;