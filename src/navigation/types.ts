import * as routes from '../constants/routes';

export type RootStackParamList = {
  [routes.MAP]: undefined;
  [routes.CREATE_TASK]: {
    latitude: number;
    longitude: number;
  };
  [routes.TASKS]: undefined;
  [routes.TASKS_TABS]: undefined;
};
export type BottomTabParamList = {
  [routes.MAP]: undefined;
  [routes.TASKS]: undefined;
};
