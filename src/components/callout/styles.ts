import {StyleSheet} from 'react-native';
import {black, primaryColor} from '../../constants/colors';
import {defaultFontSize} from '../../constants/sizes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 164,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: primaryColor,
    borderWidth: 0.5,
  },
  text: {
    color: black,
    fontSize: defaultFontSize,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: primaryColor,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: primaryColor,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  row: {
    flexDirection: 'row',
  },
});

export default styles;
