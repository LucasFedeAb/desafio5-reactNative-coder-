import { StyleSheet } from "react-native";
import { spacing } from "../../../../../constants/spacing";

export default styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 16,
    marginBottom: spacing.s,
  },
  label: {
    fontSize: 12,
    marginBottom: spacing.s,
  },
  containerCategory: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 10,
    left: 0,
    zIndex: 2,
    borderRadius: 16,
    paddingTop: 4,
  },

  imageCategory: {
    width: "90%",
    height: 100,
    borderRadius: 16,
    resizeMode: "contain",
    paddingHorizontal: 100,
  },

  scrollContainer: {
    width: "100%",
    marginTop: 120,
  },
  containerGifsCharacter: {
    marginVertical: spacing.s,
    paddingHorizontal: spacing.s,
  },
  gifsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gif: {
    borderRadius: 5,
    overflow: "hidden",
  },

  imageGif: {
    width: 110,
    height: 110,
  },
  headerListGifs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
