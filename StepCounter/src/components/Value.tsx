import { StyleSheet,View, Text } from 'react-native'

type ValueProps = {
  label: string;
  value: string;
};

const Value = ({label, value}: ValueProps) => (
  <View>
    <Text style={styles.summaryLabel}>{label}</Text>
    <Text style={styles.summaryValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  summaryLabel: {
    color: 'white',
    fontSize: 20,
  },
  summaryValue: {
    color: '#AFB3Be',
    fontSize: 35,
    fontWeight: '500'
  }
});

export default Value