import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import style from '../styles/Text.js'

class Text extends Component {
    constructor(props){
        super(props);
        this.state = {
            text : '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    render() {
        const { classes } = this.props;
        return (
            <TextField
                id="standard-name"
                label="Text"
                className={classes.textField}
                value={this.state.text}
                onChange={this.handleChange}
                margin="normal"
            />
        );
    }
}

const propTypes = {
    classes: PropTypes.object.isRequired,
    // text: PropTypes.string.isRequired,
};

Text.propTypes = propTypes;

export default (withStyles(style)(Text));