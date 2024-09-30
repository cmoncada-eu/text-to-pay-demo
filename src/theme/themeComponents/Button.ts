import { Components, Theme } from '@mui/material';

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		default: true;
	}

	interface ButtonPropsVariantOverrides {
		dashed: true;
	}
}

export const MuiButton: Components<Omit<Theme, 'components'>> = {
	MuiButton: {
		styleOverrides: {
			root: () => ({
				textTransform: 'capitalize',
				boxShadow: 'none',
			}),
			outlined: () => ({
				borderWidth: '2px !important',
			}),
		},
		defaultProps: {
			color: 'default',
		},
		variants: [
			{
				props: { variant: 'text', color: 'primary' },
				style: ({ theme }) => ({
					'&:hover': {
						backgroundColor: 'rgba(240, 247, 244, 1)',
						'*': {
							color: `${theme.palette.primary.main} !important`,
						},
					},
				}),
			},
			{
				props: { variant: 'outlined', color: 'primary' },
				style: ({ theme }) => ({
					borderColor: theme.palette.primary.main,
				}),
			},
			{
				props: { variant: 'dashed', color: 'primary' },
				style: ({ theme }) => ({
					borderColor: theme.palette.primary.light,
					borderStyle: 'dashed',
					color: theme.palette.primary.main,
					borderWidth: '1px',
				}),
			},
			{
				props: { size: 'large' },
				style: {
					padding: '16px',
					fontSize: '18px',
					fontWeight: '900',
					height: '56px',
				},
			},
			{
				props: { size: 'medium' },
				style: {
					padding: '8px',
				},
			},
		],
	},
};
