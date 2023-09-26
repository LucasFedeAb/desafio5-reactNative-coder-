import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, AllGifsTitle } from "../../screens";

const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeNav"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="HomeNav" component={Home} />
      <Stack.Screen name="AllGifsTitle" component={AllGifsTitle} />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
