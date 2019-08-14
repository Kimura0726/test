import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Bar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import style from '../styles/AppBar.js'

class AppBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Bar className={classes.Bar} position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" >
                            React Sample
                        </Typography>
                    </Toolbar>
                </Bar>
            </div>
        );
    }
}

const propTypes = {
    classes: PropTypes.object.isRequired,
};

AppBar.propTypes = propTypes;

export default (withStyles(style)(AppBar));