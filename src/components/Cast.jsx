import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Cast({ cast, navigation }) {

    let personNmae = 'keanu Reevs';
    let characterNmae = 'John Wick';

    return (
        <View className='my-6'>
            <Text className='text-white text-lg mx-4 mb-5'>Top Cast</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    cast && cast.map((person, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                className='mr-4 items-center'
                                onPress={() => navigation.navigate('Person', person)}
                            >
                                <View
                                    className='overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500'
                                >
                                    <Image
                                        className='rounded-2xl h-24 w-20'
                                        source={{ uri: 'https://cdn.britannica.com/11/215011-050-3127A07E/American-actor-Keanu-Reeves-2014.jpg' }}
                                    />
                                </View>
                                <Text className='text-white text-xs mt-1'>
                                    {
                                        characterNmae.length > 10 ? characterNmae.slice(0, 10) + '...' : characterNmae
                                    }
                                </Text>
                                <Text className='text-neutral-400 text-xs mt-1'>
                                    {
                                        personNmae.length > 10 ? personNmae.slice(0, 10) + '...' : personNmae
                                    }
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}