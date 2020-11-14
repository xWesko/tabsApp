
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Button, ScrollView, FlatList, TouchableHighlight  } from 'react-native';

import axios from 'axios'


//UI
import TabsMenu from '../componentes/TabsMenu'

const Inicio = ( {navigation, route} ) => {


    const [ dataApi, setDataApi ] = useState([])
    const [ isApiGet, setApiGet ] = useState(false)


    const getApiData = async () => {
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
            setDataApi( resp.data )
            setApiGet( true )
        } catch (e) {
            console.log(e)
        }
    }

    useEffect( ()=> {

        if(isApiGet) {
            getApiData()
        }
        getApiData()

    }, [isApiGet] )



    return(
        <>
            <ScrollView style={ styles.contenedor }>

                <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop: 20, color: '#424242' }}> Lista de usuarios </Text>

                <FlatList 
                    data={ dataApi }
                    renderItem={({item}) => 
                        <TouchableHighlight
                            key={ item.id }
                            style={{ marginVertical: 10, backgroundColor: '#E3E3E3', marginHorizontal: '2.5%', paddingVertical: 17, paddingHorizontal: 10, borderRadius: 10 }}
                            onPress={ () => navigation.navigate('Perfil', { item }) }
                        >
                            <Text style={{ color: '#6C6C6C', fontSize: 20 }}> {item.name} </Text>
                          
                            
                        </TouchableHighlight>
                    }
                
                />
            </ScrollView>

            <TabsMenu navigation={navigation} />
        </>
    )
}

const styles = StyleSheet.create({

    contenedor: {
        flex: 1,
    }

})


export default Inicio