import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text } from "react-native"

const Stack = createNativeStackNavigator()

const ScreenOne = () => <View><Text>Screen One</Text></View>
const ScreenTwo = () => <View><Text>Screen Two</Text></View>

export function StackRouter() {
    return (
        <Stack.Navigator initialRouteName="One">
            <Stack.Screen  name="One" component={ScreenOne} options={{title: "Uno" }}  />
            <Stack.Screen  name="Two" component={ScreenTwo} options={{title: "Dos" }} />

        </Stack.Navigator>
    )
}

export function AdminRoute() {
    return (
        <Stack.Navigator initialRouteName="One">
            <Stack.Screen  name="One" component={ScreenOne} options={{title: "Uno" }}  />
            <Stack.Screen  name="Two" component={ScreenTwo} options={{title: "Dos" }} />
        </Stack.Navigator>
    )
}

export function RootRoute () {

    const response = true

    return (
        <Stack.Navigator>
            {
                response ? <AdminRoute /> : <StackRouter />
            }
        </Stack.Navigator>
    )
}