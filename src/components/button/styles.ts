import {StyleSheet} from 'react-native';
import {defaultFontSize} from '../../constants/sizes';
import {black, primaryColor, white} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 160,
    borderColor: primaryColor,
    borderWidth: 2,
    borderRadius: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filled: {
    backgroundColor: primaryColor,
  },
  bordered: {
    backgroundColor: white,
  },
  disabled: {},
  text: {fontSize: defaultFontSize},
  filledText: {color: white},
  borderedText: {color: black},
});

export default styles;
