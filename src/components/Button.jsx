import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ContainedButton from '@material-ui/core/Button';
import style from '../styles/Button.js'

class Button extends Component {
    render() {
        const { classes, onClick } = this.props;
        return (
            <div className={classes.button}>
                <ContainedButton variant="contained" color="primary" onClick={onClick} >
                    SUBMIT
                </ContainedButton>
            </div>
        );
    }
}

const propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

Button.propTypes = propTypes;

export default (withStyles(style)(Button));