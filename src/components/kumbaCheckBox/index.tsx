import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {View} from 'react-native';

import styles from './styles';
import {activeColor, disabledColor} from '../../constants/colors';
import {checkBoxSize} from '../../constants/sizes';

type CheckBoxProps = {
  onClick?: (isChecked: boolean) => void | undefined;
  isChecked: boolean;
};
const KumbaCheckBox = ({onClick, isChecked}: CheckBoxProps) => {
  return (
    <View style={[styles.container]}>
      <BouncyCheckbox
        size={checkBoxSize}
        fillColor={isChecked ? activeColor : disabledColor}
        unfillColor={disabledColor}
        disableBuiltInState={true}
        innerIconStyle={{borderRadius: 2}}
        iconStyle={{borderRadius: 2}}
        onPress={onClick}
        isChecked={isChecked}
      />
    </View>
  );
};

export default KumbaCheckBox;
