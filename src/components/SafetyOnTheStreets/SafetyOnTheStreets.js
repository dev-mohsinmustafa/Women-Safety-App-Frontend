import React from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'

import ratios from '../../styles/ratios';
import Header from '../header/Header';

let {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
} = ratios


const SafetyOnTheStreets = () => {
    return (
        <View style={styles.container}>



            <Header title="Safety on the Streets" marginLeft={31} marginLeft1={27}
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
                        <Text style={styles.bible}>1. **Stay Aware**:</Text>

                        <Text style={styles.lorem}>
                        Be conscious of your surroundings at all times. Avoid distractions like texting or wearing headphones, especially in isolated areas.

                        </Text>

                        <Text style={styles.bible}>2. **Plan Your Route**:</Text>
                        <Text style={styles.lorem}>
                        Whenever possible, choose well-lit and busy streets, even if it means taking a longer route. Avoid shortcuts through alleys or secluded areas.

</Text>

                        <Text style={styles.bible}>3. **Share Your Location**:</Text>

                        <Text style={styles.lorem}>
                        Inform a friend or family member about your whereabouts and your estimated time of arrival when you're out alone.

</Text>                            


                        <Text style={styles.bible}>4. **Travel in Groups**:</Text>
                        <Text style={styles.lorem}>

                        Whenever feasible, walk with friends or in groups, as there's safety in numbers.
</Text>

                        <Text style={styles.bible}>5. **Trust Your Instincts**:</Text>
                        <Text style={styles.lorem}>
                        If a situation or person makes you uncomfortable, trust your intuition and take action accordingly. Cross the street, enter a store, or seek help from passersby.

</Text>

                        <Text style={styles.bible}>6. **Carry a Personal Alarm or Safety App**:</Text>
                        <Text style={styles.lorem}>
                        Consider carrying a personal alarm or using a safety app that can quickly alert authorities or your emergency contacts in case of danger.

</Text>

                        <Text style={styles.bible}>7. **Self-Defense Training**:</Text>
                        <Text style={styles.lorem}>

                        Learning basic self-defense techniques can boost your confidence and provide you with valuable skills to protect yourself if necessary.

</Text>

                        <Text style={styles.bible}>8. **Avoid Late-Night Travel**:</Text>
                        <Text style={styles.lorem}> 
                        If possible, avoid walking alone late at night, especially in areas with low visibility or limited foot traffic.

</Text>

                        <Text style={styles.bible}>9. **Keep Valuables Hidden**:</Text>
                        <Text style={styles.lorem}>
                        Conceal expensive items like jewelry, phones, and electronics to avoid attracting unwanted attention.

</Text>

                        <Text style={styles.bible}>10. **Be Cautious with Strangers**:</Text>
                        <Text style={styles.lorem}>

                        Be cautious when interacting with strangers, especially if they approach you unexpectedly. Maintain a safe distance and assertively decline conversations or assistance if you feel uncomfortable.
</Text>

                        <Text style={styles.bible}>11. **Use Well-Lit Areas**:</Text>
                        <Text style={styles.lorem}> 
                        Stick to well-lit streets, especially during the evening and nighttime. Avoid shortcuts through dark or isolated areas.

                        </Text>

                        <Text style={styles.bible}>12. **Know Emergency Numbers**:</Text>
                        <Text style={styles.lorem}>
                        Memorize or save emergency numbers, including local law enforcement and medical services, in your phone.

</Text>
                        <Text style={styles.bible}>13. **Stay Vocal and Assertive**:</Text>
                        <Text style={styles.lorem}>
                        If you feel threatened or harassed, don't hesitate to raise your voice, yell for help, or draw attention to the situation.

</Text>
                        <Text style={styles.bible}>14. **Access Public Transportation Safely**:</Text>
                        <Text style={styles.lorem}>
                        Wait for public transport in well-lit areas and at designated stops. Sit near the driver or conductor if possible.


</Text>

                        <Text style={styles.bible}>15. **Share Rides Safely**:</Text>
                        <Text style={styles.lorem}>
                        When using ride-sharing services, verify the driver's identity and share your ride details with a friend or family member.


</Text>



                        <Text style={styles.bible}>16. **Advocate for Safe Spaces**:</Text>
                        <Text style={styles.lorem}>
                        Get involved in local initiatives and organizations that work towards creating safer public spaces for everyone, including women.

</Text>                        
                        
                        <Text style={styles.bible}>17. **NOTE**:</Text>
                        <Text style={styles.lorem}>
                        Remember that personal safety is a top priority, and these precautions can help reduce risks. Additionally, it's essential to advocate for broader societal changes that promote gender equality and address issues related to violence against women. Everyone has a role to play in creating safer streets and communities.
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
        marginBottom:20
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

export default SafetyOnTheStreets;