import { KeyboardArrowUpOutlined } from '@mui/icons-material';
import { Components, Theme } from '@mui/material';
import { ReactNode } from 'react';

export const MuiSelect: Components<Omit<Theme, 'components'>> = {
	MuiSelect: {
		defaultProps: {
			displayEmpty: true,
			defaultValue: undefined,
			renderValue: (value) =>
				value === undefined ? 'Select' : (value as ReactNode) || 'Select',
			IconComponent: (props) => <KeyboardArrowUpOutlined {...props} />,
		},
		styleOverrides: {
			root: ({ theme }) => ({
				fieldset: {
					borderColor: `${theme.palette.grey[600]} !important`,
				},
			}),
		},
		variants: [
			{
				props: { color: 'primary' },
				style: ({ theme }) => ({
					'[aria-expanded="true"] ~ fieldset, &.Mui-focused fieldset': {
						borderColor: `${theme.palette.primary.main} !important`,
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
