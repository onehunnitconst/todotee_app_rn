import {Platform} from 'react-native';

const Constants = {
  apiRoute:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:8080'
      : 'http://127.0.0.1:8080',
};

export default Constants;
