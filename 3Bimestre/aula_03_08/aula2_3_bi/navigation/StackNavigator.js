import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import homebeatles from '../screens/homebeatles';
import homemusicas from '../screens/homemusicas';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="homebeatles"
          component={homebeatles}
        />

        <Stack.Screen
          name="homemusicas"
          component={homemusicas}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}