import React, { PureComponent, Fragment } from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { OrganizationCard } from './organizationCard/OrganizationCard';

export class OrganizationList extends PureComponent {

    render() {
        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <OrganizationCard></OrganizationCard>
                <OrganizationCard></OrganizationCard>
                <OrganizationCard></OrganizationCard>
            </Fragment>);
    }
}