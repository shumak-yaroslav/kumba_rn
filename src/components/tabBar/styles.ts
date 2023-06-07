import {StyleSheet} from 'react-native';
import {black, white} from '../../constants/colors';
import {radius} from '../../constants/sizes';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    height: 96,
    width: '100%',
    elevation: 4,
  },
  itemContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 48,
    backgroundColor: black,
    width: 1,
  },
  text: {
    fontSize: 24,
  },
});
