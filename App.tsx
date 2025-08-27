import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Navigator from './Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
