import React from 'react';
import PropTypes from 'prop-types';

DateTime.defaultProps = {
    now: true,
}

DateTime.propTypes = {
    now: PropTypes.bool,
    text: (props, propName, componentName) => {
        if ((props['now'] === undefined && (props[propName] === undefined))) {
            if(typeof(props[propName]) != 'string') {
                return new Error("Prop 'text' must be a `string`! Was provided type: " + typeof(props[propName]));
            } else {
                return new Error("Prop 'text' is required when prop 'now' is not used!");
            }
        }
    },
    classes: PropTypes.string,
}

const getFriendlyDate = () => {
    let date = new Date(Date.now());
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}, ${date.getFullYear()}`
}

export default function DateTime({ now = true, text, classes }) {
    return <div className={`f6 dib ttu tracked ${classes}`}>{now ? <small>{getFriendlyDate()}</small> : text}</div>
}