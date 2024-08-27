import { colors } from '@stylesSystem/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.grayLight,
  },
  videoContainer: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.grayLight,
    padding: 15,
  },
  thumbnail: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.gray,
    padding: 15,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.gray,
  },
});
