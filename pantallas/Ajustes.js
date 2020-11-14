
import React from 'react';
import { Text, StyleSheet, View  } from 'react-native';

//UI
import TabsMenu from '../componentes/TabsMenu'

const Ajustes = ( {navigation, route} ) => {
    return(
        <>
            <View style={ styles.contenedor }>
                <Text>Hola desde pantalla de Ajustes </Text>
            </View>

            <TabsMenu navigation={navigation} />
        </>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default Ajustes