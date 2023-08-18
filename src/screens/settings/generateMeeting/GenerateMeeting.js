import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import Button from '../../../components/button/Button';
import { errormessage } from '../../../styles/CommonError';

const GenerateMeeting = ({ navigation }) => {


    const [randomId, setRandomId] = useState("")
    const [username, setUsername] = useState("")
    const [errormsg, setErrormsg] = useState(null);


    const generateRandomId = () => {
        return `${Math.floor(Math.random() * 10000)} - ${Math.floor(Math.random() * 10000)} - ${Math.floor(Math.random() * 10000)}`
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Generate Meeting</Text>
            <View style={{ width: "90%" }}>
                {
                    errormsg ? <Text style={[errormessage, { marginBottom: 20 }]}>{errormsg}</Text> : null
                }
                <TextInput
                    placeholder='Enter Your Name' 
                    placeholderTextColor={"gray"}
                    // default value set ki state ki 
                    value={username}
                    // onchanage
                    onChangeText={(text) => setUsername(text)}
                    onPressIn={() => setErrormsg(null)}

                    style={{ color: "#372329", borderWidth: 1, borderColor: "#FF3974", marginBottom: 20 }}
                />
                <TextInput
                    placeholder='Enter Meeting Id'
                    placeholderTextColor={"gray"}
  
                    // default value set ki state ki 
                    value={randomId}
                    // onchanage
                    onChangeText={(text) => setRandomId(text)}
                    onPressIn={() => setErrormsg(null)}

                    style={{color: "#372329",borderWidth: 1, borderColor: "#FF3974", marginBottom: 20 }}
                />

            </View>

            <TouchableOpacity
                onPress={() => {
                    // agr username me space allow ne krwani to
                    if (randomId.length > 5 && username.length > 5 && username.indexOf(" ") == -1) {
                        // ab agr ye link ke zariye kise user ko join krwana hai to parameter pass kr den navigation me
                        navigation.navigate("VideoCall", { callId: randomId, username: username })
                        // yaha jo be randomId ham generate kr rahy hai wo randomId waly state me mile ge
                        // aor ye ab dosre screen me mile ge parameter me waha dekhe
                    } else {
                        Alert.alert("Enter Valid Meeting Id or Valid Username")
                        setErrormsg("Please Enter Valid Meeing Id or Valid Username")
                    } 
                }}
            >

                <Button title="Join Meeting"
                // Calling Screen/ Video Call Screen

                />
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 30, alignItems: 'center' }}
                onPress={() => {
                    // es ka output 1 variable me store kr lya
                    const id = generateRandomId();
                    // console.log(id);
                    // ab is number ko input wali field me paste krwana hai to useState se

                    // ab state set krdi
                    setRandomId(id);
                }}>
                <Text style={{ color: "blue" }}>Generate Meeting Id</Text>
            </TouchableOpacity>

        </View>
    )
}

export default GenerateMeeting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFECD0",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    text: {
        color: "#FF3974",
        fontSize: 24,
        fontFamily: "Nunito-Bold",
        marginBottom: 20

    }
})