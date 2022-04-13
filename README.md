# React Native Template

React Native version supported **0.63+**

## How to use

```
npx react-native init <app-name> --template https://github.com/ayghon/react-native-template.git
```

## Content

This template will setup the following libs:

- [React Navigation](https://reactnavigation.org/)
  > also installs
  > [React Navigation Bottom Tabs](https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs)
  > and
  > [React Navigation Drawers](https://github.com/react-navigation/react-navigation/tree/main/packages/drawer)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

The following tools are also setup:

- [Typescript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [Volta](https://docs.volta.sh/guide/)

## Optional libs

- [React Native UI Lib](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup)
  > [optional](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup#optional-dependencies)
  > and
  > [native dependencies](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup#install-native-dependencies)
  > are not installed
- [React Native Async Storage](https://react-native-async-storage.github.io/async-storage/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Detox](https://wix.github.io/Detox/)
- [React Native Config](https://github.com/luggit/react-native-config)
- [React Native Device Info](https://github.com/react-native-device-info/react-native-device-info)
- [React I18Next](https://react.i18next.com/)
- [Axios](https://axios-http.com/)
- [React Query](https://react-query.tanstack.com/)
- [Orval](https://orval.dev/)
- [React Hooks Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)


# TODO 

- choose to either have a simple app demonstrating all libs or an empty project
- align `@react-navigation/drawers` and `react-native-gesture-handler` versions,
  we use the latest for the second one. This issue only displays a warning in dev mode
- fix template husky hooks firing after project's hooks

> [Create your own template](https://github.com/react-native-community/cli/blob/master/docs/init.md#creating-custom-template)
