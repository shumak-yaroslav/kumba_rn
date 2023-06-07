import {StyleSheet} from 'react-native';
import {primaryColor, white} from '../../constants/colors';
import {padding} from '../../constants/sizes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: padding,
    height: 92,
    backgroundColor: primaryColor,
  },
  dots: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 20,
    color: white,
  },
});

export default styles;
