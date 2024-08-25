import { StyleSheet } from "react-native";
import { colors } from "src/stylesSystem";

export const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.white,
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      shadowColor: colors.black,
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      elevation: 5,
    },
    textContainer: {
      marginTop: 10,
      width: '100%',
      alignItems: 'center',
    },
    buttonContainer: {
      marginTop: 20,
      width: '100%',
      alignItems: 'center',
    },
  });
  