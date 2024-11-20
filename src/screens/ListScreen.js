import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: '1', label: 'Item 1' },
  { id: '2', label: 'Item 2' },
  { id: '3', label: 'Item 3' }
];

const ListScreen = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <View key={`item-${item.id}-${index}`}>
          <Text>{item.label}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id} // Asegura claves únicas
    />
  );
};

export default ListScreen;
