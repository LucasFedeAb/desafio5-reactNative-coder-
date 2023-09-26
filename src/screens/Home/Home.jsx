import { View } from "react-native";
import gifsData from "../../data/gifsData";
import styles from "./Home.style";
import Header from "@components/Header/Header";
import HomeTopTabNavigator from "@navigation/HomeStackNavigator/HomeTopTabNavigator/HomeTopTabNavigator";
import { useSelector } from "react-redux";

const Home = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const uniqueCategories = [];

  for (const item of gifsData) {
    if (!uniqueCategories.includes(item.category)) {
      uniqueCategories.push(item.category);
    }
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.backgroundColor },
      ]}
    >
      <Header title={"Home"} />
      <HomeTopTabNavigator uniqueCategories={uniqueCategories} />
    </View>
  );
};

export default Home;
