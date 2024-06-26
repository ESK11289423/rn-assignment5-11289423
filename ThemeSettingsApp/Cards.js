import { View, Text, StyleSheet } from "react-native";
import { Theme } from './Theme';
import { ThemeContext } from './ThemeContext';
import { useContext } from "react";



const Cards = () => {
    const { theme } = useContext(ThemeContext);
    let activeTheme = Theme[theme.mode];
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor: activeTheme.primary}}>
            <Text style={{color: activeTheme.secondary}}>
                Cards Screen
            </Text>
        </View>
    )
};

export default Cards