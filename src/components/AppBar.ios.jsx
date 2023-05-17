import { View, StyleSheet, ScrollView } from "react-native";
import StyledText from "./StyledText";
import { theme } from "../theme";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to}>
      <StyledText style={textStyles}>{children}</StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">Repos</AppBarTab>
        <AppBarTab to="/signin">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scroll: {
    paddingBottom: 15,
  },
  text: {
    color: theme.appBar.secondary,
    fontSize: theme.fontSizes.header,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});
