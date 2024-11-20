import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import moment from 'moment';

const CreateTaskScreen = ({ navigation, route }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState(moment().format('YYYY-MM-DD')); // Fecha predeterminada actual

  const handleCreateTask = () => {
    if (taskTitle) {
      const newTask = {
        id: Math.random().toString(), // Asignar un id único
        title: taskTitle,
        deadline: taskDate,
        checked: false,
      };

      // Usar la función addTask pasada desde la pantalla anterior
      route.params.addTask(newTask); // Pasar la tarea creada a HomeScreen
      navigation.goBack(); // Regresar a la pantalla anterior después de crear la tarea
    } else {
      alert('Por favor ingresa un título para la tarea');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Crear Nueva Tarea</Text>
      <TextInput
        placeholder="Escribe el título de la tarea"
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
      <Button title="Crear Tarea" onPress={handleCreateTask} />
    </View>
  );
};

export default CreateTaskScreen;
