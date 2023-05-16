import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import { theme } from "../theme";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText style={styles.text}>Repositories</StyledText>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    padding:20,
  },
  text: {
    color: theme.appBar.textPrimary,
    fontSize: theme.fontSizes.header,
  },
});
