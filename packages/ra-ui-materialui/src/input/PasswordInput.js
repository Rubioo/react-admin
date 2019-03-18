import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { addField, translate } from 'ra-core';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import TextInput from './TextInput';

class PasswordInput extends Component {
    state = {
        visible: this.props.initiallyVisible,
    };

    toggleVisibility = () => {
        this.setState(state => ({ visible: !state.visible }));
    };

    render() {
        const { translate, ...rest } = this.props;
        const { visible } = this.state;

        return (
            <TextInput
                {...rest}
                type={visible ? 'text' : 'password'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={translate('ra.input.password.toggle_visibility')}
                                onClick={this.toggleVisibility}
                            >
                                {visible ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        );
    }
}

PasswordInput.propTypes = {
    translate: PropTypes.func.isRequired,
    initiallyVisible: PropTypes.bool,
};

PasswordInput.defaultProps = {
    initiallyVisible: false,
};

export default compose(
    translate,
    addField,
)(PasswordInput);
