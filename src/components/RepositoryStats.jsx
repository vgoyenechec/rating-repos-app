import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousand = (num) => {
  return num > 1000 ? `${(num / 1000).toFixed(1)}k` : num;
};
const RepositoryStats = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <StyledText align="center"> {parseThousand(props.stargazersCount)}</StyledText>
        <StyledText align="center" fontWeight="bold"> Stars </StyledText>
      </View>
      <View>
        <StyledText> {parseThousand(props.forksCount)}</StyledText>
        <StyledText align="center" fontWeight="bold"> Forks</StyledText>
      </View>
      <View>
        <StyledText align="center"> {props.reviewCount} </StyledText>
        <StyledText align="center" fontWeight="bold"> Reviews</StyledText>
      </View>
      <View>
        <StyledText align="center">{props.ratingAverage}</StyledText>
        <StyledText align="center" fontWeight="bold"> Rating </StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;
