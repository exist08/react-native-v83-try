import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Logo from '../../assets/imgs/katni-removebg-preview.png'
import { screenWidth, screenHeight } from '../utils/utils'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/rootStackParams'
import { ArrowDown, ArrowDown2 } from 'iconsax-react-nativejs';
import ReAnimated from 'react-native-reanimated';
import { useAtomValue } from 'jotai';
import { categoriesAtom } from '../store/categoriesAtom';
import type { Category } from '../types/places';


const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const categories = useAtomValue(categoriesAtom);
    
    // Animation values for the first screen
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const titleTranslateY = useRef(new Animated.Value(20)).current;
    const titleOpacity = useRef(new Animated.Value(0)).current;
    const imageScale = useRef(new Animated.Value(0.8)).current;
    const imageOpacity = useRef(new Animated.Value(0)).current;
    const scrollIndicatorY = useRef(new Animated.Value(10)).current;
    const scrollIndicatorOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Container fade in
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        // Title animation
        Animated.parallel([
            Animated.timing(titleTranslateY, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(titleOpacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start();

        // Image animation with slight delay
        setTimeout(() => {
            Animated.parallel([
                Animated.spring(imageScale, {
                    toValue: 1,
                    friction: 8,
                    tension: 40,
                    useNativeDriver: true,
                }),
                Animated.timing(imageOpacity, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
            ]).start();
        }, 300);

        // Scroll indicator looping animation
        const scrollAnimation = Animated.loop(
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(scrollIndicatorY, {
                        toValue: 0,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scrollIndicatorOpacity, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.parallel([
                    Animated.timing(scrollIndicatorY, {
                        toValue: 10,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scrollIndicatorOpacity, {
                        toValue: 0.5,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                ]),
            ])
        );
        scrollAnimation.start();

        return () => scrollAnimation.stop();
    }, []);

    const CategoryCard = ({ item, index }: { item: Category; index: number }) => {
        const cardTranslateX = useRef(new Animated.Value(index % 2 === 0 ? -50 : 50)).current;
        const cardOpacity = useRef(new Animated.Value(0)).current;

        useEffect(() => {
            Animated.parallel([
                Animated.timing(cardTranslateX, {
                    toValue: 0,
                    duration: 800,
                    delay: index * 150,
                    useNativeDriver: true,
                }),
                Animated.timing(cardOpacity, {
                    toValue: 1,
                    duration: 800,
                    delay: index * 150,
                    useNativeDriver: true,
                }),
            ]).start();
        }, []);

        return (
            <Animated.View
                style={[
                    styles.categoryCard,
                    {
                        opacity: cardOpacity,
                        transform: [{ translateX: cardTranslateX }],
                    },
                ]}
            >
                <TouchableOpacity
                    style={styles.cardContent}
                    onPress={() => navigation.navigate('ModernCarousel', { categoryId: item.id })}
                >
                    <Text style={styles.categoryTitle}>
                        {item.title}
                    </Text>
                    <View style={styles.catImages}>
                        <Image source={{ uri: item.bgImg }} style={{ width: '100%', height: '100%' }} />
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
    };

    const renderItem = ({ index }: { item: number; index: number }) => {
        if (index === 0) {
            return (
                <Animated.View
                    style={[
                        styles.mapContainer,
                    ]}
                >
                    <Animated.View 
                        style={[
                            styles.mapImagePlaceholder,
                        ]}
                    >
                        <ReAnimated.Image source={Logo} style={{ width: 300, height: 300, resizeMode: 'contain' }} sharedTransitionTag="logo" />
                    </Animated.View>
                    <Animated.Text
                        style={[
                            styles.title,
                            {
                                opacity: titleOpacity,
                                transform: [{ translateY: titleTranslateY }],
                            },
                        ]}
                    >
                        EXPLORE TOP PLACES{'\n'}AROUND KATNI
                    </Animated.Text>
                    <View style={styles.scrollIndicator}>
                        <Animated.View
                            style={{
                                opacity: scrollIndicatorOpacity,
                                transform: [{ translateY: scrollIndicatorY }],
                            }}
                        >
                            <ArrowDown2 size={32} color="#fff" style={{ marginBottom: -20, transform: [{ scaleX: 2 }] }} />
                            <ArrowDown2 size={32} color="#fff" style={{ margin: 0, transform: [{ scaleX: 2 }] }} />
                            <ArrowDown2 size={32} color="#fff" style={{ marginTop: -20, transform: [{ scaleX: 2 }] }} />
                        </Animated.View>
                        <Text style={styles.scrollText}>SCROLL TO EXPLORE</Text>
                    </View>
                </Animated.View>
            )
        }
        if (index === 1) {
            return (
                <View style={styles.showcaseContainer}>
                    <FlatList
                        data={categories}
                        keyExtractor={(item) => item.title}
                        numColumns={1}
                        contentContainerStyle={styles.listContent}
                        style={styles.showcaseList}
                        renderItem={({ item, index }) => (
                            <CategoryCard item={item} index={index} />
                        )}
                    />
                </View>
            )
        }
        return null;
    }

    return (
        <View style={styles.container}>
            {/* <Video
                source={require('../../assets/intro/VID_20240310_111559.mp4')}
                style={styles.video}
                resizeMode="cover"
                repeat
                muted
            />
            <Video
                source={require('../../assets/intro/VID_20240310_111641.mp4')}
                style={styles.video}
                resizeMode="cover"
                repeat
                muted
            /> */}
            <View style={styles.overlay} />
            <FlatList
                data={[0, 1]}
                renderItem={renderItem}
                keyExtractor={item => item.toString()}
                showsVerticalScrollIndicator={false}
                snapToInterval={screenHeight}
                decelerationRate="fast"
                snapToAlignment="start"
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    listContainer: {
        paddingBottom: 20,
    },
    mapContainer: {
        height: screenHeight,
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 24,
        color: '#fff',
        marginTop: 8,
        textAlign: 'center',
    },
    mapImagePlaceholder: {
        width: screenWidth - 40,
        height: screenWidth - 40,
        // backgroundColor: '#1a1a1a',
        borderRadius: 20,
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollIndicator: {
        position: 'absolute',
        bottom: 60,
        alignItems: 'center',
    },
    scrollText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        marginTop: 24,
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#ddd',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textAlignVertical: 'center',
        width: '100%',
        height: '100%',
    },
    catImages: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        // Add styles for images container
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    showcaseContainer: {
        flex: 1,
        height: screenHeight,
    },
    showcaseList: {
        height: screenHeight,
        justifyContent: 'space-between',
        paddingBlock: 40,
        paddingInline: 20,
    },
    listContent: {
        paddingBlock: 40,
    },
    categoryCard: {
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        height: 120,
    },
})