import {FlatList, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'twrnc'



const data = [
    {
        id:'123',
        icon:'home',
        location:'Home',
        destination:"Code-Street, London, UK",
    },
    {
        id:'456',
        icon:'briefcase',
        location:'work',
        destination:"London-Eye, London, UK",
    }
]

const NavFovorite = () => {
  return (
    <FlatList data={data} 
    keyExtractor={(item)=>item.id} 
    ItemSeparatorComponent={()=> (
        <View style={[tw`bg-gray-200`, {height:0.5}] } />
    )}
    renderItem={({item:{icon, destination, location}})=>( 
        <TouchableOpacity 
        style={tw`flex-row item-center p-5`}>
            <Icon
                style={tw`mr-4 rouded-full bg-gray-300 p-3`}
                name={icon}
                type="iconic"
                color="white"
                size={8}
                />

            <View>
                <Text style={tw`font-semibold text-lg`} >{location}</Text>
                <Text style={tw`text-gray-300`} >{destination}</Text>
            </View>
        </TouchableOpacity>)} />
  )
}

export default NavFovorite

const styles = StyleSheet.create({})