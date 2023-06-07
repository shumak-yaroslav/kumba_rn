import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import styles from './styles';
import Images from '../../constants/images';

const KumbaHeader = ({
  navigation,
  route,
}: NativeStackHeaderProps | BottomTabHeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <Images.dots style={styles.dots} />
      {navigation.canGoBack() && (
        <TouchableOpacity onPress={navigation.goBack}>
          <Images.arrow />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>{route?.name}</Text>
    </View>
  );
};

export default KumbaHeader;
