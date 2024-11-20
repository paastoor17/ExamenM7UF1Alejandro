import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import moment from 'moment';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Tarea 1', deadline: '2024-11-30', checked: false },
    { id: '2', title: 'Tarea 2', deadline: '2024-12-15', checked: false },
  ]);

  const deleteTask = (taskId) => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que quieres eliminar esta tarea?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: () => setTasks(tasks.filter(task => task.id !== taskId)),
        },
      ]
    );
  };

  const toggleCheckbox = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    ));
  };

  const navigateToEditTask = (task) => {
    navigation.navigate('EditTask', {
      task,
      updateTask: (updatedTask) => {
        setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
      },
    });
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <CheckBox
        checked={item.checked}
        onPress={() => toggleCheckbox(item.id)}
      />
      <Text
        style={{
          textDecorationLine: item.checked ? 'line-through' : 'none',
          flex: 1
        }}
      >
        {item.title} {item.deadline ? `- ${moment(item.deadline).format('DD/MM/YYYY')}` : ''}
      </Text>
      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={{ color: 'red' }}>Eliminar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToEditTask(item)}>
        <Text style={{ color: 'blue', marginLeft: 10 }}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="Crear Nueva Tarea" onPress={() => navigation.navigate('CreateTask', { addTask: (newTask) => setTasks(prevTasks => [...prevTasks, newTask]) })} />
    </View>
  );
};

export default HomeScreen;
