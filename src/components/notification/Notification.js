import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import Button from '../button/Button';

const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.notification}>Notification Sent!!</Text>

        <View style={styles.button} onPress={() => navigation.goBack()}>
          {/* <Button title="Ok!" /> */}
          
            <TouchableOpacity onPress={() => navigation.goBack()} style={{width:55,height:28, backgroundColor:"#FF3974", borderRadius:10,
          alignItems:'center', justifyContent:'center',
          }}>
              <Text style={styles.ok}>Ok!</Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#FFFFFF",
  },
  container1: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFECD0",
    borderRadius: 22,
  },
  notification: {
    color: "#372329",
    textAlignVertical: 'center',
    fontFamily: "Nunito-Bold",
    fontSize: 30,
  },
  button: {
    // flex: 0.3,
    marginTop: 10,
    alignSelf:'flex-end',
    marginRight:21
  },
  ok:{
    color: "#FFECD0",
    fontFamily: "Nunito-Bold",
    fontSize: 16,
  }
})