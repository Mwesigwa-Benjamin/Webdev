
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/components/HomeScreen';
import TrackOne from '@/components/TrackOne';
import TrackOthers from '@/components/TrackOthers';
import TrackTwo from '@/components/TrackTwo';
import TrackThree from '@/components/TrackThree';
import TrackFour from '@/components/TrackFour';
import TrackFive from '@/components/TrackFive';
import TrackSix from '@/components/TrackSix';


const Stack = createNativeStackNavigator();


export default function Index(){
return(
  <Stack.Navigator initialRouteName='HomeScreen'>
    <Stack.Screen name='HomeScreen' component={HomeScreen} />
    <Stack.Screen  name='TrackOne' component={TrackOne}/>
    <Stack.Screen  name='TrackOthers' component={TrackOthers}/>
    <Stack.Screen  name='TrackTwo' component={TrackTwo}/>
    <Stack.Screen  name='TrackThree' component={TrackThree}/>
    <Stack.Screen  name='TrackFour' component={TrackFour}/>
    <Stack.Screen  name='TrackFive' component={TrackFive}/>
    <Stack.Screen  name='TrackSix' component={TrackSix}/>
  </Stack.Navigator>


  
  
);

}