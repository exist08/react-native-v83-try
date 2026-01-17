import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { KudiyaGhatCover } from '../utils/AllImages';
import {
  BodyLarge,
  ButtonText,
  Caption,
  H1,
  Label,
  CustomText,
  H2,
  H3,
} from '../components/ui';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Tag } from '../components/ui/Texts';
import { categoriesAtom } from '../store/categoriesAtom';
import { useAtomValue } from 'jotai';
import Animated from 'react-native-reanimated';

const DetailsScreen = () => {
  const { categoryId, locationId } = useRoute<RouteProp<{ params: { categoryId: string, locationId: string } }>>().params;
  console.log("categoryId", categoryId);
  console.log("locationId", locationId);
  const categories = useAtomValue(categoriesAtom);
  const category = categories.find((cat) => cat.id === categoryId);
  console.log("category", category);
  const location = category?.items[parseInt(locationId)];
  console.log("location", location);
  return (
    <View style={styles.container}>
      <Animated.Image source={location?.image} style={styles.image}
      sharedTransitionTag={`image-${locationId}`}
      // sharedTransitionStyle={{
      //   duration: 1000,
      //   easing: Easing.bezier(0.25, 0.1, 0.25, 1.0),
      // }}
      />
      <View style={styles.content}>
        <H1>{location?.title}</H1>
        <H3>{location?.subtitle}</H3>
        <BodyLarge>
          {location?.description}
        </BodyLarge>
        <View style={styles.tags}>
          {location?.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </View>
        <Pressable style={styles.button}>
          <ButtonText style={styles.buttonText}>Add to Map</ButtonText>
        </Pressable>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  content: {
    padding: 20,
    gap: 20,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  button: {
    backgroundColor: '#ddd',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    elevation: 3,
  },
  buttonText: {
    color: 'black',
  },
});
