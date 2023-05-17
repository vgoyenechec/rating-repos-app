import { StyleSheet, TextInput } from "react-native";
import { theme } from "../theme";

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
  },
  error: {
    borderColor: "red",
  },
});

export default function StyledTextInput({ style, error, ...restOfProps }) {
  const textStyles = [styles.textInput, style, error && styles.error];
  return <TextInput style={textStyles} {...restOfProps} />;
}
