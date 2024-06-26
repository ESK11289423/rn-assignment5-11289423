import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./Settings";
import Cards from "./Cards";
import Statistics from "./Stats";
import { Theme } from './Theme';
import { ThemeContext } from './ThemeContext';
import { useContext } from "react";

const Tab = createBottomTabNavigator();

export default function Tabs () {

    const { theme } = useContext(ThemeContext);
    let activeTheme = Theme[theme.mode];

    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: activeTheme.tab,
                borderTopWidth: 0,
                elevation:0,
                height:90,

            }
        }}
        >
            <Tab.Screen
            name= 'Home'
            component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon: ()=>(
                    <Image source={require('./assets/home.png')} style={{tintColor: '#95969D'}}/>
                )
            }}
            />
            <Tab.Screen
            name= 'Cards'
            component={Cards}
           options={{
                headerShown: false,
                tabBarIcon: ()=>(
                    <Image source={require('./assets/myCards.png')} />
                )
            }}
            />
            <Tab.Screen
            name= 'Stats'
            component={Statistics}
            options={{
                headerShown: false,
                tabBarIcon: ()=>(
                    <Image source={require('./assets/statictics.png')}/>
                )
            }}
            />
            <Tab.Screen
            name= 'Settings'
            component={SettingsScreen}
            options={{
                headerShown: false,
                tabBarIcon: ()=>(
                    <Image source={require('./assets/settings.png')} style={{tintColor: '#95969D'}}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}