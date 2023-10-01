import { View, Text, Platform, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading.';

const { width, height } = Dimensions.get('window')
const ios = Platform.OS == 'ios';

const topMargin = ios ? '' : 'mt-3'

export default function PersonScreen() {

    const [fav, setFav] = useState()
    const [personMoviess, setPersonMovies] = useState([1, 2, 3, 4])

    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    return (
        <ScrollView
            className='flex-1 bg-neutral-900'
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            <SafeAreaView className={`z-20 w-full flex-row justify-between items-center px-4 ${topMargin}`}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className='rounded-xl p-1'>
                    <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFav(!fav)}>
                    <HeartIcon size='35' color={fav ? theme.background : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>

            {
                loading ? (<Loading />) :
                    <View>
                        <View className='flex-row justify-center'
                            style={{
                                shadowColor: 'gray',
                                shadowRadius: 40,
                                shadowOffset: { width: 0, height: 5 },
                                shadowOpacity: 1
                            }}
                        >
                            <View className='items-center rounded-full overflow-hidden h-72 w-72 border border-neutral-500'>
                                <Image
                                    source={{ uri: 'https://i.guim.co.uk/img/media/d080da48fee755dd1d201685c07694e8b3cd189c/0_356_2800_1680/master/2800.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=dcb7b81433f67a930fcc8c3083658c86' }}
                                    style={{ height: height * 0.43, width: width * 0.74 }}
                                />
                            </View>
                        </View>
                        <View className='mt-8'>
                            <Text className='text-3xl text-white font-bold text-center'>
                                keanu reeves
                            </Text>
                            <Text className='text-base text-neutral-500 font-bold text-center'>
                                London, United Kingdom
                            </Text>
                        </View>
                        <View className='mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full'>
                            <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                                <Text className='text-white font-semibold'>Gender</Text>
                                <Text className='text-neutral-300 text-sm'>Male</Text>
                            </View>
                            <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                                <Text className='text-white font-semibold'>Birthday</Text>
                                <Text className='text-neutral-300 text-sm'>1964-09-02</Text>
                            </View>
                            <View className='border-r-2 border-r-neutral-400 px-2 items-center'>
                                <Text className='text-white font-semibold'>Known for</Text>
                                <Text className='text-neutral-300 text-sm'>Acting</Text>
                            </View>
                            <View className='px-2 items-center'>
                                <Text className='text-white font-semibold'>Popularity</Text>
                                <Text className='text-neutral-300 text-sm'>64.23</Text>
                            </View>
                        </View>
                        <View className='my-6 mx-4 space-y-2'>
                            <Text className='text-white text-lg'>Biography</Text>
                            <Text className='text-neutral-400 tracking-wide'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam architecto a aliquid, ipsum, illum tempore delectus modi obcaecati alias suscipit itaque quas commodi voluptates ea cum tenetur quam beatae tempora quidem doloremque magni facilis! Magnam hic officiis in explicabo!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, excepturi enim eum cum amet, voluptatibus impedit nihil mollitia et saepe dolore porro voluptatum dolor quaerat culpa non totam expedita illo praesentium consequuntur natus ea. Deleniti laborum animi ratione ab ipsa.
                            </Text>
                        </View>

                        <MovieList data={personMoviess} hideSeeAll title='Movies' />

                    </View>
            }

        </ScrollView>
    )
}