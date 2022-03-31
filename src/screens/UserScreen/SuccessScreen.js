import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StatusBar, SafeAreaView, } from 'react-native';

const Test = () => {
  DATA = [
    { name: 'hhh', status: 1 },
    { name: 'hhh', status: 1 },
    { name: 'aaa', status: 2 },
    { name: 'bbb', status: 3 },
  ]
  return (
    <SafeAreaView>
      <FlatList
        data={DATA.filter(item => item.status === 1)}
        renderItem={({ item }) => <TouchableOpacity>
          <Text>{item.name}</Text>
        </TouchableOpacity>}
      />
    </SafeAreaView>
  )
}
export default Test