import React from 'react';
import { CheckBox } from 'react-native-elements';

const CheckBoxComponent = ({ label = 'Etiqueta predeterminada', value = false, onChange = () => {} }) => {
  return (
    <CheckBox
      title={label}
      checked={value}
      onPress={onChange}
    />
  );
};

export default CheckBoxComponent;
