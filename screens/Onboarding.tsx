import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";
import { onboardingScreens } from "../data/onboardingItemsList";
import OnboardingItem from "../components/onboardingItem/OnboardingItem";
import { useWindowDimensions } from "react-native";

const Onboarding = (): JSX.Element => {
  const { width } = useWindowDimensions();
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingScreens}
        renderItem={({ item }) => (
          <OnboardingItem
            id={item.id}
            title={item.title}
            description={item.description}
            width={width}
            height={height}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Onboarding;
