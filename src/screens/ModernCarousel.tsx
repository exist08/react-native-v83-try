import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { screenWidth } from '../utils/utils'
import Animated, { SharedValue, useAnimatedScrollHandler, useSharedValue, interpolate, useAnimatedStyle, runOnJS, FadeOut, FadeIn, clamp, useDerivedValue, withTiming, withSpring } from 'react-native-reanimated'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/rootStackParams'
import { useNavigation } from '@react-navigation/native'
import { useAtomValue } from 'jotai'
import { categoriesAtom } from '../store/categoriesAtom'

const itemWidth = screenWidth * 0.5
const spacing = 10
const itemTotalSize = itemWidth + spacing



const ModernCarousel = ({ route }: { route: { params: { categoryId: string } } }) => {
    const { categoryId } = route.params;
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const categories = useAtomValue(categoriesAtom)
    const data = categories.find((cat) => cat.id === categoryId)?.items || [];

    const CarouselItem = ({ item, scrollX, imageUri, index }: { item: any, scrollX: SharedValue<number>, imageUri: any, index: number }) => {
        // Use useDerivedValue to calculate rotateY
        const rotateY = useDerivedValue(() => {
            return interpolate(
                scrollX.value,
                [index - 1, index, index + 1],
                [-60, 0, 60]
            );
        });
    
        // Use useAnimatedStyle to apply the derived rotateY value
        const vStyle = useAnimatedStyle(() => {
            return {
                transform: [
                    { rotateY: `${rotateY.value}deg` },
                    { perspective: 1000 },
                ],
            };
        });
    
        return (
            <Animated.View style={[styles.item, { width: itemWidth }, vStyle]}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('DetailsScreen', 
                {categoryId: categoryId, locationId: index.toString() })}>
                    <Animated.Image source={imageUri} style={styles.carouselImage} sharedTransitionTag={`image-${index}`} />
                </TouchableOpacity>
            </Animated.View>
        );
    };

    const [activeIndex, setActiveIndex] = useState(0)
    const scrollX = useSharedValue(0)
    
    // Animated values for title
    const titleTranslateX = useSharedValue(20)
    const titleOpacity = useSharedValue(0)
    
    // Animate title when activeIndex changes
    useEffect(() => {
        titleTranslateX.value = 20
        titleOpacity.value = 0
        
        titleTranslateX.value = withTiming(0, { duration: 500 })
        titleOpacity.value = withTiming(1, { duration: 500 })
    }, [activeIndex])
    
    const titleAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: titleTranslateX.value }],
            opacity: titleOpacity.value,
        }
    })
    
    const onScroll = useAnimatedScrollHandler(e => {
        scrollX.value = clamp(e.contentOffset.x / itemTotalSize, 0, data.length - 1)
        const newActiveIndex = Math.round(scrollX.value)
        if (activeIndex !== newActiveIndex) {
            runOnJS(setActiveIndex)(newActiveIndex)
        }
    })

    return (
        <View style={styles.container}>
            <View style={[StyleSheet.absoluteFillObject, { backgroundColor: '#000', filter: [{ blur: 2 }] }]}>
                <Animated.Image
                    entering={FadeIn.duration(500)}
                    exiting={FadeOut.duration(500).delay(200)}
                    key={`image-${activeIndex}`}
                    source={data[activeIndex].image}
                    style={styles.bgImage}
                />
            </View>
            <View style={styles.content}>
                <Animated.Text style={[styles.title, titleAnimatedStyle]}>
                    {data[activeIndex]?.title || ''}
                </Animated.Text>
            </View>
            <Animated.FlatList
                data={data}
                style={styles.flatList}
                contentContainerStyle={{
                    paddingHorizontal: (screenWidth - itemWidth) / 2,
                    gap: spacing,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                renderItem={({ item, index }) => <CarouselItem item={item} scrollX={scrollX} imageUri={item?.image} index={index} />}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
                snapToInterval={itemTotalSize}
                decelerationRate={'normal'}
            />
        </View>
    )
}

export default ModernCarousel

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        position: 'relative',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    content: {
        // backgroundColor: 'red',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    item: {
        // backgroundColor: 'aqua',
        height: 300,
    },
    flatList: {
        maxHeight: 400,
    },
    carouselImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
})