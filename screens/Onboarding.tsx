import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";
import { onboardingScreens } from "../data/onboardingItemsList";
import OnboardingItem from "../components/onboardingItem/OnboardingItem";
import { useWindowDimensions } from "react-native";

const Onboarding = (): JSX.Element => {
  const { width } = useWindowDimensions();
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={onboardingScreens}
        renderItem={({ item }) => (
          <OnboardingItem
            id={item.id}
            title={item.title}
            description={item.description}
            width={width}
            icon={item.icon}
            height={height}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Onboarding;
