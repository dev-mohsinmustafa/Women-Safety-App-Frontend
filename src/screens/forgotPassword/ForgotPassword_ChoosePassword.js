import React, { useEffect, useRef, useState } from 'react'
import {
    StyleSheet, Text, View, Image, ImageBackground, TextInput,
    TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Keyboard, Alert, ActivityIndicator
} from 'react-native'


// 2nd method of code
import { errormessage, bwmessage } from '../../styles/CommonError';

import ratios from '../../styles/ratios';
import GoBack from '../../components/button/GoBack';
import MainButton from '../../components/mainButton/MainButton';





let {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
} = ratios










const ForgotPassword_ChoosePassword = ({ navigation, route }) => {


    const { email } = route.params;
    console.log(email);
    // ab ese compare krenge jo user enter krega code


    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);







    const [errormsg, setErrormsg] = useState(null);
    // ab mene data lena hai to 1 user ki hook bana lety hai




    const [passwordError, setPasswordError] = useState('');

    // Function to validate password length
    const validatePassword = (password) => {
        if (password.length < 6) {
          setPasswordError('Password must be at least 6 characters long');
          return false;
        } else {
          setPasswordError('');
          return true;
        }
      };
    
    


    const sendToBackend = () => {
        // agr ye dono password matched krty to agy barho nai to error 
        if (password == "" || confirmPassword == "") {
            Alert.alert("Plese enter password")
            setErrormsg("Please enter your password");

        } 
              // Password length validation
   else if (!validatePassword(password)) {
    return; // Stop execution if password is invalid
  }
        else if (password != confirmPassword) {
            // setErrormsg("Password does not Matched")
            Alert.alert("Password does not Matched")
        }
   
  
        else {
            setLoading(true);
            fetch("https://women-safety-app-backend-production.up.railway.app/resetPassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, password: password }),
                // ye email hamy pata params se araha hai or password jo uper hook banai us se araha hai 
            })
                .then(res => res.json())
                .then(data => {
                    if (data.message === "Password Changed Successfully") {
                        setErrormsg("Password Code Matched")

                        setLoading(false)
                        Alert.alert(data.message);
                        navigation.navigate("Login")
                    }
                    else {
                        setLoading(false)
                        Alert.alert("Something went wrong !! Try Password Again")
                    }
                })
                .catch(err => {
                    setLoading(false);
                    Alert.alert(err)
                    console.log(err);
                })
        }
    }














    const scrollViewRef = useRef(null);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            _keyboardDidShow
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            _keyboardDidHide
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const _keyboardDidShow = () => {
        scrollViewRef.current.scrollTo({ y: 220, animated: true });
        // setHeightTop(260);
    };

    const _keyboardDidHide = () => {
        // setHeightTop(30);
    };

    return (




        <ScrollView style={styles.container}>

            <GoBack />


            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView style={{ flex: 1 }}
                    ref={scrollViewRef}
                >
                    <Image
                        style={{ borderRadius: 30, position: 'absolute', width: "100%", height: "100%", top: 0, zIndex: -1 }}
                        // resizeMode="contain"
                        source={require("../../assets/images/register.png")}
                    />
                    <View style={styles.textContainer}>
                        <View style={styles.container1}>
                            <Text style={styles.login}>Choose Password</Text>
                        </View>
                        <Text style={styles.bwmessage}>Choose a strong password </Text>

                        {/* yaha me ab error dekha deta hun agr user sara khush ni fill krta to */}
                        {
                            // 1st method
                            // errormsg ? <ErrorHandler /> : null

                            // 2nd method
                            errormsg ? <Text style={errormessage}>{errormsg}</Text> : null

                            // 3rd method
                            // errormsg && <ErrorHandler title={errormsg} />

                        }




                        <View style={{ marginTop: heightPixel(19) }}>
                            <View style={styles.container2}>
                                <Text style={styles.email}>Enter password</Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder='Please enter your password'
                                    placeholderTextColor="#FFECD0"
                                    style={[styles.input, styles.email]}

                                    onChangeText={(text) => setPassword(text)}

                                    secureTextEntry={true}

                                    onPressIn={() => {
                                        setErrormsg(null)
                                        setPasswordError(''); // Clear password validation error

                                    }}


                                />
                            </View>
                            
                              {/* Display password validation error */}
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}

                        </View>


                        <View style={{ marginTop: heightPixel(19) }}>
                            <View style={styles.container2}>
                                <Text style={styles.email}>Confirm password</Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder='Please enter your confirm password'
                                    placeholderTextColor="#FFECD0"
                                    style={[styles.input, styles.email]}

                                    onChangeText={(text) => setConfirmPassword(text)}

                                    secureTextEntry={true}

                                    onPressIn={() => {
                                        setErrormsg(null)
                                        setPasswordError(''); // Clear password validation error

                                    }}


                                />
                            </View>

                            
                              {/* Display password validation error */}
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}

                        </View>


                    </View>
                    {/* </ImageBackground> */}

                    <View style={styles.forgotContainer}>

                    </View>


                    {
                        loading ? <ActivityIndicator size={'large'} color="red" /> :


                            <View style={styles.imageContainer}>
                                {/* <Image
                                    style={{ width: widthPixel(45), height: heightPixel(45) }}
                                    source={require("../../assets/images/google-logo.png")}
                                />
                                <Image
                                    style={{ width: widthPixel(45), height: heightPixel(45) }}
                                    source={require("../../assets/images/fb-logo.png")}
                                />
                                <Image
                                    style={{ width: widthPixel(45), height: heightPixel(45) }}
                                    source={require("../../assets/images/apple-logo.png")}
                                /> */}
                            </View>

                    }



                    <View style={styles.registerButtonContainer}>
                        <Text style={styles.newHere}>New Here?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Register")}
                        >
                            <Text style={styles.register}> Register</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{marginBottom:27}} onPress={() => sendToBackend()}>
                        <MainButton title="Next" />
                    </TouchableOpacity>

                
                </ScrollView>

            </KeyboardAvoidingView>
        </ScrollView>





    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "red",
        backgroundColor: "#FF3974",
        borderRadius: 30,
        width: "100%",
        height: "100%",
    },
    textContainer: {
        // top: "65%",
        // position: 'absolute',

    },
    container1: {
        // flex: 0.2,
        // backgroundColor: "green",
        // width:widthPixel(338),
        // height:heightPixel(67),
        left: 21,
        // bottom: 20,
        marginTop: heightPixel(396),

    },
    login: {
        color: "#FFECD0",
        fontFamily: "Nunito-ExtraBold",
        fontSize: fontPixel(36),
    },

    bwmessage: {
        color: "red",
        backgroundColor: "white",
        marginHorizontal: 22,
        fontSize: 15,
        textAlign: "center",
        // padding: 5,
        borderRadius: 5,
    },
    email: {
        color: "#FFECD0",
        fontFamily: "Nunito-Regular",
        fontSize: fontPixel(14),
        // backgroundColor: "green",

    },
    inputContainer: {
        marginHorizontal: widthPixel(25),
        height: widthPixel(40),
        width: widthPixel(309)
        // width:"75%"
    },
    input: {
        borderWidth: 1,
        borderColor: "#FFECD0",
        borderRadius: 10,
        // paddingHorizontal: widthPixel(10),
        padding:widthPixel(10)

    },
    container2: {
        // flex: 1,
        // backgroundColor:"yellow",
        left: 25,
        marginBottom: heightPixel(2)

    },
    forgotContainer: {
        // backgroundColor: "red",
        marginRight: widthPixel(75),
        alignItems: 'flex-end',
        // marginLeft: widthPixel(217),
        marginTop: heightPixel(13)
    },
    forgotButton: {
        color: "#FFECD0",
        fontFamily: "Nunito-Bold",
        fontSize: fontPixel(14),
        // backgroundColor: "blue",
    },
    imageContainer: {
        flexDirection: 'row',
        marginLeft: widthPixel(25)
    },
    registerButtonContainer: {
        flexDirection: 'row',
        marginTop: heightPixel(74),
        marginLeft: widthPixel(34)
    },
    newHere: {
        color: "#FFECD0",
        fontFamily: "Nunito-Regular",
        fontSize: fontPixel(16),
        // backgroundColor: "green",
    },
    register: {
        color: "#FFECD0",
        fontFamily: "Nunito-Bold",
        fontSize: fontPixel(16),
        // backgroundColor: "gray",
    },

    errorText:{
        marginLeft: 30,
        width:"70%",
        marginTop: 5,
        color: "red",
        backgroundColor: "white",
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 15
    }
   
})




export default ForgotPassword_ChoosePassword;
