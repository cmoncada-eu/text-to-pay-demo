import { Components, Theme } from '@mui/material';

export const MuiTextField: Components<Omit<Theme, 'components'>> = {
	MuiTextField: {
		defaultProps: {
			variant: 'outlined',
			color: 'primary',
			InputLabelProps: { shrink: true },
			onWheel: (e) => e.target instanceof HTMLElement && e.target.blur(),
		},
		styleOverrides: {
			root: ({ theme }) => ({
				fieldset: {
					borderColor: `${theme.palette.grey[600]}`,
				},
			}),
		},
		variants: [
			{
				props: { variant: 'outlined', color: 'primary' },
				style: ({ theme }) => ({
					boxShadow: '0px 8px 32px 0px rgba(16, 39, 60, 0.05)',
					'& ::placeholder': {
						color: 'rgba(89, 89, 89, 1) !important',
						opacity: '1 !important',
					},
					'.Mui-focused': {
						fieldset: {
							borderColor: `${theme.palette.primary.main} !important`,
						},
					},
					'&:hover': {
						fieldset: {
							borderColor: `${theme.palette.primary.main} !important`,
						},
					},
				}),
			},
		],
	},
};
