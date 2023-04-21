import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"
import { RootRoute } from "./stack"

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
        <RootRoute />
    </NavigationContainer>
  );
}
