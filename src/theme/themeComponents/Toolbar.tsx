import { Components, Theme } from '@mui/material';

export const MuiToolbar: Components<Omit<Theme, 'components'>> = {
	MuiToolbar: {
		styleOverrides: { root: { minHeight: '75px !important' } },
	},
};
