import { View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import { theme } from "../theme";
import RepositoryItemHeader from "./RepositoryItemHeader";

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props}/>
      <RepositoryStats {...props} />
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  container: { padding: 15, paddingBottom: 5, paddingTop: 5 },
  header: { flexDirection: "row", justifyContent: "space-between" },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});
