import React,{useState,useEffect} from "react"
import {View,StyleSheet, StatusBar,Text,ActivityIndicator} from 'react-native'
import axios from "axios"
import HomeScreen from "./src/screen/HomeScreen"

const API_KEY = "d5f0b29e12f53a5183058f06c7f90e18"

function App(){

  const [city,setCity] = useState("")
  const [cityData, setCityData] = useState("Delhi")
  const [weatherData, setWeather] = useState<any>()
  


  useEffect(() => {
     axios .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${API_KEY}`)
       .then(res => {
          setWeather(res.data)
          console.log(res.data)
       }) .catch((error)=> 
         console.log(error))
  },[cityData])


   function onPress(){
     setCityData(city)
   }
  
    

  return(
    <>  
       <StatusBar translucent={true} backgroundColor="transparent" />

       <View style={Styles.rootContainer}>
          {weatherData ?   <HomeScreen weatherdata={weatherData} value={city} setValue={(e:any)=> setCity(e)} onPress={onPress}/>
           : <View style={Styles.loading}>
              <ActivityIndicator size={40} color="#0000ff" />
              <Text style={Styles.loadingFont}>Loading</Text>
              </View>  }
      </View>
    
    </>

  )
}

export default App

const Styles = StyleSheet.create({
  rootContainer:{
    flex:1,
  },
  loading:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  loadingFont:{
    fontSize: 33,
    color:"#0000ff",
    fontFamily:"Montserrat-Medium"
  }
})