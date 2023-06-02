import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { CoinContainer } from './components/coin.container';

export default function App() {
  return (
    <View style={styles.container}>
      <CoinContainer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '20%',
  },
});
