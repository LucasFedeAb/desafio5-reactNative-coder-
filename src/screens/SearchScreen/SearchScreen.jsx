import { View } from "react-native";
import styles from "./SearchScreen.style";
import SearchInput from "@components/SearchInput/SearchInput";
import { useSelector } from "react-redux";

const SearchScreen = () => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.backgroundColor },
      ]}
    >
      <SearchInput />
    </View>
  );
};

export default SearchScreen;
