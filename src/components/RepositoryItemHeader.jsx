import { Image, StyleSheet, View, Platform  } from "react-native";
import StyledText from "./StyledText";
import { theme } from "../theme";

const RepositoryItemHeader = (props) => {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      <View style={styles.headerText}>
        <StyledText fontWeight="bold" color="primary" fontSize="subheading">
          {props.description}
        </StyledText>
        <StyledText fontWeight="bold">{props.fullName}</StyledText>
        <StyledText style={styles.language}>{props.language}</StyledText>
      </View>
    </View>
  );
};

export default RepositoryItemHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerText: {
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingLeft: 10,
    flex: 1,
  },
  language: {
    padding: 4,
    marginVertical: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: 'orange',
      default: 'purple'
    }), //.OS === 'ios' ? theme.colors.primary : 'red',
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: "flex-start",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
