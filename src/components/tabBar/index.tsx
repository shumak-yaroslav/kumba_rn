import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {BottomTabDescriptor} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import styles from './styles';
import {black, primaryColor} from '../../constants/colors';

type BottomTabItemProps = {
  focused: boolean;
  label: string;
  onPress: () => void;
};
const TabBarItem = ({label, focused, onPress}: BottomTabItemProps) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={focused ? {selected: true} : {}}
      onPress={onPress}
      style={styles.item}>
      <Text style={[styles.text, {color: focused ? primaryColor : black}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

function KumbaTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const getLabel = (options: BottomTabDescriptor, routeName: string) => {
    return routeName;
  };

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const options = descriptors[route.key];
        const onPress = () => {
          navigation.navigate(route.name);
        };
        return (
          <View style={styles.itemContainer} key={index}>
            <TabBarItem
              focused={state.index === index}
              label={getLabel(options, route.name)}
              onPress={onPress}
            />
            {index !== state.routes.length - 1 && (
              <View style={styles.separator} />
            )}
          </View>
        );
      })}
    </View>
  );
}

export default KumbaTabBar;
