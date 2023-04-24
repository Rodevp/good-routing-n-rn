import { useNavigation } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text, Button } from "react-native"

const Stack = createNativeStackNavigator()

const ScreenOne = () => <View><Text>Screen One</Text></View>
const ScreenTwo = ( { route } ) => <View><Text>Screen Two {route?.params.name}</Text></View>
const ScreenNavigate = ({toNavigate}) => {
    
    // todos los componentes dados en una screen route, por default se inyecta
    // la prop navigation, la cual tendremos todas las opciones de navegación 
    // programatica

    const router = useNavigation()

    // el metodo .push(path) -> nos ayuda a expresar la intencionalidad de agregar
    // otra panalla a la pila si o si aunque estemos en la misma ruta, e incluso 
    // mandamos props inyectados en nuestras rutas.
    // .goBack() -> nos ayuda a regresar a la pila anterior a la activa, sino hay, no hará nada
    // .popToTop(), devuelve a la primera pantalla de la pila.
    // en nuestras pantallas también tendremos el parametro route, para capturar los parametros
    // que vengan de una navegacion x, seria route.params

    //recomendaciones de params (filtros, ids, clasificar(ordernar))
    //no pasar objetos complejos, ya que si no saben como manejar la pantalla lo cual habria
    //bloqueo de la misma al no saber como manejar dichos datos

    return (
        <View>
            <Text>Navigate</Text>
            <Button
             title="Navigate"
             onPress={() => {
                router.navigate(toNavigate, {
                    name: "soy un parametro jeje"
                })
             }}   
            />
        </View>
    )
}

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
        <Stack.Navigator initialRouteName="ToNavigate">
            <Stack.Screen  name="One" component={ScreenOne} options={{title: "Uno" }}  />
            <Stack.Screen  name="Two" component={ScreenTwo} options={{title: "Dos" }} />
            <Stack.Screen  
                name="ToNavigate"
                component={(props) => <ScreenNavigate {...props} toNavigate="One" />}
                options={{title: "Navigate"}}
                // options={{ headerTitle: (props) => <LogoTitle {...props} /> }} para algo más custom de nosotros
                // headerRight: (props) => ( <ButtonCustom {...props} />), asi manipulamos el btn a la izq, el cuál
                // nos ayuda hacer cosas más personalizadas a nuestro favor
            />
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