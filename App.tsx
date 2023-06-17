import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Switch, View } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { CoinContainer } from './components/coin.container';

export default function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <MenuProvider>
      <View style={{
      flex: 1,
      backgroundColor: isDark ? '#282828' : '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: '15%'}}>
      <Switch value={isDark} onValueChange={val => setIsDark(val)}/>
      <CoinContainer theme={isDark} />
      <StatusBar style="auto" />
    </View>
    </MenuProvider>
  );
}
