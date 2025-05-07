import { SCREEN_WIDTH } from '@constants'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const subjectArray = [
  'History',
  'Geography',
  'Pol Science',
  'Public Administration',
  'Sociology',
  'Economics',
  'Hindi',
]
const examArray = ['SSC', 'UP Police', 'Delhi Police', 'Banking Exam', 'Railways Exam', 'NER-JRF']

const dummyData = [
  {
    thumbnail: 'https://via.placeholder.com/150?text=Tutor+1',
    name: 'John Doe',
    subject: 'Mathematics',
    tutor: 'Prof. Alan Smith',
    time: '10 hrs 30 min',
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

const HorizontalChipsList = () => {
  return (
    <View style={styles.container}>
      {/* Subject Chips Scroll */}
      <Text style={styles.header}>Subjects</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipList}>
        {subjectArray.map((subject, index) => (
          <View key={index} style={styles.chip}>
            <Text style={styles.chipText}>{subject}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Exam Chips Scroll */}
      <Text style={styles.header}>Exams</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipList}>
        {examArray.map((exam, index) => (
          <View key={index} style={styles.chip}>
            <Text style={styles.chipText}>{exam}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const RenderItem = ({ item, index }: { item: any; index: number }) => {
  return (
    <View style={styles.listContainer}>
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

const Store = () => (
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
    <View style={{ gap: 30 }}>
      <HorizontalChipsList />
    </View>
    <FlatList
      style={{ padding: 10 }}
      data={dummyData}
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

export default Store
