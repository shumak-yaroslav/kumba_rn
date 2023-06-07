import {StyleSheet} from 'react-native';
import {inputTitleColor, textColor} from '../../constants/colors';
import {inputFontSize, smallRadius} from '../../constants/sizes';
const styles = StyleSheet.create({
  container: {},
  input: {
    color: textColor,
    fontSize: inputFontSize,
    borderWidth: 1,
    borderRadius: smallRadius,
    borderColor: inputTitleColor,
    marginVertical: 12,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
