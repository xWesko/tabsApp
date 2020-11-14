import 'react-native-gesture-handler';

import React from 'react';
import {
  Text, View, StyleSheet
} from 'react-native';


//Navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();

//Componentes UI
import TabsMenu from './componentes/TabsMenu'


//Pantallas
import Inicio from './pantallas/Inicio'
import Perfil from './pantallas/Perfil'
import Ajustes from './pantallas/Ajustes'

const App = () => {



    return (
    <>

        <NavigationContainer>
            <Stack.Navigator  
                initialRouteName="Inicio"
            >

                <Stack.Screen name="Inicio" component={Inicio}  />
                <Stack.Screen name="Perfil" component={Perfil}  />
                <Stack.Screen name="Ajustes" component={Ajustes}  />

           </Stack.Navigator> 
        </NavigationContainer>

    </>
    );
};


const estilos = StyleSheet.create({

})

export default App;
