import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("ConnectNearby")}>

        <View>
          <ImageBackground
          resizeMode='cover'
          style={{width:"100%", height:"100%",}}
            source={require("../../assets/images/map.png")}
          >

          </ImageBackground>
        </View>

      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFECD0",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  }
})

export default Home;