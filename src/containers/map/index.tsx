import {View} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import MapView, {LongPressEvent, PROVIDER_GOOGLE} from 'react-native-maps';

import styles from './styles';
import useTask from '../../hooks/useTask';
import {initialRegion} from '../../constants/maps';
import * as routes from '../../constants/routes';
import KumbaView from '../../components/kumbaView';
import {RootStackParamList} from '../../navigation/types';
import CustomCallout from '../../components/callout';

function MapScreen(): JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {tasks} = useTask();
  const longPressHandler = (event: LongPressEvent) => {
    const coordinate = event.nativeEvent.coordinate;
    navigation.navigate(routes.CREATE_TASK, {
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });
  };

  return (
    <KumbaView insideTab={true}>
      <View style={styles.container}>
        <MapView
          showsCompass={true}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={initialRegion}
          onLongPress={longPressHandler}>
          {tasks.map(
            task =>
              task.coordinate && <CustomCallout key={task.title} task={task} />,
          )}
        </MapView>
      </View>
    </KumbaView>
  );
}

export default MapScreen;
