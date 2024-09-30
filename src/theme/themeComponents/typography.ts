import { TypographyOptions } from '@mui/material/styles/createTypography';

type TypographyVariants =
  | 'body-xl'
  | 'body-xl-bold'
  | 'body-bold'
  | 'body-s'
  | 'body-m'
  | 'body-l'
  | 'body-l-bold'
  | 'body-m-bold'
  | 'body-semibold'
  | 'body-small-bold'
  | 'body-text'
  | 'caption-bold'
  | 'title'
  | 'title-h4'
  | 'title-h3'
  | 'headline-logo';

type TypographyOverrides<T = true> = {
  [key in TypographyVariants]: T;
};

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends TypographyOverrides {}
}

interface ExtendedTypographyOptions
  extends TypographyOptions,
    TypographyOverrides<React.CSSProperties> {}

export const typography: ExtendedTypographyOptions = {
  fontFamily: 'Lato, sans-serif',
  'body-xl': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  'body-xl-bold': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: '150%',
  },
  'body-bold': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  'body-text': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  'body-s': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
    letterSpacing: '0.25px',
  },
  'body-m': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  'body-l': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  'body-l-bold': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  'body-m-bold': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: '24px',
  },
  'body-small-bold': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
  },
  'body-semibold': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
  },
  'caption-bold': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px',
    letterSpacing: '1.071px',
  },
  'headline-logo': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '26px',
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: '32px',
  },
  h6: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '32px',
    letterSpacing: '0.25px',
  },
  h5: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: '32px',
    letterSpacing: '0.25px',
  },
  h3: {
    fontFamily: 'Lato, sans-serif',
    fontSize: '50px',
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: '58px',
    letterSpacing: '0.25px',
  },
  title: {
    fontFamily: 'Lato, sans-serif',
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontSize: '34px',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '37px',
    letterSpacing: '0.6px',
  },
  'title-h4': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '34px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '37px',
    letterSpacing: '0.6px',
  },
  'title-h3': {
    fontFamily: 'Lato, sans-serif',
    fontSize: '50px',
    fontWeight: '900',
    lineHeight: '58px',
    letterSpacing: '-0.5px',
  },
};
