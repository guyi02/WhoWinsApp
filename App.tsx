import React from 'react';
import {SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Play from './src/pages/Play';

const App = () => {
  return (
    <SafeAreaView>
      <GestureHandlerRootView>
        <Play />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;
