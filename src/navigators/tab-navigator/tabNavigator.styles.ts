import { StyleSheet } from 'react-native'

import { colors, Sizes, Typography } from '@theme'
import { SCREEN_WIDTH } from '@constants'

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    width: SCREEN_WIDTH / 3 - 8,
    paddingTop: Sizes.Size_20,
  },
  label: {
    fontFamily: Typography.primary.medium,
    fontSize: Sizes.Size_14,
    lineHeight: Sizes.Size_20,
  },
  tabBar: {
    backgroundColor: colors.background,
    height: Sizes.Size_64,
    margin: Sizes.Size_0,
  },
})

export { styles }
