import { StyleSheet } from 'react-native'

import { IS_IOS, TAB_BAR_HEIGHT } from '@constants'
import { Sizes, Typography, colors } from '@theme'

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    borderTopWidth: Sizes.Size_2,
    gap: Sizes.Size_4,
    paddingVertical: Sizes.Size_8,
    width: '100%',
  },
  label: {
    fontFamily: Typography.primary.bold,
    fontSize: Sizes.Size_12,
    lineHeight: Sizes.Size_20,
  },
  tabBar: {
    backgroundColor: colors.cardBackground,
    elevation: Sizes.Size_24,
    height: TAB_BAR_HEIGHT,
    margin: Sizes.Size_0,
    paddingBottom: IS_IOS ? Sizes.Size_10 : Sizes.Size_0,
    shadowColor: colors.shadow,
    shadowOffset: { height: Sizes.Size_4, width: Sizes.Size_0 },
    shadowOpacity: 0.25,
    shadowRadius: Sizes.Size_24,
  },
})

export { styles }
