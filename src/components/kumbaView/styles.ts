import {StyleSheet} from 'react-native';
import {primaryColor, white} from '../../constants/colors';
import {padding} from '../../constants/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  content: {
    flex: 1,
    borderTopLeftRadius: padding,
    borderTopRightRadius: padding,
    backgroundColor: white,
    padding: padding,
  },
});

export default styles;
