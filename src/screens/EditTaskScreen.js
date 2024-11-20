import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import moment from 'moment';

const EditTaskScreen = ({ navigation, route }) => {
  const { task, updateTask } = route.params;
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [taskDate, setTaskDate] = useState(task.deadline);

  useEffect(() => {
    setTaskTitle(task.title);
    setTaskDate(task.deadline);
  }, [task]);

  const handleUpdateTask = () => {
    if (taskTitle && taskDate) {
      const updatedTask = {
        ...task,
        title: taskTitle,
        deadline: taskDate,
      };

      // Llamamos a la función updateTask pasada desde la pantalla anterior
      updateTask(updatedTask);
      navigation.goBack(); // Regresar a la pantalla anterior
    } else {
      alert('Por favor ingresa todos los campos');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Editar Tarea</Text>
      <TextInput
        placeholder="Título de la tarea"
        value={taskTitle}
        onChangeText={setTaskTitle}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Fecha de vencimiento (YYYY-MM-DD)"
        value={taskDate}
        onChangeText={setTaskDate}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Actualizar Tarea" onPress={handleUpdateTask} />
    </View>
  );
};

export default EditTaskScreen;
