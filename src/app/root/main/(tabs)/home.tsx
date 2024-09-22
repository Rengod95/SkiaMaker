import {Image, ScrollView, Text, View, YStack} from 'tamagui';
import Animated, {Extrapolation, interpolate, SharedValue, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import {Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import PosterImage from 'assets/images/home_head_poster.png';
import {LinearGradient} from 'expo-linear-gradient';

const posterHeight = Dimensions.get('screen').height / 3;

const posterWidth = Dimensions.get('screen').width;

type AnimatedHeadPosterProps = {
  parentScrollViewScrollOffset: SharedValue<number>;
};

const AnimatedHeadPoster = ({parentScrollViewScrollOffset}: AnimatedHeadPosterProps) => {
  const inset = useSafeAreaInsets();
  const ImageContainerAnim = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            parentScrollViewScrollOffset.value,
            [-posterHeight, 0, posterHeight / 3, posterHeight / 2, posterHeight],
            [1.3, 1, 0.95, 0.9, 0.8],
          ),
        },
      ],
      opacity: interpolate(parentScrollViewScrollOffset.value, [0, posterHeight / 2, posterHeight], [1, 0.5, 0], Extrapolation.CLAMP),
    };
  });

  const ImageInnerViewAnim = useAnimatedStyle(() => {
    return {
      transform: [{translateY: interpolate(parentScrollViewScrollOffset.value, [0, posterHeight / 3], [0, -posterHeight / 3], Extrapolation.CLAMP)}],
      opacity: interpolate(parentScrollViewScrollOffset.value, [0, posterHeight / 3, posterHeight / 2], [1, 0.5, 0], Extrapolation.CLAMP),
    };
  });

  return (
    <View pos={'relative'} animation={'flip'} style={[ImageContainerAnim]}>
      <View pos={'absolute'} animation={'flip'} flex={1} bg={'$background'}>
        <Image source={{uri: PosterImage, width: posterWidth, height: posterHeight + inset.bottom}} bc={'$color4'} />
      </View>
      <LinearGradient
        style={{position: 'absolute', top: 0, left: 0, height: posterHeight + inset.bottom, width: posterWidth}}
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.15)', 'rgba(0,0,0,0.8)']}
      />
      <View pos={'absolute'} top={(posterHeight + inset.bottom) / 1.17} animation={'flip'} style={[ImageInnerViewAnim]} zIndex={10}>
        <Text fos={'$6'} fow={'$7'} ta={'center'} color={'#fff'}>
          AI 뷰티의 트렌드를 선도합니다
        </Text>
        <Text ta={'center'}></Text>
      </View>
    </View>
  );
};

export default function RootMainTabsHomeScreen() {
  const inset = useSafeAreaInsets();

  const sharedScrollOffset = useSharedValue<number>(0);

  const animatedScrollStyle = useAnimatedStyle(() => {
    return {
      marginTop: posterHeight,
      paddingBottom: posterHeight + 55 + inset.bottom,
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      sharedScrollOffset.value = event.contentOffset.y;
    },
  });

  const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);
  const AnimatedYStack = Animated.createAnimatedComponent(YStack);

  return (
    <View pos={'relative'} flex={1} bg={'$background'}>
      <AnimatedHeadPoster parentScrollViewScrollOffset={sharedScrollOffset} />
      <View flex={1}>
        <AnimatedScrollView flex={1} onScroll={scrollHandler} showsVerticalScrollIndicator={false} scrollEventThrottle={16}>
          <AnimatedYStack style={[animatedScrollStyle]} gap={'$space.6'}>
            <View flex={1} bg={'$background'} px={'$space.5'} pt={'$space.3'}>
              {/*내용*/}
            </View>
          </AnimatedYStack>
        </AnimatedScrollView>
      </View>
    </View>
  );
}
