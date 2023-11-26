import React, { useState } from 'react';
import { View } from 'react-native';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import StudentModal from './StudentModal';
import { saveStudent } from './Storage';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [refreshList, setRefreshList] = useState(false);

  const handleSave = async (student) => {
    await saveStudent(student);
    setRefreshList(!refreshList);
  };

  const handleRowClick = (student) => {
    setSelectedStudent(student);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <StudentForm onSave={handleSave} />
      <StudentList onRowClick={handleRowClick} key={refreshList} />
      <StudentModal student={selectedStudent} onClose={handleModalClose} />
    </View>
  );
};

export default App;