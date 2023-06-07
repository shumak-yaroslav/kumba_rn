import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  checkContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default styles;
