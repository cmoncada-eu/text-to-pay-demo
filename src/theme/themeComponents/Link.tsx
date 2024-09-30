import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { LinkProps as LinkPropsMui } from '@mui/material/Link';
import { Components, Theme } from '@mui/material';

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<NavLinkProps, 'to'> & { href: NavLinkProps['to'] }
>(function LinkBehaviorComponent(props, ref) {
  const { href, ...other } = props;
  return <NavLink ref={ref} to={href} {...other} />;
});

export const MuiRouting: Components<Omit<Theme, 'components'>> = {
  MuiLink: {
    defaultProps: {
      component: LinkBehavior,
    } as LinkPropsMui,
  },
  MuiButtonBase: {
    defaultProps: {
      LinkComponent: LinkBehavior,
    },
  },
};
