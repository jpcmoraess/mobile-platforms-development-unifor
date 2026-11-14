import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TelaTermosUso from './TelaTermosUso';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "TermosDeUso"> 
        <Stack.Screen name = "TermosDeUso" component={TelaTermosUso}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}