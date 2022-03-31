import React, { Component } from 'react'
import { Dimensions, Text, View,StyleSheet} from 'react-native'



const {}=Dimensions.get('window')
const CaroulseItem=({item}) =>{
    return(
        <View>
            <Image>
                 <Text>Title</Text>
                 <Text>Descipito</Text>
            </Image>
        </View>
    )
}

const styles=StyleSheet.create({
        cardView:{
            flex:1,
            width:width-20,
            height:height/3,
            backgroundColor:'white',
            margin:10, 
            borderRadius:10,
            shadowColor:'#000',
            shadowOffset:{width:0.5,height:0.5},
            shadowOpacity:0.5,
            shadowRadius:3,
            elevation:5,
        },
        TextView:{
                position:'absolute',
                bottom:10,
                margin:10,
                left:5,

        },
        image:{
            width:width-20,
            height:height/3,
            borderRadius:10,

        },
        itemTitle:{
                color:'white',
                fontSize:22,
                shadowColor:'#000',
                shadowOffset:{width:0.8 ,height:0.8},
                shadowOpacity:1,
                shadowRadius:3,
                marginBottom:5,
                fontWeight:5,
                elevation:5,


        }
})