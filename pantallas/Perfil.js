
import React from 'react';
import { Text, StyleSheet, View  } from 'react-native';


const Perfil = ( props ) => {

    const data = props.route.params.item;

    return(
        <>
            <View style={ styles.contenedor }>
                <Text> {data.name} </Text>
                <Text> {data.email} </Text>
                <Text> {data.phone} </Text>
            </View>
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


export default Perfil