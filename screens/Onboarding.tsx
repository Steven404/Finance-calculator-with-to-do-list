import { FlatList, StyleSheet, View, Text } from "react-native";
import { colors } from "../theme";
import { onboardingScreens } from "../data/onboardingItemsList";
import OnboardingItem from "../components/onboardingItem/OnboardingItem";
import { useWindowDimensions } from "react-native";
import { useState } from "react";

const Onboarding = (): JSX.Element => {
  const { width } = useWindowDimensions();
  const { height } = useWindowDimensions();

  // example: first slide has 0 x offset from the screen
  // if the current slide is the second one, then the currentSlideOffset is 1
  const [currentSlideOffsetX, setCurrentSlideOffsetX] = useState<number>(0);

  return (
    <View style={styles.container}>
      <FlatList
        onScroll={(e) =>
          setCurrentSlideOffsetX(e.nativeEvent.contentOffset.x / width)
        }
        data={onboardingScreens}
        contentContainerStyle={{ height: height * 0.85 }}
        renderItem={({ item }) => (
          <OnboardingItem
            id={item.id}
            title={item.title}
            description={item.description}
            width={width}
            icon={item.icon}
          />
        )}
        keyExtractor={(item) => item.title}
        pagingEnabled
        horizontal
      />
      <View style={[styles.footer, { height: height * 0.15 }]}>
        <View style={styles.indicatorsContainer}>
          {onboardingScreens.map((_, index) => {
            const distanceFrom = Math.abs(index - currentSlideOffsetX);
            return (
              <View
                key={index}
                style={[
                  styles.indicator,
                  // if Math.abs(index - currentSlideOffset) < 1 that means
                  // the corresponding screen of that indicator is at least partly in view
                  distanceFrom < 1 && {
                    // if Math.abs(distanceFrom - 1) === 1 that means that the slide is the current viewed slide.
                    // if it's something like 0.5 then that means that user is scrolling and is between this and another slide so we apply part of the effect
                    width: 10 + 10 * Math.abs(distanceFrom - 1),
                    height: 3.5 + 1.5 * Math.abs(distanceFrom - 1),
                    backgroundColor: `rgba(39, 81, 176, ${
                      0.25 + 0.5 * Math.abs(distanceFrom - 1)
                    })`,
                  },
                ]}
              />
            );
          })}
        </View>
        <Text>Test2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgWhite,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    height: 3.5,
    width: 10,
    backgroundColor: "rgba(39, 81, 176,0.25)", //same as dark blue but at rgba and 0.5 opacity
    borderRadius: 2,
    marginHorizontal: 2,
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  indicatorsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Onboarding;
