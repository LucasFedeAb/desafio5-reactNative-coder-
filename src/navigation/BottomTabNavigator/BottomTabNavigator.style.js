import { StyleSheet } from "react-native";
import { colors, colorGreen } from "../../constants/colors";

export default styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colorGreen.quaternary,
    alignItems: "center",
    height: 55,
  },

  tabLabelFocus: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: "600",
  },
  linkItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  iconPlusStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colorGreen.tertiary,
    fontSize: 40,
    borderRadius: 60,
    bottom: 5,
    paddingHorizontal: 6.5,
    color: colors.primary,
    padding: 5,
  },
  iconPlusStyleFocus: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colorGreen.tertiary,
    fontSize: 40,
    borderRadius: 60,
    bottom: 5,
    paddingHorizontal: 6.5,
    color: colors.primary,
    padding: 5,
    transform: [{ translateY: -10 }],
  },
  tabLabelFocusPlus: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    paddingTop: 4,
  },
});
