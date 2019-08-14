import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import style from '../styles/ShowText.js'

class ShowText extends Component {
    render() {
        const { classes, message } = this.props;
        return (
            <div className={classes.showText}>
                <TextField
                    id="standard-uncontrolled"
                    label="Result"
                    value={message}
                    className={classes.textField}
                    margin="normal"
                />
            </div>
        );
    }
}

const propTypes = {
    classes: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    return {
        message: state.message,
    }
}

ShowText.propTypes = propTypes;

export default connect(mapStateToProps, null)(withStyles(style)(ShowText));