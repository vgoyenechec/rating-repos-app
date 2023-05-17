import { View, StyleSheet} from "react-native";
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
});
