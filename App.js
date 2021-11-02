import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, Value, Alert, TextInput, View, FlatList} from 'react-native';

export default function App() {

  const [value, setValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [result, setResult] = useState("");

  const[data, setData] = useState([]);

  const calculator = operator => {
    console.log(value, secondValue, operator);
    const [numberOne, numberTwo] = [Number(value), Number(secondValue)];
    switch (operator) {
      case '+':
        setResult(value + setSecondValue);
        break;
      case '-':
        setResult(value - secondValue);
        break;
    }
    setValue('');
    setSecondValue;
  }


  const addData = () => {
    setData([...data, {key: result}]);
    setResult('');
  }
        
  return(
    
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style={{width:200, borderColor:'gray', borderWidth:1}}
        keyboardType='numeric'
        onChangeText={text => setValue(text)}
        value={value}        
      />
      <TextInput
        style={{width:200, borderColor:'gray', borderWidth:1}}
        keyboardType='numeric'
        onChangeText={text => setSecondValue(text)}
        value={secondValue}        
      />

      <View style={styles.buttons}>
      <Button onPress={() => calculator('+')} onPress={addData} title="+"/>
      <Button onPress={() => calculator('-')} onPress={addData} title="-"/> 
      </View>
      <FlatList
        data={data}
        renderItem = {({item}) =>
          <Text>{item.key}
          </Text>}
        />
      
  </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 100,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

   input: {
     
    width:200, 
    borderColor:'gray', 
    borderWidth:1,
    justifyContent: 'center',
   },
   
   buttons: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
   }

});

