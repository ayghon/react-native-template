import 'react-native-gesture-handler'; // should always be first
import { AppRegistry } from 'react-native';
import App from './src/app/App';
import { name as appName } from './src/app/app.json';

AppRegistry.registerComponent(appName, () => App);
