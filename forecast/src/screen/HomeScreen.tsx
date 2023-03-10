import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput, Pressable,Image } from 'react-native'
import { weathertype } from '../../App'

// Icons
import { Search } from "../../assets/icons/index"
import { Location } from "../../assets/icons/index"
import {Eye} from "../../assets/icons/index"
import {Windy} from "../../assets/icons/index"
import {Water} from "../../assets/icons/index"
import {Min} from "../../assets/icons/index"
import {Max} from "../../assets/icons/index"

// BgIMG
const mist = require( "../../assets/img/Rainy.png") 
const fishing = require("../../assets/img/Fishing.png")
const cloudy = require("../../assets/img/Cloudy.png")

//Weather Icons
const colud = require("../../assets/Wimg/cloud.png")
const Cloudy = require("../../assets/Wimg/cloudy.png")
const cloudy_one = require("../../assets/Wimg/cloudy_one.png")
const coludy_two = require("../../assets/Wimg/cloudy_two.png")
const  sun = require("../../assets/Wimg/sun.png")
const windy = require("../../assets/Wimg/windy.png")




interface props {
  weatherdata: weathertype,
  value:string,
  setValue:(e:any)=> void,
  onPress:( ) => void,
}


function HomeScreen({ weatherdata, value, setValue, onPress }:props) {


  const [bgImg, setBgImg] = useState(fishing)
  const [weatherIcon, setWeathericon] = useState(sun)

  
  // destructuring 
  
  const { weather } = weatherdata;
  const [{ main }] = weather;
  
  function weathercondition(condition:any){
    if (condition === "Mist") {
      setBgImg(mist), setWeathericon(cloudy)
    } else if (condition === "Smoke") {
      setBgImg(cloudy), setWeathericon(coludy_two)
    } else if (condition === "Haze") {
      setBgImg(mist), setWeathericon(windy)
    } else{
      setBgImg(fishing), setWeathericon(sun)
    } 
    return;
  }
  
  useEffect(() => {
    weathercondition(main)
  },[weatherdata])
  
  // conversion kelvin to celsius
  const Celsius = weatherdata.main.temp - 272.15
  const celsius = Celsius.toFixed(2);

  
  const Min_Temp = weatherdata.main.temp_min - 272.15
  const Min_temp = Min_Temp.toFixed(2);

  const Max_Temp = weatherdata.main.temp_max - 272.15 
  const Max_temp = Max_Temp.toFixed(2);





  return (
    <ImageBackground style={Styles.bgImg} source={bgImg}>

      <View style={Styles.searchContainer}>  
        <View style={Styles.inputContainer}>
          <TextInput style={Styles.inputBar} placeholder="Enter City Name" value={value} onChangeText={setValue} />

          <Pressable onPress={onPress}>
            <Search height={35} width={35} />
          </Pressable>
      </View>

        <View style={Styles.cityName}>
          <Location height={48} width={48} />
          <Text style={Styles.text}>{weatherdata.name}</Text>
        </View>



        <View style={{ flexDirection: "row",justifyContent:"center" }}>
           <View style={{marginRight:50}}> 
             <Image source={weatherIcon} style={Styles.weatherImg}/>
             <Text style={Styles.text_two}>{main}</Text>
           </View>
              <Text style={Styles.tempText}>{celsius} ??</Text>
         </View>

      <View style={Styles.DetailContainer}>
      <View style={Styles.Detail}>
           <Eye height={30} width={30}/>
          <Text  style={Styles.text}> Visibility: <Text style={Styles.text_two}>{weatherdata.visibility}</Text></Text>
        </View>
        
        <View style={Styles.Detail}>
          <Windy height={30} width={30}/>
          <Text  style={Styles.text}> Wind Speed: <Text style={Styles.text_two}>{weatherdata.wind.speed} km/hr</Text></Text>
        </View>
        
        <View style={Styles.Detail}>
          <Water height={30} width={30}/>
          <Text  style={Styles.text}> Humidity: <Text style={Styles.text_two}>{weatherdata.main.humidity} %</Text></Text>
        </View>

         <View style={Styles.Detail}>
          <Min height={30} width={30}/>
          <Text  style={Styles.text}> Min.Temp: <Text style={Styles.text_two}>{Min_temp} ??</Text> </Text>
          </View>

           <View style={Styles.Detail}>
            <Max height={30} width={30}/>
             <Text  style={Styles.text}> Max.Temp: <Text style={Styles.text_two}>{Max_temp} ??</Text></Text>
            </View>  
      </View>
       
      </View>
    </ImageBackground>
  )

}

export default HomeScreen;


const Styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginTop: 60,
  },
  inputBar: {
    borderBottomWidth: 1,
    width: "70%",
    fontSize: 22,
  },
  searchContainer: {
    alignItems: "center",
  },
  rootContainer: {
    flexDirection: "row",
  },
  cityName: {
    flexDirection: "row",
    alignItems:"center",
    marginLeft:120,
  },
  weatherImg:{
       height:60,
       width:60,
  },
  textContainer: {
    marginTop: 10,
    marginLeft: 80,
  },
  text: {
    fontSize: 17,
    fontFamily: "Montserrat-SemiBold",
    color: "white",
  },
   text_two:{
      fontSize:24,
      color:"white",
   },
  tempText: {
    fontSize: 65,
    color: "white",
    fontWeight: "500",
    fontFamily: "Montserrat-Medium"
  },
  bgImg: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    opacity:0.9
  },
  Detail:{
      flexDirection:"row",
      marginLeft:17,
      padding:10,
  },
  DetailContainer:{
    marginTop:70,
    width:"100%",  
   }          
})