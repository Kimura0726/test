import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '../components/AppBar'
import Button from '../components/Button';
import TextField from '@material-ui/core/TextField';
import ShowText from './ShowText';
import style from '../styles/Contents.js'
import * as SubmitActions from '../actions/submit.js';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submit() {
    const { actions } = this.props;
    actions.submit(this.state.text);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <header className={classes.bar}>
          <AppBar />
        </header>
        <div className={classes.showText}>
          <TextField
            id="standard-name"
            label="Text"
            value={this.state.text}
            className={classes.textField}
            onChange={this.handleChange}
            margin="normal"
          />
        </div>
        <Button onClick={this.submit} />
        <ShowText />
      </div>
    );
  }
}

const propTypes = {
  actions: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

Content.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    message: state.message,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SubmitActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Content));
