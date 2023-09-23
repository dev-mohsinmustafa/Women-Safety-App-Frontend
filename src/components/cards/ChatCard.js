import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import nopic from "../../assets/images/profile.png"

const ChatCard = ({ chat,navigation }) => {
    // console.log(chat);

    // new
    console.log(chat.fuserid);

    let [fuserdata, setFuserdata] = React.useState(null);
    useEffect(() => {
        
        fetch('https://women-safety-app-backend-production.up.railway.app/getuserbyid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: chat.fuserid
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFuserdata(data)
            })
            .catch(err => {
                alert('Something went wrong')
                setFuserdata(null)
            })
    }, [])
    //

    return (
        <View style={styles.chartCard}>
            {/* <Image
                source={{ uri: chat.profileimage }}
                style={styles.image}
            /> */}

            {/* new */}
            {
                fuserdata?.user?.profilepic ?
                    <Image source={{ uri: fuserdata?.user?.profilepic }} style={styles.image} />
                    :
                    <Image source={nopic} style={styles.image} />
            }

            {/*  */}
            <View style={styles.container1}>
                {/* <Text style={styles.username}>{chat.username}</Text> */}
                {/* <Text style={styles.lastmessage}>{chat.lastmessage}</Text> */}

                {/* new */}

                <Text style={styles.username} onPress={

                    () => {
                        navigation.navigate('MessagePage', {
                            fuseremail: fuserdata.user.email,
                            fuserid: fuserdata.user._id,
                        })
                    }

                }>{fuserdata?.user?.username}</Text>
                <Text style={styles.lastmessage}>{chat.lastmessage}</Text>
                {/*  */}
            </View>

        </View>
    )
}

export default ChatCard;

const styles = StyleSheet.create({
    chartCard: {
        flex: 1,
        backgroundColor: "#FF3974",
        marginVertical: 10,
        // marginTop: 10,
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    container1: {
        marginLeft: 20,

    },
    username: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    lastmessage: {
        color: '#372329',
        fontSize: 19,
    }
})