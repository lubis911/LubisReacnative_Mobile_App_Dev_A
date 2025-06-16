import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

const RestApi = () => {
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => console.log(res.data));
  }, []);

  return (
    <View>
      <Text>Rest Api</Text>
    </View>
  );
};

export default RestApi;
