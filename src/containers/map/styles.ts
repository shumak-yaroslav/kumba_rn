import {StyleSheet} from 'react-native';
import {white} from '../../constants/colors';
import {smallRadius} from '../../constants/sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonBack: {
    position: 'absolute',
    left: 12,
    width: 38,
    height: 38,
    borderRadius: 2,
    backgroundColor: white,
    opacity: 0.85,
    elevation: 4,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: smallRadius,
  },
});
