import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  StackProps,
  VStack,
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

export const MotionBox = motion<BoxProps>(Box)
export const MotionFlex = motion<FlexProps>(Flex)
export const MotionVStack = motion<StackProps>(VStack)
