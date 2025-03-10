import { Dimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const WINDOW_HEIGHT = Dimensions.get('window').height
export const WINDOW_WIDTH = Dimensions.get('window').width

/**
 * returns custom responsive font size according to device screen height
 * @param fontSize required font size
 */
const getFontSize = (fontSize: number): number => {
  const TARGET_WIDTH = 390

  if (WINDOW_WIDTH < TARGET_WIDTH) {
    return fontSize * 0.8
  }

  return RFPercentage(fontSize * 0.12)
}

export enum Sizes {
  Size_0 = 0,
  Size_0_24 = 0.24,
  Size_004 = 0.04,
  Size_03 = 0.3,
  Size_04 = 0.4,
  Size_05 = 0.5,
  Size_1 = getFontSize(1),
  Size_2 = getFontSize(2),
  Size_3 = getFontSize(3),
  Size_4 = getFontSize(4),
  Size_5 = getFontSize(5),
  Size_6 = getFontSize(6),
  Size_8 = getFontSize(8),
  Size_9 = getFontSize(9),
  Size_10 = getFontSize(10),
  Size_11 = getFontSize(11),
  Size_12 = getFontSize(12),
  Size_14 = getFontSize(14),
  Size_16 = getFontSize(16),
  Size_18 = getFontSize(18),
  Size_20 = getFontSize(20),
  Size_22 = getFontSize(22),
  Size_24 = getFontSize(24),
  Size_26 = getFontSize(26),
  Size_28 = getFontSize(28),
  Size_30 = getFontSize(30),
  Size_32 = getFontSize(32),
  Size_34 = getFontSize(34),
  Size_36 = getFontSize(36),
  Size_38 = getFontSize(38),
  Size_40 = getFontSize(40),
  Size_41 = getFontSize(41),
  Size_44 = getFontSize(44),
  Size_46 = getFontSize(46),
  Size_48 = getFontSize(48),
  Size_50 = getFontSize(50),
  Size_56 = getFontSize(56),
  Size_60 = getFontSize(60),
  Size_62 = getFontSize(62),
  Size_64 = getFontSize(64),
  Size_65 = getFontSize(65),
  Size_70 = getFontSize(70),
  Size_74 = getFontSize(74),
  Size_76 = getFontSize(76),
  Size_80 = getFontSize(80),
  Size_88 = getFontSize(88),
  Size_90 = getFontSize(90),
  Size_96 = getFontSize(96),
  Size_100 = getFontSize(100),
  Size_104 = getFontSize(104),
  Size_106 = getFontSize(106),
  Size_110 = getFontSize(110),
  Size_120 = getFontSize(120),
  Size_122 = getFontSize(122),
  Size_124 = getFontSize(124),
  Size_140 = getFontSize(140),
  Size_148 = getFontSize(148),
  Size_160 = getFontSize(160),
  Size_168 = getFontSize(168),
  Size_320 = getFontSize(320),
}
