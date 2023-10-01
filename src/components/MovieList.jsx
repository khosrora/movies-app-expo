import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

export default function MovieList({ title, data, hideSeeAll }) {

    let movieName = 'Marvel Movie Spider Man'
    const navigation = useNavigation();

    return (
        <View className='mb-8 space-y-4'>
            <View className='mx-4 flex-row justify-between items-center'>
                <Text className='text-white text-xl' > {title} </Text>
                {
                    !hideSeeAll && (
                        <TouchableOpacity>
                            <Text style={styles.text} className='text-lg'> See All </Text>
                        </TouchableOpacity>
                    )
                }
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 25 }}
            >
                {
                    data.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => navigation.navigate('Movie', item)}
                            >
                                <View className='space-y-1 mr-4'>
                                    <Image
                                        source={{ uri: 'https://rukminim2.flixcart.com/image/850/1000/jruyikw0/poster/a/z/k/medium-captain-marvel-3-captain-marvel-poster-for-room-office-13-original-imafdk6yrqzthbfh.jpeg?q=90' }}
                                        style={{ width: width * 0.33, height: height * 0.22 }}
                                        className='rounded-3xl'
                                    />
                                    <Text className='text-neutral-300 ml-1'>
                                        {
                                            movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName
                                        }
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}




























// <TouchableOpacity
// key={index}
// onPress={() => navigation.navigate('Movie', item)}
// >
// <View className='space-y-1 mr-4'>
//     <Image
//         source={{ uri: 'https://rukminim2.flixcart.com/image/850/1000/jruyikw0/poster/a/z/k/medium-captain-marvel-3-captain-marvel-poster-for-room-office-13-original-imafdk6yrqzthbfh.jpeg?q=90' }}
//         className='rounded-3xl'
//         style={{ width: width * 0.33, height: height * 0.22 }}
//     />

// </View>
// <Text className='text-neutral-300 ml-1'>
//     {
//         movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName
//     }
// </Text>
// </TouchableOpacity>