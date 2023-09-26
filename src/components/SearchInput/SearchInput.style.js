import { StyleSheet } from "react-native";
import { spacing } from "../../constants/spacing";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    padding: 8,
    marginLeft: 16,
  },
  searchBox: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: spacing.xl,
  },
  searchFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.s,
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    flex: 1,
    marginStart: 30,
  },
  searchField: {
    flex: 1,
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.s,
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    color: "#010718",
  },

  searchIcon: {
    padding: spacing.m,
  },
  closeIcon: {
    padding: spacing.s,
    marginLeft: spacing.s,
  },
});
