import {StyleSheet} from 'react-native';
import {black, primaryColor, transparentWhite} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  button: {
    flex: 1,
    backgroundColor: transparentWhite,
    borderRadius: 6,
    borderColor: primaryColor,
    borderWidth: 0.5,
    margin: 4,
  },
  text: {
    color: black,
  },
  mainText: {
    textAlign: 'center',
    color: black,
    fontSize: 18,
    padding: 8,
  },
});

export default styles;
