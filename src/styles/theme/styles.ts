import { Styles, mode } from '@chakra-ui/theme-tools'

// all global style overrides
const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode('#E8F6EF', 'black')(props),
      transitionDuration: '.7s',
    },
  }),
}

export default styles
