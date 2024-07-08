import { extendTheme } from '@chakra-ui/react';

const theme = {
  fonts: {
    heading: `'Butler', sans-serif`,
    body: `'Newsreader', serif`,
    headingAlternative: `'Poppins', serif`,
  },
  colors: {
    bgPrimary: '#FEFEFE',
    bgSecondary: '#F9F7F4',
    bgAlternative: '#cdc1b1',
    bgStepRSVP: '#997a5e',
    mainColorText: '#1A1B1D',
    secondaryColorText: '#1A1B1D',
    alternativeColorText: '#FEFEFE',
    'theme-bgPrimaryText': '#1A1B1D',
    'theme-bgPrimary': '#FEFEFE',
    'theme-bgSecondary': '#F9F7F4',
    'theme-bgAlternative': '#cdc1b1',
    'button-secondary-500': '#F9F7F4',
    'button-secondaryDark-500': '#cdc1b1',
  },
};

export default extendTheme(theme);
