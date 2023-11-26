import React from 'react';
import { View, Text, Modal, Button } from 'react-native';

const StudentModal = ({ student, onClose }) => {
  return (
    <Modal>
      <View>
        {/* Display student details */}
        <Text>{student.firstname} {student.lastname}</Text>
        <Text>Course: {student.course}</Text>
        {/* Add other details like username, password, etc. */}
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default StudentModal;