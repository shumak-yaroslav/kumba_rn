export type Task = {
  id?: number;
  title: string;
  completed: boolean;
  coordinate?: {
    latitude: number;
    longitude: number;
  };
};

export type TaskLocation = {
  id: number;
  title: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
};
