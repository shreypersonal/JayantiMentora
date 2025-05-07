import { SCREEN_WIDTH } from '@constants'
import React, { useEffect, useRef } from 'react'
import { Dimensions, StyleProp, ViewStyle } from 'react-native'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'

export const CAROUSEL_MODE_CONFIG = {
  parallaxAdjacentItemScale: 0.8,
  parallaxScrollingOffset: 15,
  parallaxScrollingScale: 1,
}

export const DEVICE_WIDTH = Dimensions.get('window').width
export enum CarouselMode {
  Parallax = 'parallax',
}
export const SCROLL_ANIMATION_DURATION = {
  '300': 300,
}
interface ICarouselData {
  id: string
  value: string
}

interface IJMCarouselProps {
  activeIndex: number
  containerStyle?: StyleProp<ViewStyle>
  data: any
  height: number
  renderCarouselItem: (params: { item: ICarouselData; index: number }) => React.ReactElement
}

const JMCarousel = (props: IJMCarouselProps) => {
  const { activeIndex, containerStyle, data, height, renderCarouselItem } = props

  const carouselRef = useRef<ICarouselInstance>(null)

  useEffect(() => {
    carouselRef.current?.scrollTo({ index: activeIndex })
  }, [])

  return (
    <Carousel
      loop={true}
      width={SCREEN_WIDTH}
      mode={CarouselMode.Parallax}
      modeConfig={{
        parallaxScrollingScale: 1,
        parallaxScrollingOffset: 50,
        parallaxAdjacentItemScale: 1,
      }}
      height={height}
      snapEnabled={true}
      pagingEnabled={true}
      autoPlayInterval={2000}
      data={data}
      style={{ ...containerStyle, width: '100%' }}
      onSnapToItem={index => console.log('current index:', index)}
      renderItem={renderCarouselItem}
    />
  )
}

export default React.memo(JMCarousel)
