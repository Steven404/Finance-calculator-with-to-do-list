import { FlatList, StyleSheet, View, Text } from "react-native";
import { colors, fontSize, spacing } from "../theme";
import { onboardingScreens } from "../data/onboardingItemsList";
import OnboardingItem from "../components/onboardingItem/OnboardingItem";
import { useWindowDimensions } from "react-native";
import { useRef, useState } from "react";
import Card from "../components/card/Card";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/CommonTypes";
import { primaryButton } from "../styles/buttons";
import { primaryTextWhite, secondaryText } from "../styles/texts";

type Props = NativeStackScreenProps<RootStackParamList, "Onboarding">;

const Onboarding = ({ navigation }: Props): JSX.Element => {
  const { width } = useWindowDimensions();
  const { height } = useWindowDimensions();

  // example: first slide has 0 x offset from the screen
  // if the current slide is the second one, then the currentSlideOffset is 1
  const [currentSlideOffsetX, setCurrentSlideOffsetX] = useState<number>(0);

  const flatListRef = useRef<FlatList>(null);

  const isLastSlide =
    Math.round(currentSlideOffsetX) === onboardingScreens.length - 1;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        onScroll={(e) =>
          setCurrentSlideOffsetX(e.nativeEvent.contentOffset.x / width)
        }
        data={onboardingScreens}
        contentContainerStyle={{ height: height * 0.7 }}
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
      <View style={[styles.indicatorsContainer, { height: height * 0.05 }]}>
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
                    0.25 + 0.75 * Math.abs(distanceFrom - 1)
                  })`,
                },
              ]}
            />
          );
        })}
      </View>
      <View style={[styles.footer, { height: height * 0.25 }]}>
        <Card
          shadow
          customStyle={primaryButton}
          onPress={() => {
            !isLastSlide
              ? flatListRef?.current?.scrollToOffset({
                  offset: Math.round(currentSlideOffsetX + 1) * width,
                })
              : navigation.push("Home");
          }}
        >
          <Text
            style={{
              ...primaryTextWhite,
              fontSize: fontSize.xxxl,
            }}
          >
            {!isLastSlide ? "Next" : "Get Started"}
          </Text>
        </Card>
        {!isLastSlide && (
          <Text
            onPress={() => {
              // find the offset of the last slide and scroll to it
              flatListRef?.current?.scrollToOffset({
                offset: (onboardingScreens.length - 1) * width,
              });
            }}
            style={styles.skipText}
          >
            Skip
          </Text>
        )}
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
    backgroundColor: "rgba(39, 81, 176,0.25)", // same as dark blue but at rgba and 0.25 opacity
    borderRadius: 2,
    marginHorizontal: 2,
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  indicatorsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  skipText: {
    ...secondaryText,
    fontSize: fontSize.xl,
  },
});

export default Onboarding;
