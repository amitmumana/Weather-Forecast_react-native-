import React,{useState,useEffect} from 'react'
import {View,Text,ActivityIndicator,StyleSheet, ImageBackground} from 'react-native'
import SearchBar from "../component/SearchBar"
import axios from "axios"


const API_KEY = "bcafe9980585d4849aa3122b7917003b"

function HomeScreen(){
    
    const [weather, setWeather] = useState<any>()
    const [loaded, setLoaded] = useState(true)
    const [bgImg, setBgImg] = useState()

   useEffect(() => {
        setLoaded(false)
       axios 
           .get(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${API_KEY}`)
           .then((res:any) => {
              setWeather(res.data)
              console.log(res.data);
              setLoaded(true);
           }).catch((error:any) => {
              console.log(error)
           })
   },[ ])



    if(!loaded){
        return(
            <View style={Styles.loadingIcon}>
                <ActivityIndicator size={45} color="Blue"/>
            </View>
        )
    } 

        const Temp = weather.main.temp
        let celcius = (Temp - 273.15).toFixed(2)

    

   return(
         <ImageBackground style={Styles.bgImg} source={require("../../assets/img/bg.jpg")}>
            <View style={Styles.rootContainer}>
             <Text style={Styles.text}>{weather.name}</Text> 
              <Text style={Styles.tempText}>{celcius} °C</Text>
            </View>
         </ImageBackground>
       
   )

} 

export default HomeScreen;


const Styles = StyleSheet.create({
     
    rootContainer:{
        flex:1,
        marginTop:30,
        margin:10,
    },
    text:{
        fontSize:35,
        color:"white",
    },
    tempText:{
      fontSize:23,
      color:"white",
      fontFamily:"OpenSans-Bold"
    },
    bgImg:{
        height:"100%",
        width:"100%",
        resizeMode:"cover",
    },

    loadingIcon:{
        position:"absolute",
        right:19,
        top:4,
    }
})