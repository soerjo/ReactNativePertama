import React from 'react';
import {Text, View} from 'react-native';
import FlexBox from './FlexBox';

const App = () => {
  return (
    <View style={{backgroundColor: 'green', height: '100%'}}>
      <Text style={{color: '#fafafa', fontWeight: 'bold'}}>Soerjo hasto</Text>
      <FlexBox />
    </View>
  );
};

export default App;
