import React from 'react'
import { 
    StyleSheet,
    View,
    TouchableOpacity, 
    Image,
    Text,
 } from 'react-native'

 const TabsMenu = ( props ) => {


   
    return(
        <>
            <View style={ estilos.tabContainer }>


                { /* 01 - Inicio  */ }
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={ () => {props.navigation.navigate('Inicio')} }>
                        <Image 
                            style={ estilos.tabIcon}
                            source={ require('../assets/iconos/inicio.png') }
                        />    
                        <Text style={ estilos.tabText}> Inicio </Text>
                    </TouchableOpacity>
                </View>


                { /* 02 - Reportes  */ }
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginStart: 20 }}>
                    <TouchableOpacity onPress={ () => console.log('Hola Mundo') }>
                        <Image 
                            style={ [ estilos.tabIcon, { marginLeft: 13  }  ] }
                            source={ require('../assets/iconos/reportes.png') }
                        />    
                        <Text style={ estilos.tabText}> Reportes </Text>
                    </TouchableOpacity>
                </View>

                { /* 03 - Perfil  */ }
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginStart: 15 }}>
                    <TouchableOpacity onPress={ () => console.log('Hola Mundo') }>
                        <Image 
                            style={ [ estilos.tabIcon, { marginLeft: 1  }  ] }
                            source={ require('../assets/iconos/perfil.png') }
                        />    
                        <Text style={ estilos.tabText}> Perfil </Text>
                    </TouchableOpacity>
                </View>

                { /* 04 - Ajustes  */ }
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginStart: 15 }}>
                    <TouchableOpacity onPress={ () => {props.navigation.navigate('Ajustes')} }>
                        <Image 
                            style={ [ estilos.tabIcon, { marginLeft: 6  }  ] }
                            source={ require('../assets/iconos/ajustes.png') }
                        />    
                        <Text style={ estilos.tabText}> Ajustes </Text>
                    </TouchableOpacity>
                </View>


                { /* 05 - Menu */ }
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', marginStart: 10 }}>
                    <TouchableOpacity onPress={ () => console.log('Hola Mundo') }>
                        <Image 
                            style={ [ estilos.tabIcon, { marginLeft: 5  }  ] }
                            source={ require('../assets/iconos/menu.png') }
                        />    
                        <Text style={ estilos.tabText}> Menu </Text>
                    </TouchableOpacity>
                </View>


            </View>
        </>
    )
 }


 const estilos = StyleSheet.create({

    tabContainer: {
        borderTopColor: '#B4B4B4',
        borderTopWidth: 2,
        position: 'absolute',
        backgroundColor: '#D8D8D8',
        bottom: 0,
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    tabIcon: {
        width:35,
        height: 35
    },
    tabText: {
        color: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    }


 })


 export default TabsMenu;