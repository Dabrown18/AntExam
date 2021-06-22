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
import { gql, useQuery } from '@apollo/client'
import {mockData} from './src/utils/mockData';

const QUERY = gql`
  query {
    ants {
        name
        length
        weight
        color
      }
  }
`;

const App = () => {
  const { data, loading } = useQuery(QUERY);
  const [antData, setAntData] = useState(mockData);
  function generateAntWinLikelihoodCalculator() {
    return Math.random() * 100;
  }

  useEffect(() => {
    let mutatedData: any = [];
    if (data?.length > 0) {
      data?.map((ant: {likelihoodOfWinning: number}) => {
        ant.likelihoodOfWinning = generateAntWinLikelihoodCalculator();
        mutatedData.push(ant);
      });
      setAntData(mutatedData);
      const sortedAnts = antData.sort(
        (a, b) => b?.likelihoodOfWinning - a?.likelihoodOfWinning,
      );
      setAntData(sortedAnts);
    }
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={antData}
        renderItem={({item}) => {
          console.log('Item: ', item);
          return (
            <View
              style={[styles.ant, {backgroundColor: item.color.toLowerCase()}]}>
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
