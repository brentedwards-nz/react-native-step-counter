import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Value from './src/components/Value';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View  style={{...styles.summaryContainer}}>
        <Value label="Steps" value="12350" />
        <Value label='Distance' value='0.75 km' />
        <Value label='Stairs Climbed' value='123' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 10
  },
  summaryContainer: {
    flexDirection: 'row',
    gap: 25,
    flexWrap: 'wrap'
  }
});
