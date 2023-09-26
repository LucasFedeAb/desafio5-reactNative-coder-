import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CategoryTopTab } from "../../../screens/Home/components";
import styles from "./HomeTopTabNavigator.style";
import { useSelector } from "react-redux";
import { colorGreen } from "../../../constants/colors";

const TopTab = createMaterialTopTabNavigator();

const HomeTopTabNavigator = ({ uniqueCategories }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarLabelStyle: [
          styles.tabLabel,
          {
            color: currentTheme.color,
          },
        ],
        tabBarItemStyle: [styles.tabBarItem],

        tabBarContentContainerStyle: [
          styles.tabBarContentContainer,
          {
            backgroundColor: currentTheme.backgroundColor,
          },
        ],
        tabBarIndicatorStyle: {
          backgroundColor: colorGreen.secondary,
        },
      }}
    >
      {uniqueCategories.map((category) => (
        <TopTab.Screen
          name={category}
          component={CategoryTopTab}
          initialParams={{ category }}
          key={category}
        />
      ))}
    </TopTab.Navigator>
  );
};

export default HomeTopTabNavigator;
