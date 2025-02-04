
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '@/components/profileScreen';
import AccountScreen from '@/components/MathPaper';
import FirstPage from '@/components/firstPage';
import { LogIn } from '@/components/LogIn';
import HomePage from '@/components/homePage';
import NotifyScreen from '@/components/NotifyScreen';
import MathPaper from '@/components/MathPaper';
import PhysicsPaper from '@/components/PhysicsPaper';
import BiologyPaper from '@/components/BiologyPaper';



const Stack = createNativeStackNavigator();

export default function HomeScreen(){
return(

<Stack.Navigator initialRouteName='FirstPage'>
  <Stack.Screen name='FirstPage' component={FirstPage}/>
  <Stack.Screen name='LogIn' component={LogIn}/>
  <Stack.Screen name='HomePage' component={HomePage}/>
  <Stack.Screen name='NotifyScreen' component={NotifyScreen}/>
  <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
  <Stack.Screen name='MathPaper' component={MathPaper}/>
  <Stack.Screen name='PhysicsPaper' component={PhysicsPaper}/>
  <Stack.Screen name='BiologyPaper' component={BiologyPaper}/>
</Stack.Navigator>

);
}





 













  