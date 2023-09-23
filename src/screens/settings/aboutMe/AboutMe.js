import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import ratios from '../../../styles/ratios';
import Header from '../../../components/header/Header';

let {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
} = ratios


const AboutMe = () => {
    return (
        <View style={styles.container}>


            <View style={{ flex: 1, marginTop: 20 }}>

                <Header title="About Me"
                    image1={require("../../../assets/images/arrow-left.png")}
                    image2={require("../../../assets/images/bible.png")}


                />
            </View>




            <View style={[styles.container2]}>
                {/* <View style={{ alignItems: 'center' }}> */}
                <View>
                    <Image
                        source={require("../../../assets/images/mohsin.png")}
                        style={{ width: 300, height: 300, borderRadius: 300, marginTop: 10 }}
                        resizeMode='contain'
                    />
                </View>

                <ScrollView>
                    <View style={styles.container3}>
                        <Text style={styles.lorem}>
                            I'm Mohsin Mustafa
                        </Text>

                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.bible}>
                            Software Developer
                        </Text>

                    </View>

                    <ScrollView style={{ marginBottom: 20, flex: 1 }}>
                        <Text style={styles.totor}>
                            Software development is the systematic process of designing, creating, testing, and maintaining computer software. It encompasses a wide range of activities that begin with understanding the requirements and needs of users or businesses and culminate in delivering a fully functional and reliable software product. Software development involves various stages, including analysis, design, coding, testing, and deployment. Developers use programming languages, frameworks, and tools to write code and develop applications that can run on different platforms and devices. The field of software development is dynamic and continuously evolving, with new methodologies and technologies emerging to improve the efficiency and effectiveness of the development process. As software plays an increasingly critical role in various industries, including finance, healthcare, education, and entertainment, skilled software developers are in high demand to create innovative and cutting-edge solutions that enhance productivity and improve people's lives.
                        </Text>
                        <View style={{ alignItems: 'center' }}>
                        <Text style={styles.bible}>
                            About Me
                        </Text>

                    </View>

                        <Text style={styles.me}>
                            I am a highly skilled Software Engineer, holding a degree in the field, and I am deeply passionate about programming. With my strong expertise as a Full Stack Software Developer, I am capable of delivering exceptional solutions. Here are some key aspects of my professional profile:

                            Education:
                            - I possess a solid educational background, having earned a degree in Software Engineering. This foundation has equipped me with a comprehensive understanding of software development principles and practices.

                            Technical Proficiency:
                            - HTML5, CSS3, and JavaScript ES6 are my primary languages, which I have mastered to create robust and dynamic web applications.
                            - I am well-versed in popular CSS frameworks such as Bootstrap 5, Materialize CSS, and Tailwind CSS, enabling me to develop visually appealing and responsive user interfaces.
                            - With extensive experience in ReactJS/Redux, and React Native, I excel in building scalable and efficient applications across web and mobile platforms.
                            - Leveraging the power of Google Firebase, I ensure seamless integration of authentication, real-time database updates, and cloud messaging in my projects.
                            - MongoDB serves as my preferred choice for database management, while NodeJS empowers me to develop efficient server-side applications.

                            Passion for Coding:
                            - I am truly inspired by coding and always strive for excellence in every project I undertake. My dedication and enthusiasm drive me to continuously improve my skills and stay updated with the latest industry trends and advancements.
                            - Problem-solving is a core aspect of my programming approach, and I thoroughly enjoy tackling complex challenges to create innovative solutions.

                            Helping Others and Collaboration:
                            - I believe in the value of collaboration and enjoy sharing my knowledge and expertise with others. I actively engage in helping fellow developers and contributing to the growth of the programming community.

                            Portfolio:
                            - You can find my professional portfolio at www.devmohsin.surge.sh. It showcases a collection of my notable projects, highlighting my technical capabilities and achievements.

                            Portfolio Web Page:
                            - Explore my detailed portfolio web page at www.mohsinmustafa.surge.sh, where you will find comprehensive information about my skills, projects, and professional experience.

                            With my strong technical skills, passion for coding, problem-solving abilities, and commitment to collaboration, I am confident in my ability to excel as a MERN Stack Developer and make a positive impact in the field of software development.                            </Text>
                    </ScrollView>


                </ScrollView>
                {/* </View> */}












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
    bible: {
        color: "#372329",
        fontFamily: "Nunito-SemiBold",
        fontSize: fontPixel(30),
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
        marginBottom: heightPixel(39),

    },
    container3: {
        marginTop: heightPixel(39),
        alignItems: 'center'
    },
    lorem: {
        color: "#FF3974",
        fontFamily: "Nunito-Bold",
        fontSize: fontPixel(28),
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
    },
    me: {
        color: "#FF3974",
        fontFamily: "Nunito-Bold",
        fontSize: fontPixel(16),
        marginHorizontal: 9
    },


})

export default AboutMe;