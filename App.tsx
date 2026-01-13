import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'jotai';
import AppNavigator from './src/AppNavigator';
// Import your other providers
// import { ToastProvider } from './providers/ToastProvider';
// import { ThemeProvider } from './providers/ThemeProvider';
// import { rootStore } from './store';
import 'react-native-gesture-handler';
import 'react-native-reanimated'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <BottomSheetModalProvider> */}
        <SafeAreaProvider>
          {/* <Provider store={rootStore}> */}
            {/* <ToastProvider> */}
              {/* <ThemeProvider> */}
                <AppNavigator />
              {/* </ThemeProvider> */}
            {/* </ToastProvider> */}
          {/* </Provider> */}
        </SafeAreaProvider>
      {/* </BottomSheetModalProvider> */}
    </GestureHandlerRootView>
  );
}