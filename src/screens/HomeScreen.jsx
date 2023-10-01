import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { styles } from '../theme'
import TrendingMovies from '../components/TrendingMovies'
import MovieList from '../components/MovieList'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/Loading.'


const ios = Platform.OS == 'ios';
export default function HomeScreen() {

    const [trending, setTrending] = useState([1, 2, 3])
    const [upComming, setUpComming] = useState([1, 2, 3])
    const [topRated, setTopRated] = useState([1, 2, 3])

    const [loading, setLoading] = useState(false)

    const navigation = useNavigation();

    return (
        <View className='flex-1 bg-neutral-800'>
            <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
                <StatusBar style='light' />

                <View className='flex-row justify-between items-center mx-4'>
                    <Bars3CenterLeftIcon size='30' strokeWidth={2} color='white' />
                    <Text className='text-white text-3xl font-bold'>
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <MagnifyingGlassIcon size='30' strokeWidth={2} color='white' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            {
                loading ? (
                    <Loading />
                ) :
                    (
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 10 }}
                        >
                            <TrendingMovies data={trending} />
                            <MovieList title='Up comming' data={upComming} />

                            <MovieList title='Top Rating' data={upComming} />
                        </ScrollView>
                    )
            }
        </View>
    )
}