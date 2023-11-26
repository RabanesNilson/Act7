import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const StudentForm = ({ onSave }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [course, setCourse] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveData = () => {
    const data = {
      firstname,
      lastname,
      course,
      username,
      password,
    };
    onSave(data);
  };

  return (
    <View>
      {/* Your input fields and dropdown for the form */}
      <TextInput placeholder="First Name" value={firstname} onChangeText={setFirstname} />
      {/* Add other input fields and dropdown for course, etc. */}
      <Button title="Save" onPress={saveData} />
    </View>
  );
};

export default StudentForm;