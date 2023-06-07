import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ViewStyle,
  StyleProp,
  TextStyle,
  ColorValue,
} from 'react-native';

import styles from './styles';
import {primaryColor} from '../../constants/colors';
export enum ButtonType {
  filled,
  bordered,
}

type ButtonProps = {
  fetching?: boolean;
  text?: string;
  onPress?: () => void | Promise<void> | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  fetchingColor?: ColorValue;
  disabled?: boolean;
  buttonType?: ButtonType;
};
function Button({
  fetching = false,
  text = '',
  onPress,
  containerStyle,
  textStyle,
  fetchingColor = primaryColor,
  disabled = false,
  buttonType = ButtonType.bordered,
}: ButtonProps) {
  const buttonContent = () => {
    return (
      <View style={styles.content}>
        <Text
          style={[
            styles.text,
            buttonType === ButtonType.bordered
              ? styles.borderedText
              : styles.filledText,
            textStyle,
          ]}>
          {text}
        </Text>
      </View>
    );
  };

  const onClick = () => {
    !fetching && onPress && onPress();
  };

  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.container,
        containerStyle,
        buttonType === ButtonType.bordered ? styles.bordered : styles.filled,
        disabled ? styles.disabled : {},
      ]}>
      {fetching ? <ActivityIndicator color={fetchingColor} /> : buttonContent()}
    </TouchableOpacity>
  );
}

export default Button;
