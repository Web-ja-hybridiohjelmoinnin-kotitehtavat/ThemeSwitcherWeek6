import React from 'react';
import { View, Text } from 'react-native';
import ThemeSwitchButton from '../components/ThemeSwitchButton';
import { useTheme } from '../context/useTheme';
import Styles from '../Styles';

export default function Settings() {
  const { isDarkMode } = useTheme();

  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light, Styles.settingsContainer, Styles.textAndSwitchContainer]}>
        <Text style={[isDarkMode ? Styles.dark : Styles.light]}>Theme switcher</Text>
        <ThemeSwitchButton />
    </View>
  );
}
