import { StyleSheet } from 'react-native';
import { colors } from 'src/stylesSystem';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  videoPlayer: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    marginVertical: 8,
  },
  stats: {
    fontSize: 12,
    color: colors.gray,
    marginVertical: 8,
  },
});
