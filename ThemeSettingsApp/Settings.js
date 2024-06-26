import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { useContext, useState } from 'react';
import { Theme } from './Theme';
import { ThemeContext } from './ThemeContext';

const SettingsScreen = () => {
    const {theme, updateTheme } = useContext(ThemeContext);
    let activeTheme = Theme [theme.mode]

    const [isActive, setIsActive] = useState (theme.mode=== 'dark')

   const toggleSwitch = () => {
    updateTheme ();
    setIsActive((previousState) => !previousState);
   };

  return (
    <View style={[styles.container, {backgroundColor: activeTheme.primary}]}>
        <Text style={{flexDirection:'row', justifyContent:'center', textAlign:'center',fontSize:36, marginTop: 150, marginBottom:60, color: activeTheme.secondary}} >
            Settings
        </Text>
      <View style={[styles.settingItem, {borderBottomColor: activeTheme.buttons}]}>
        <Text style={[styles.settingText, {color: activeTheme.secondary}]}>Language</Text>
        <Icon name="chevron-forward" size={25} style={{color: '#7e848d'}}/>
      </View>
      <View style={[styles.settingItem, {borderBottomColor: activeTheme.buttons}]}>
        <Text style={[styles.settingText, {color: activeTheme.secondary}]}>My Profile</Text>
        <Icon name="chevron-forward" size={25} style={{color: '#7e848d'}}/>
      </View>
      <View style={[styles.settingItem, {borderBottomColor: activeTheme.buttons}]}>
        <Text style={[styles.settingText, {color: activeTheme.secondary}]}>Contact Us</Text>
        <Icon name="chevron-forward" size={25} style={{color: '#7e848d', }}/>
      </View>
      <View style={[styles.settingItem, {borderBottomColor: activeTheme.buttons}]}>
        <Text style={[styles.settingText, {color: activeTheme.secondary}]}>Change Password</Text>
        <Icon name="chevron-forward" size={25} style={{color: '#7e848d', }}/>
      </View>
      <View style={[styles.settingItem, {borderBottomColor: activeTheme.buttons}]}>
        <Text style={[styles.settingText, {color: activeTheme.secondary}]}>Privacy Policy</Text>
        <Icon name="chevron-forward" size={25} style={{color: '#7e848d'}}/>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:60, marginLeft:20, marginRight:20}}>
        <Text style={[styles.settingText, {fontSize:30, color: activeTheme.secondary}]}>Theme</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isActive}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#eee',
    marginLeft:20,
    marginRight:20,
  },
  settingText: {
    fontSize: 18,
  },
  settingButton: {
    width: 30,
    height: 30,
    backgroundColor: '#ddd',
    borderRadius: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#555',
  },
});

export default SettingsScreen;
