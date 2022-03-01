import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useNavigation } from '@react-navigation/native'
import NavFovorite from './NavFovorite'
import { Icon } from 'react-native-elements'


const NavigateCard = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white flex-1`} >
      <Text styele={tw`text-center py-5, text-xl`} >Good Morning, Evance</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`} >
          <View>
              <GooglePlacesAutocomplete
                styles={toInputBoxStyles}
                placeholder='where to?'
                nearbyPlacesAPI='Googleplace'
                onPress={()=> navigation.navigate('RideOptionCard')}
           
                debounce={400}
              />
          </View>
          <NavFovorite/>
      </View>
      <View styele={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`} >
          <TouchableOpacity onPress={()=> navigation.navigate("RideOptionCard")} styele={tw`flex flex-row bg-black justify-between px-4py-3 rounded-full`} >
              <Icon  name='car' type='font-awesome' color='white' size={16} />
              <Text styles={tw`text-white text-center`} >Rides</Text>
          </TouchableOpacity>
          <TouchableOpacity styele={tw`flex flex-row justify-between  w-4 px-4 py-3 rounded-full`} >
              <Icon  name='fast-food-outline' type='ionicon' color='black' size={16} />
              <Text styles={tw`text-white text-center`} >Eats</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:20,
        flex: 0,
    },
    textInput:{
        backgroundColor:"#00DDDF",
        borderRadius:0,
        fontSize: 18
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
    }


})