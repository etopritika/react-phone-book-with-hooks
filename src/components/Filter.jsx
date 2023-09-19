import React from 'react';
import PropTypes from 'prop-types';
import css from "../css-modules/Filter.module.css";

export default function Filter({inputValue, onChange}) {
    return(
        <div className={css.filter__container}>
            <label>
                Find contacts by name
                <input type="text" name='filter' value={inputValue} onChange={onChange}/>
            </label>
        </div>
    )
}

Filter.propTypes = {
    inputValue: PropTypes.string,
    onChange: PropTypes.func,
}