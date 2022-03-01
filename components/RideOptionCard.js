import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native-web'
import { useNavigation } from '@react-navigation/native'
import { set } from 'immer/dist/internal'


const data  = [
  {
    id:"Uber-X-123",
    title:"uberX",
    multiplier:1,
    image:"https://links.papareact.com/3pn"
  },
  {
    id:"Uber-X-456",
    title:"uber XL",
    multiplier:1.2,
    image:"https://links.papareact.com/5w8"
  },
  {
    id:"Uber-X-789",
    title:"ube LUx",
    multiplier:1.75,
    image:"https://links.papareact.com/7pf"
  }
]

const RideOptionCard = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState(null)
  return (
    <SafeAreaView style={tw`bg-white flex-grow`} >
      <View>
        <TouchableOpacity  onPress={()=> navigation.navigate("NavigateCard")} style={tw`absolute top-3 left-5 p-3 rounded-full`} >
            <Icon name="chevron"type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`} >Select a Ride</Text>
      </View>
      <FlatList data={data} keyExtractor={(item)=> item.id}
        renderItem={({item : { id, title, multiplier, image}, item})=>(
          <TouchableOpacity onPress={()=>setSelected(item) } style={tw`flex-row justify-between item-center px-10 ${id === selected?.id && "bg-gray-200"}`}>
              <Image style={{width:100, height:100, resizeMode:"contain"}} 
              source={{uri: image}} />
              <View style={tw`-ml-6`} >
                <Text style = {tw`text-xl font-semibold`} >{title}</Text>
                <Text>Travel Time ...</Text>
              </View>
              <Text style={tw`text-xl`} >$99</Text>
          </TouchableOpacity>
        )} />
    
    </SafeAreaView>
  )
}

export default RideOptionCard

const styles = StyleSheet.create({})