import {StyleSheet} from 'react-native';
import {defaultFontSize, smallFontSize, smallRadius} from './sizes';
import {backGroundColor, inputTitleColor, textColor} from './colors';

const styles = StyleSheet.create({
  defaultContainer: {
    marginTop: 3,
    marginBottom: 12,
    paddingHorizontal: 6,
    paddingVertical: 12,
    borderRadius: smallRadius,
    backgroundColor: backGroundColor,
    borderWidth: 2,
  },
  text: {
    fontSize: defaultFontSize,
    color: textColor,
  },
  inputTitle: {
    fontSize: smallFontSize,
    color: inputTitleColor,
  },
});

export default styles;
