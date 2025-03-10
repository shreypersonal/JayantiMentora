import { FontVariant, StyleSheet } from 'react-native'

import { colors } from './color'
import { Sizes } from './spacing'
import { Typography } from './typography'

const cardShadowStyle = {
  elevation: Sizes.Size_6,
  shadowColor: colors.shadow,
  shadowOffset: { width: Sizes.Size_0, height: Sizes.Size_2 },
  shadowOpacity: Sizes.Size_004,
  shadowRadius: Sizes.Size_2,
}

const textStyle = {
  fontVariant: ['lining-nums'] as FontVariant[],
  letterSpacing: Sizes.Size_0_24,
}

const cardContainerStyle = {
  ...cardShadowStyle,
  backgroundColor: colors.cardBackground,
  borderColor: colors.cardBorderSecondary,
  borderRadius: Sizes.Size_8,
  borderWidth: Sizes.Size_05,
  padding: Sizes.Size_16,
}

const commonStyles = StyleSheet.create({
  cardShadow: {
    ...cardShadowStyle,
  },
  cardContainer: {
    ...cardContainerStyle,
  },
  disabled: {
    opacity: 0.7,
  },
  errorText: {
    ...textStyle,
    color: colors.astrict,
    fontFamily: Typography.primary.medium,
    fontSize: Sizes.Size_12,
    lineHeight: Sizes.Size_16,
    marginTop: Sizes.Size_8,
  },
  formButton: {
    height: Sizes.Size_56,
    marginHorizontal: Sizes.Size_24,
    marginVertical: Sizes.Size_16,
  },
  formContainer: {
    ...cardContainerStyle,
    gap: Sizes.Size_16,
    marginHorizontal: Sizes.Size_16,
  },
  flex_1: {
    flex: 1,
  },
  gap_8: {
    gap: Sizes.Size_8,
  },
  modalDescription: {
    ...textStyle,
    color: colors.primaryText,
    fontFamily: Typography.primary.regular,
    fontSize: Sizes.Size_14,
    lineHeight: Sizes.Size_22,
  },
  pt_32: {
    paddingTop: Sizes.Size_32,
  },
  pb_16: {
    paddingBottom: Sizes.Size_16,
  },
  rowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    ...textStyle,
  },
  surveyLabel: {
    ...textStyle,
    color: colors.primaryText,
    fontFamily: Typography.primary.bold,
    fontSize: Sizes.Size_14,
    lineHeight: Sizes.Size_20,
    marginBottom: Sizes.Size_12,
  },
  ph_16: {
    paddingHorizontal: Sizes.Size_16,
  },
  pv_16: {
    paddingVertical: Sizes.Size_16,
  },
  mv_16: {
    marginVertical: Sizes.Size_16,
  },
  pt_8: {
    paddingTop: Sizes.Size_8,
  },
  pt_4: {
    paddingTop: Sizes.Size_4,
  },
  mt_8: {
    marginTop: Sizes.Size_8,
  },
  mb_16: {
    marginBottom: Sizes.Size_16,
  },
})

export { commonStyles }
