/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text, View} from 'react-native';
import {mockData} from './src/utils/mockData';

const App = () => {
  const [data, setData] = useState(mockData);
  function generateAntWinLikelihoodCalculator() {
    return Math.random() * 100;
  }

  useEffect(() => {
    let mutatedData: any = [];
    data.map(ant => {
      ant.likelihoodOfWinning = generateAntWinLikelihoodCalculator();
      mutatedData.push(ant);
    });
    setData(mutatedData);
  }, []);

  console.log(data);

  const sortedAnts = data.sort(
    (a, b) => b?.likelihoodOfWinning - a?.likelihoodOfWinning,
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={sortedAnts}
        renderItem={({item}) => {
          console.log('Item: ', item);
          return (
            <View style={[styles.ant, {backgroundColor: item.color.toLowerCase()}]}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ant: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  text: { color: "#FFF" }
});

export default App;
