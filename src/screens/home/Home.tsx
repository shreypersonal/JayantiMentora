import { JMCarousel } from '@components'
import { SCREEN_WIDTH } from '@constants'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as Progress from 'react-native-progress'

const dummyData = [
  {
    thumbnail: 'https://via.placeholder.com/150?text=Tutor+1',
    name: 'John Doe',
    subject: 'Mathematics',
    tutor: 'Prof. Alan Smith',
    time: '10hrs 30 min',
    price: '$20',
  },
  {
    thumbnail: 'https://via.placeholder.com/150?text=Tutor+2',
    name: 'Fun with Physics',
    subject: 'Physics',
    tutor: 'Dr. Maria Gonzalez',
    time: '5 hrs 30 min',
    price: '$25',
  },
  {
    thumbnail: 'https://via.placeholder.com/150?text=Tutor+3',
    name: 'Advanced Chemistry',
    subject: 'Chemistry',
    tutor: 'Mr. Rajiv Nair',
    time: '6 hrs 15 min',
    price: '$18',
  },
  {
    thumbnail: 'https://via.placeholder.com/150?text=Tutor+4',
    name: 'Creative Writing',
    subject: 'English Literature',
    tutor: 'Ms. Claire Turner',
    time: '7 hrs 45 min',
    price: '$22',
  },
  {
    thumbnail: 'https://via.placeholder.com/150?text=Tutor+5',
    name: 'Data Science Basics',
    subject: 'Computer Science',
    tutor: 'Dr. Vikram Rao',
    time: '10 hrs 30 min',
    price: '$30',
  },
]

const dummyDataTwo = [
  {
    thumbnail: 'https://via.placeholder.com/150?text=Tutor+1',
    name: 'Biology 101',
    subject: 'Biology',
    tutor: 'Dr. Priya Verma',
    time: '8 hrs 20 min',
    price: '$28',
  },
  {
    thumbnail: 'https://via.placeholder.com/150?text=Tutor+2',
    name: 'World History',
    subject: 'History',
    tutor: 'Mr. David Brown',
    time: '4 hrs 10 min',
    price: '$24',
  },
  {
    thumbnail: 'https://via.placeholder.com/150?text=Tutor+3',
    name: 'Introduction to Economics',
    subject: 'Economics',
    tutor: 'Ms. Sarah Wilson',
    time: '3 hrs 50 min',
    price: '$26',
  },
]

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

const Home = () => {
  const renderCarouselItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={styles.container}>
        {/* Thumbnail on the left */}
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />

        {/* Details on the right */}
        <View style={styles.detailsContainer}>
          {/* Time on top-right */}
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.text}>Subject: {item.subject}</Text>
          <Text style={styles.text}>Tutor: {item.tutor}</Text>
          <Text style={styles.text}>Price: {item.price}</Text>
        </View>
      </View>
    )
  }

  const renderCarouselItem2 = ({ item, index }: { item: any; index: number }) => {
    return (
      <View
        key={index}
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          height: 85,
          width: SCREEN_WIDTH * 0.8,
          padding: 10,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
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

  return (
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
        <View>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
            Welcome back,{' '}
          </Text>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
            User
          </Text>
        </View>
      </View>
      <ScrollView style={{ paddingVertical: 28, paddingHorizontal: 18 }}>
        <View style={{ gap: 30 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Popular courses</Text>
            <Text style={{ fontSize: 14, color: '#5F2DED' }}>See all</Text>
          </View>
          <JMCarousel
            activeIndex={0}
            data={dummyData}
            renderCarouselItem={renderCarouselItem}
            height={120}
          />

          <JMCarousel
            activeIndex={1}
            data={dummyDataTwo}
            renderCarouselItem={renderCarouselItem}
            height={120}
          />
        </View>
        <View style={{ marginVertical: 28, gap: 30 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Recent Classes</Text>
            <Text style={{ fontSize: 14, color: '#5F2DED' }}>See all</Text>
          </View>
          <JMCarousel
            activeIndex={1}
            data={dummyDataThree}
            renderCarouselItem={renderCarouselItem2}
            height={120}
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 120,
    width: SCREEN_WIDTH * 0.8,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
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

export default Home
