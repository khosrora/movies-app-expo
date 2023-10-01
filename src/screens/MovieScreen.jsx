import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient'
import Cast from './../components/Cast';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading.';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

const topMargin = ios ? '' : 'mt-3'

export default function MovieScreen() {

    let movieName = 'Marvel Movie Spider Man'

    const [fav, setFav] = useState();
    const [cast, setCast] = useState([1, 2, 3, 4, 5]);
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);

    const [loading, setLoading] = useState(false)

    const { params: item } = useRoute();
    const navigation = useNavigation();

    useEffect(() => { }, [])

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className='flex-1 bg-neutral-900'
        >
            <View className='w-full'>
                <SafeAreaView className={`absolute z-20 w-full flex-row justify-between items-center px-4 ${topMargin}`}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className='rounded-xl p-1'>
                        <ChevronLeftIcon size='28' strokeWidth={2.5} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFav(!fav)}>
                        <HeartIcon size='35' color={fav ? theme.background : 'white'} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image
                        source={{ uri: 'https://rukminim2.flixcart.com/image/850/1000/jruyikw0/poster/a/z/k/medium-captain-marvel-3-captain-marvel-poster-for-room-office-13-original-imafdk6yrqzthbfh.jpeg?q=90' }}
                        style={{ width, height: height * 0.55 }}
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                        style={{ width, height: height * 0.40 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className='absolute bottom-0'
                    />
                </View>
            </View>
            {
                loading ? (
                    <Loading />
                ) : (
                    <>


                        <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                            <Text className='text-white text-center text-3xl font-bold tracking-wider'>
                                {movieName}
                            </Text>
                            <Text className='text-neutral-400 font-semibold text-base text-center'>
                                Released . 2020 . 170 min
                            </Text>


                            <View className='flex-row justify-center mx-4 space-x-2'>
                                <Text className='text-neutral-400 font-semibold text-base text-center'>
                                    Action .
                                </Text>
                                <Text className='text-neutral-400 font-semibold text-base text-center'>
                                    Thrill .
                                </Text>
                                <Text className='text-neutral-400 font-semibold text-base text-center'>
                                    Comedy .
                                </Text>
                            </View>

                            <Text className='text-neutral-400 mx-4 tracking-wide'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum odit eius quaerat quasi ipsa ducimus repellendus. Facilis debitis veniam aspernatur delectus. Ipsa perferendis impedit facilis mollitia, corrupti earum vel assumenda aliquam. Quas aperiam, reiciendis quidem assumenda maiores explicabo. Ex obcaecati similique voluptate dicta, voluptatibus et doloremque maiores, nihil aliquid, ratione sint at nesciunt saepe distinctio vel amet porro cumque eligendi error cum. Iusto, at. Laudantium error omnis quam, nisi iste animi quasi alias veritatis, cum commodi nam! Dicta, numquam maxime cum nemo sequi vero sint dolorem inventore aperiam, reprehenderit nobis laborum ab illo enim sed ipsa assumenda error corrupti? Aperiam.
                            </Text>

                        </View>

                        <Cast navigation={navigation} cast={cast} />

                        <MovieList title='similar Movies' hideSeeAll data={similarMovies} />
                    </>
                )
            }
        </ScrollView>
    )
}