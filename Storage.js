import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'students';

export const saveStudent = async (student) => {
  try {
    const existingData = await AsyncStorage.getItem(STORAGE_KEY);
    const data = existingData ? JSON.parse(existingData) : [];
    data.push(student);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving student data:', error);
  }
};

export const getStudents = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting student data:', error);
    return [];
  }
};
Create a Component for Displaying Data in a Table:

Create a component to display the list of students in a table. When a row is clicked, you can trigger the modal to display the data.

jsx
Copy code
// StudentList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getStudents } from './Storage';

const StudentList = ({ onRowClick }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStudents();
      setStudents(data);
    };

    fetchData();
  }, []);

  const renderRow = ({ item }) => (
    <TouchableOpacity onPress={() => onRowClick(item)}>
      <View>
        <Text>{item.firstname} {item.lastname}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={students}
      keyExtractor={(item) => item.username}
      renderItem={renderRow}
    />
  );
};

export default StudentList;