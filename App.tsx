import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screen/Home";
import Dict from "./screen/Dict";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// url no found error command : expo r --tunnel

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Regex 실험실"
            options={{
              tabBarIcon: ({ size, color }) => (
                <Fontisto name="laboratory" size={size} color={color} />
              ),
            }}
            component={Home}
          />
          <Tab.Screen
            name="Regex 사전"
            options={{
              tabBarIcon: ({ size, color }) => (
                <AntDesign name="book" size={size} color={color} />
              ),
            }}
            component={Dict}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 10,
  },
});
