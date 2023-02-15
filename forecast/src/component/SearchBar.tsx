import React, {useState} from "react"
import{ Pressable, StyleSheet } from 'react-native'
import {View,TextInput,} from "react-native";
import {Search} from "../../assets/icons/index"

function SearchBar({onPress,value,setValue}:any ){

    

   return(
        <View style={Styles.rootContainer}>

               <TextInput value={value}
                          onChangeText={setValue}
                         style={Styles.inputBar} 
                        placeholder="Enter City Name"/>

            <Pressable onPress={onPress} android_ripple={{color:"grey",borderless:true , radius:22}}>
               <Search height={40} width={40}/>
            </Pressable>
        </View>
    )
}

export default SearchBar

const Styles = StyleSheet.create({
      
    rootContainer:{
        height:110,
        width:320,
        marginTop:40,
        backgroundColor:"white",
        borderWidth:1,
        borderRadius:7,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        opacity:0.8
    },
    inputBar:{
        width:180,
        borderBottomWidth:1,
        borderColor:"black",
        fontSize:22,
        marginHorizontal:10,
    },
    
})