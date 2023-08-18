import React, { useEffect, useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


import AwesomeIcon from 'react-native-vector-icons/Ionicons';
import nopic from "../../assets/images/mohsin.png";

import AsyncStorage from '@react-native-async-storage/async-storage';



import ratios from '../../styles/ratios';
let {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
} = ratios
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { io } from 'socket.io-client';
// es ke bad sirf path bta dena hai system ka ip or backend socket.io server port
const socket = io("http://192.168.0.105:8091")
// es se connect hojaye ga socket auto es ko call ne krna kahi be

//  ab apka connection ban gya to ab apko 1 room join krwana prega to loaddata me chle jaye 






const MessagePage = ({ navigation, route }) => {

    // friend ka email aye ga
    // chat ke leye hame ne fuserid jo oyheruserprofile me bhej the wo get kr le
    const { fuseremail, fuserid } = route.params;









    // ab khud ka email be nikalna hai to hamne ne pehle wo async storage me save kiya hai waha se nikal lenge 
    // yani jo id email se ap login ho us ka data hmne profile page me storage krwaya async storage me
    // to us se ham khud ka email nikal lenge

    // hook bana len js se khud ka or dost ka data store hojaye
    const [ouruserdata, setOuruserdata] = useState(null);
    // friend userdata
    const [fuserdata, setFuserdata] = useState(null);
    // const [loading, setLoading] = useState(false);


    // FOR MESSAGES
    const [roomid, setRoomid] = useState("");
    const [chat, setChat] = useState([""]);
    // pehle ye chat blank rhege kyo ke koi be chat nai howe hoge or bad me nikalenge ke previous kya chat
    // hui the usko chat me save krenge or usko bad new chat ko be is me add krty jaye ge 


// Mistake set
const [userid, setUserid] = React.useState(null);




    // jab be socket me koi hal chal ho kush be changing ho to yaha pe useEffect update ho jaye 
    // mtlb jab be kya hoga msg kya hoga mtlb msg send kiya hoga ya phr connection banaya hoga ya join kiya
    // hoga mtlb kuch be kiya hoga to ye useEffect activate hojaye ga 
    // ab es me special case kn sa hone wala hai receive message to jab me receive msg hoga to is ke ander
    //ka kam chalo hoga 
    useEffect(() => {
        // to ham bolenge ke receive msg ka fire howa hai udr se hamne emit krwa deya ab idr se ham fire krwa
        // rahe hain to yaha pe emit or on ka use smjhe 
        // to jab be hamy signal bhejna hoty hai  to emit ka use krty hai
        // to jab be hamy kam krwana hota hai onspot to ham on ka use krty hai

        // ab mene sirf itna bola ke koi be changing ho to socket me to tb ye fire hoga us me be special case 
        // receive message wala agr backend se araha hai kuch response tb ye fire hojaye ga socket 

        socket.on("receive_message", (data) => {
            // to ab smjhna ke backend se response araha hai kuch ke bhai samny waly ko msg receive be to hona
            // chahaye na to us ke leye mene kiya hai to ye dono ke leye kam krega sender or receiver ke leye
            // or data be jo bhej rahy hai wo be print krwa de
            console.log("received message is - ", data);


            // neche loadMessages(roomid) lagane ke bad
            //ese he bhai man lo ham receiver hai tb kya ho tb ye uper wala receive_message ye call hoga
            // or ab jese he msg receive howa to tb ap ki list update hojaye to us ke leye loadMessages
            // ham sary message 1 bar refresh kr rahy hain us ke lye hmne loadMessages call kia bs itna 
            // kam kya etna krne ke bad ap esko send krke dekh lo
            loadMessages(roomid);
        })


        // ab hamary pass sary messages to arhay hai ab chat ko hamne kis order me dekhana hai 
        // jis ne bheja hai us ka hamesha right side me aye 
        // mtlb agr me message krta hun to mera hamesha right me dekhe or dost ka left me to us keleye 
        // thora frontend bana le
    }, [socket])





    // kese aye ga to useEffect laga de
    useEffect(() => {
        loaddata();

        // console.log(fuseremail);
    }, [])






    // LOGIC OF FUNCTION 

    // man lo 2 roomid hai 1234 or 5678 to jo be bari roomid hai that is 5678 ye pehle aye ge or is ke akhr me 
    // jur jaye ge 1234 es he ham combination bana ke database me save krwa rahy thy na kal to bs wohi 
    // logic lagane waly hain

    // sortroomid 1 function banaaya or es ke 2 id den or return kr do jo be bari hai wo pehle laga do
    const sortroomid = (id1, id2) => {
        if (id1 > id2) {
            // agr id1 ya id2 bari hai to wo pehle laga do or sum dedo
            return id1 + id2
        }
        else {
            // agr id2 ya id1 bari hai to wo pehle laga do or sum dedo
            return id2 + id1
        }
    }



    // 
















    const loaddata = async () => {
        // es me 2 chez lani hain 1 khud ka data or 2 dost ka
        // in ko le ke ane ke leye AsyncStorage use krenege 

        // pehle hamne bola ke mera khud ka data leke ao
        AsyncStorage.getItem("user")
            // jese he data aye ga to
            // data ko agy pass kr deya value name ke variable ke ander
            .then(async (value) => {
                fetch("https://women-safety-app-backend-production.up.railway.app/userdata", {
                    // ab khud ka data nikal raha hun is leye mene userdata likha
                    // me ab check kronga ke mere pass token he be ke nai to us ke leye ne userdata wala call kr raha hun api

                    // jab ham friend ka call krenge to otheruserdata route call krnege
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        // jab tk APKE token nai ho to kise ke be chat na dekh pao
                        "Authorization": "Bearer " + JSON.parse(value).token,
                    },
                    body: JSON.stringify({ email: JSON.parse(value).user.email })
                    // ye email kaha se aye ga AsyncStorage se kyo ke hamne esko waha save krwaya howa hai
                })
                    .then(res => res.json())
                    // yaha hamari khud ki details ayege jo logged in us bndy ki yani me ho to meri
                    .then(async data => {
                        // to yaha ham data ko store krwa lenge
                        if (data.message === "User found") {
                            // yaha agr apko apki details mil gye hai to ab samne wale ki be find kro
                            // us ke otheruserdata wala route banaya hai  
                            setOuruserdata(data.user);
                            console.log("our user data", data.user.fullName);
                            setUserid(data.user._id)



                            // 
                            // ab mera data agya hai or mene dost ka be nikalna hai
                            //  copy route in otheruserdata
                            fetch("https://women-safety-app-backend-production.up.railway.app/otheruserdata", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ email: fuseremail })
                            })
                                .then(res => res.json())
                                .then(async data1 => {
                                    if (data1.message == "User Found") {
                                        // console.log("f user data", data1.user.fullName);
                                        setFuserdata(data1.user);


                                        // socket data 

                                        // ab dost ka data a to raha hai to otheruserroute ko call na kro simply ab bol skty ho
                                        // uper me function banane wala hun
                                        let temproomid = await sortroomid(fuserid, data.user._id); // data.user._id mere khud ki
                                        // data.user._id, fuserdata es ka mtlb mene bola mere or mere dost ki id ko compare kro
                                        // or agr mere id bari hai to wo pehle ajaye ge agr dost ki hai to uski ajaye ge 

                                        // 1234 5678 -> 5678 is big id so combination is 56781234 so this is roomid

                                        //ab setroom id wala hook banana prega 
                                        setRoomid(temproomid); // temproomid ko save krwa deya hook ke ander

                                        // es ke bad hame emit krwana hai ke 
                                        // socket me hm bolenge ke ander ye room ko join kr lo 
                                        // room me 2 log honge me or mera dost 
                                        // or hamy ye room pata kese chal raha hai kyo ke hamne room ki id bana ke bhej de hai
                                        // to ye dost ki side se be same rahe ga or hamari side se be 
                                        // to same room me agr 2 log join honge to wo apas me chat kr payenge 

                                        socket.emit("join_room", { roomid: temproomid, user: data.user });
                                        // emit se kya hoga joinroom wala emit frontend me fire hoga or backend se call hojaye ga
                                        // ab me 1 loadmessages wala function banao ga 
                                        // es me kya hoga ke jo us ke old messages hai usne purani jo chat ki hai kise dosre bndy se wo kaha wo mil jaye hmy uskeleye ham kya kr skty
                                        // abi purani chat hai nai hamary pass to ham sirf temporary add kr den ge acha ye choro abi ham send message wala kam kr lete hai bad me ye krenge 
                                        // kyo ke send wala zayada easy hai pele ham message send kr den ge os ke bad ham previous msg load krwa denge ese easy ha to ham 1 sendmsg
                                        //wala  route banane waly hai 

                                        // send message waly route me kya hoga ke ham backend me msg bheje ge or wo us bndy ko msg bhej de ga 
                                        // mtlb basically ham room me msg bhejen ge or wo samny waly ko receive ho jaye ga  to us ke leye apko sendmessage wala func banana prega

                                        loadMessages(temproomid);
                                        // end socket 

                                        // setLoading(false)
                                    } else {
                                        Alert.alert("User Not Found");
                                        navigation.navigate("serachUserPage")
                                        setLoading(false)

                                    }
                                })
                                .catch(err => {
                                    console.log(err);
                                    Alert.alert("Something Went Wrong")
                                    navigation.navigate("serachUserPage")
                                    setLoading(false)


                                })
                            // 














                        } else {
                            Alert.alert("Login Again")
                            navigation.navigate("Login")

                        }
                    })
                    .catch(err => {
                        console.log(err);
                        navigation.navigate("Login")

                    })

            })
            .catch(err => {
                console.log(err);
                navigation.navigate("Login")
            })

    }

    const [currentmessage, setCurrentmessage] = useState(null);

    const sendMessage = async () => {
        // sendMessage me sab se pehle msg ka 1 format hoga to wo bta den
        // ye basically ham 1 object bana rhy hai or es ko ham backend me bhejen ge 
        const messagedata = {
            // to yaha ham bolenge ke message kya rahe ga jo be currentmessage ke name ki hook me rahega to uper currentmessage name hook banale 
            message: currentmessage,
            // es ke bad ap bolo ge ke jo be msg araha hai abi assume kr lo ke jo be ham currentmessage me store krwaye ge kese store krwayenge 
            // bhai jese he apne sendmessage waly button me click kiya to jo be apke input waly bar me hoga wohi currentmessage hoga na to bas us ko he yaha
            // pe rakh deya hai message: currentmessage me 
            // mene input bar pe likha tha hi to jese he send kiya to wo yaha likh ke ajaye ga currentmessage me 

            // us ke ap bolenge ke kis roomid ko bheja jaye ga ye message
            // kis 2 bando ki baat chet horahe us hisab se apko btana prega 
            roomid: roomid,

            // or kya hona chahaye us msg me 
            // to basically kis ne bheja hai wo hona chahye uski bi id chahye senderid
            senderid: ouruserdata._id, // ouruserdata kya hai jo hamne uper setOuruserdata(data.user) jo save krwya tha uper hook me khud ka data
            // to us me se hamne khud ki id bhej de nikal ke hmne send kiya to sender ham khud hain na 

            // or receiver kon hoga hamara dost to uski id bhej de
            receiverid: fuserdata._id

            // yaha message update hota rahega bar bar 
        }

        // ab hamne esa object banaa leya hai or esko backend me bhejen ge to hmne kal 1 route banaya tha savmessagetodb us me bheje ge
        // to me bolonga ke pehle to msg save krwa do db me or wohi msg realtime me samne waly ko be show krwa do 
        // database me es leye save krwaon ga ke jab wo bnda app band band kr ke phr open kre to usko old chat show ho to us keleye abime 
        // database me save krwaon ga
        fetch("https://women-safety-app-backend-production.up.railway.app/savemessagetodb", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // yaha ham bol rahy hai messagedata hai jo usko save krwana chahty hai 
            body: JSON.stringify(messagedata)
        })
            .then(res => res.json())
            // agr backend se msg ata hai ke message saved successfully to oske bad ham bolenge ke us ko realtime msg be bhej do 
            // abi to hamne db me save krwaya hai ab ham us ko realtime msg be bhejenge  
            .then(data => {
                if (data.message === "Message Saved Successfully") {
                    console.log("Message saved successfully");
                    // ab apko realtime msg bhejna hai 
                    // to me bolonga ke 

                    // ab ap emit krwa do send_message name ka command to ye basically frontend se backend me chla jaye ga
                    // or me 2sra simply messagedata bhej deya jo be messagedata hai wo backend me chla jaye ga 
                    socket.emit("send_message", messagedata)
                    console.log("Message sent successfully");
                    // yaha call krna hai es ko 
                    // jab me mene send kiya hai message to mere list be update hojaye to us ko hamne 
                    // loadMessages me define kr deya ha
                    // pehle uper socket.emit se db me save howe msg or ab refreshed msg call 
                    // kr leye loadMessage ka ye mtlb hai to ye refresh messages call ho ke setChat(data)
                    // wali hook me save hojayege
                    loadMessages(roomid)


                    // msg hamne send krdeya or esy ab receive be to krwana hai to 1 new useEffect banao uper


                    // 1 chez me dekhan rkhna ke jese he hmne msg bhej dya to setcurrentmessage ko ap blank kr skty ho
                    // kyo ke input waly ko blank krna chahen ge jo be input me likha hoga to wo blank hojaye ga  
                    setCurrentmessage("")
                }
                else {
                    Alert.alert("Something Went Wrong")
                    setCurrentmessage("")

                }

            })
            .catch(error => {
                console.log(error);
            })
        // ab ye message db me save hogya to esi ko me show krwanw wala hun frontend me



    }





    //  loadMessages apke message ki list ko update kr de ga
    // mtlb database me hamne save krwa deya msg wohi ab ham show krwane waly hai

    const loadMessages = async () => {

        // 1 url fetch kro getmessages wala jis se hamy roomid ke sary messages mil rahy thy 
        fetch("https://women-safety-app-backend-production.up.railway.app/getmessages", {
            // to yaha pe ap simply kya bhej rahy honge ap roomid bhj rahe honge us room ke messsages yani jis room
            // ke messages chahye us room ki id bhejenege 
            // to ye kya krege ye basically jaye ga hamary database me messages wali collection me or bolega ke jo 
            // be roomid front end se jo ham bhejen ge wo match krti hai to msg hamy response me mil jaye ga 
            // jitne be messages hain sab ke sab response me mil jayenge 1 [] ki foam me sary objects{} ajaye ge 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // yaha ham bol rahy hai messagedata hai jo usko save krwana chahty hai 
            body: JSON.stringify({ roomid: roomid })
        })
            //  ab sary message mil jaye to bs unko save krwa lo
            // kis me save krwane hai jo hmne chat wala hook banaaya hai usme
            // agr 1 be messsage nai aye to koi be msg set nai hoga na to uskeleye koi error na lagao
            // agr backend se response nai aye to blank rhye ga sab us keleye error ki zarorat nai hai
            .then(res => res.json())
            .then(data => {
                // jobe data backend se aye ga wo setChat me save krwa deya
                // ab backend se kya ane wala hai to ham res ki foam sirf messages bhej rahy hai or kush nai
                // to ham yaha direct data likh denge to sary messages data me load hojaye ge 
                setChat(data);
                console.log("previous messages ", data);
                // abi me es ko save krwa donga 
                // ab is loadMessages ko call krna jaha hm ne pele kiya tha comment 
            })
            .catch(error => {

            })

    }






    // if (loading) {
    //     return (
    //         <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
    //             <ActivityIndicator size="large" color="red" />
    //         </View>
    //     );
    // }





    return (
        <View style={styles.container}>

            <View style={styles.s1}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={{ tintColor: "white", width: 35, }}
                        source={require("../../assets/images/arrow-left.png")}
                    />
                </TouchableOpacity>

                {
                    // agr dost ka data agya hai to
                    fuserdata?.profilepic ?
                        <Image source={{ uri: fuserdata?.profilepic }} style={styles.profilepic} /> :
                        <Image source={nopic} style={styles.profilepic} />
                }
                <Text style={styles.username}>{fuserdata?.fullName}</Text>
            </View>


            {/* ab yaha hamari chat show hoge */}

            <ScrollView style={styles.messageView}>
                {/* es ke bad simply bolenge ke jo chat wali array hai setChat se hamne messages set krwa hai na to
                us ko map krwana hai or 1 by 1 return krwana hai
                1 by 1 jitne be object milenge jitne be chat hoge sab return hoge*/}

                {
                    chat.map((item, index) => {
                        return (
                            <View style={styles.message} key={index}>
                                {/* agr hamara msg hai  mtlb bol skty hai ke agr id match krti hoge hamari id se to mtlb
                                 hamne bheja hai msg sender ki match krti hoge hamari id se mtlb hamara msg hai hm sender
                                  hain to wo hamesha right side me dekha hai 
                                  or agr senderid match krti fuserid se to mtlb dost ki id se to left side se chat dekhege*/}

                                {/* jo be msg aye ga to ham usme dekh skty hai na ke hmne kis format me save krwaya tha 
                                   receiverid or senderid me krwaya tha to ham compare kr lenge  ke bhai agr senderid match krti hoge hamari
                                   id se to mtlb hamne bheja hai msg previous msg to wo right side pe dekhe ga
                                   or agr senderid match krti hoge dost ki id se to msg left side show hoga to us ke leye yaha pe 1 LOGIC
                                  banani hai
                                */}


                                {/* agr msg mere ki id se aya hai to */}

                                {
                                    item.senderid == userid &&
                                    <View style={styles.messageRight}>
                                        <Text style={styles.messageTextRight}>{item.message}</Text>
                                    </View>
                                }
                                {/* agr msg dost ki id se aya hai to */}
                                {
                                    // item.senderid == fuserdata &&
                                    item.senderid != userid && item != '' &&
                                    <View style={styles.messageLeft}>
                                        <Text style={styles.messageTextLeft}>{item.message}</Text>
                                    </View>
                                }


                            </View>
                        )

                    })
                }



            </ScrollView>


            <View style={styles.sbottom}>
                <TextInput style={styles.sbottominput}
                    placeholder='Type a message' placeholderTextColor={"white"}
                    // es ke ander me jo be type kron to wo setCurrentmessage me text ke roo me chla jaye 
                    onChangeText={(text) => setCurrentmessage(text)} value={currentmessage}
                />

                <TouchableOpacity style={styles.sbottombtn}>
                    <MaterialIcons name="send" size={24} color="white"
                        onPress={() => sendMessage()}
                    />
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default MessagePage;

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        // height: '100%',
        flex: 1,
        backgroundColor: 'black',
    },
    profilepic: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    username: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    s1: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#111111",
        padding: 10,
    },
    sbottom: {
        width: '100%',
        height: 50,
        backgroundColor: '#111111',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        borderRadius: 30,
    },
    sbottominput: {
        width: '80%',
        height: 40,
        fontSize: 17,
        color: 'white',
    },
    sbottombtn: {
        backgroundColor: "blue",
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5
    },


    message: {
        width: '100%',
        // padding:10,
        borderRadius: 10,
        // marginVertical:5,
        // backgroundColor:'red',
    },
    messageView: {
        width: '100%',
        marginBottom: 50,
    },
    messageRight: {
        width: '100%',
        alignItems: 'flex-end',
        // backgroundColor:'red'
    },
    messageTextRight: {
        color: 'white',
        backgroundColor: '#1e90ff',
        // width:'min-content',
        minWidth: 100,
        padding: 10,
        fontSize: 17,
        borderRadius: 20,
        margin: 10,
    },
    messageLeft: {
        width: '100%',
        alignItems: 'flex-start',
        // backgroundColor:'red'
    },
    messageTextLeft: {
        color: 'white',
        backgroundColor: '#222222',
        color: 'white',
        fontSize: 17,
        minWidth: 100,
        padding: 10,
        borderRadius: 20,
        margin: 10,
    },

})