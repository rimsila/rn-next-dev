import 'react-native-gesture-handler';

import { Alert, AppRegistry, LogBox } from 'react-native';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import RNRestart from 'react-native-restart';

import App from './src/App';
import { name as appName } from './app.json';

LogBox.ignoreLogs(['Require cycle:']);

/**
 * Uncaught JS exception
 */
setJSExceptionHandler((error, isFatal) => {
  if (isFatal) {
    Alert.alert(
      'Unknown exception',
      `
        Error: ${isFatal ? 'Fatal:' : ''} ${error.name} ${error.message}
        App needs to be restarted
      `,
      [
        {
          text: 'Restart',
          onPress: () => {
            RNRestart.Restart();
          },
        },
      ]
    );
  } else {
    console.log(error); // So that we can see it in the ADB logs in case of Android if needed
  }
}, false);

/**
 * Uncaught native exception
 */
setNativeExceptionHandler(
  exceptionString => {
    console.log(exceptionString);
  },
  false,
  true
);

AppRegistry.registerComponent(appName, () => App);
