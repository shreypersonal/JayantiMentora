import { SCREEN_WIDTH } from '@constants'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import * as Progress from 'react-native-progress'

const dummyDataThree = [
  {
    name: 'Algebra Basics',
    thumbnail: 'https://via.placeholder.com/150?text=Algebra',
    progress: 75,
    time: '12 mins left',
    totalTime: '48 mins',
  },
  {
    name: 'Physics Motion',
    thumbnail: 'https://via.placeholder.com/150?text=Motion',
    progress: 40,
    time: '25 mins left',
    totalTime: '60 mins',
  },
  {
    name: 'Organic Chemistry',
    thumbnail: 'https://via.placeholder.com/150?text=Chemistry',
    progress: 90,
    time: '3 mins left',
    totalTime: '30 mins',
  },
  {
    name: 'World History',
    thumbnail: 'https://via.placeholder.com/150?text=History',
    progress: 60,
    time: '18 mins left',
    totalTime: '45 mins',
  },
  {
    name: 'Python Programming',
    thumbnail: 'https://via.placeholder.com/150?text=Python',
    progress: 20,
    time: '45 mins left',
    totalTime: '56 mins',
  },
]

  const RenderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View
        key={index}
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          height: 85,
          width: '100%',
          padding: 10,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
          marginTop:18
        }}>
        {/* Thumbnail */}
        <Image
          source={{ uri: item.thumbnail }}
          style={{ width: 65, height: 65, borderRadius: 8, backgroundColor: 'lightgrey' }}
          resizeMode="cover"
        />

        {/* Right Section */}
        <View style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
          {/* Top Right: Total Time and Name */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 1 }} />
            <View style={{}}>
              <Text style={{ fontSize: 12, color: '#888', alignSelf: 'flex-end' }}>
                {item.totalTime}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: 'bold', alignItems: 'flex-start' }}>
                {item.name}
              </Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={{ marginTop: 8 }}>
            <Progress.Bar
              progress={item.progress / 100}
              width={null}
              color="#4caf50"
              unfilledColor="#e0e0e0"
              borderWidth={0}
              height={6}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
              <Text style={{ fontSize: 11 }}>{item.progress}%</Text>
              <Text style={{ fontSize: 11, color: '#666' }}>{item.time}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }


const Lectures = () => (
  <View style={{ backgroundColor: 'whitesmoke' }}>
    {/* App header */}
    <View
      style={{
        paddingHorizontal: 18,
        paddingVertical: 28,
        backgroundColor: '#5F2DED',
      }}>
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: 'red',
          borderRadius: 20,
          alignSelf: 'flex-end',
        }}
      />
      {/* search bar */}
      <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, marginTop: 10 }}>
        <Text style={{ color: '#5F2DED', fontSize: 16 }}>Search for courses</Text>
      </View>
    </View>
    <FlatList
      style={{ padding: 10 }}
      data={dummyDataThree}
      renderItem={RenderItem}
      keyExtractor={item => item.name}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  chipList: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  chip: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 12, // Max vertical difference, i.e., 12px
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  listContainer: {
    backgroundColor: 'white',
    height: 120,
    flexDirection: 'row',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    marginTop: 10,
  },
  thumbnail: {
    width: 100,
    height: '100%',
    borderRadius: 8,
    backgroundColor: 'lightgrey',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    position: 'relative',
  },
  timeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  timeText: {
    fontSize: 12,
    color: 'gray',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
})

export default Lectures
