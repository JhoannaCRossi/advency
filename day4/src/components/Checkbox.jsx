import React, { Fragment } from 'react';
import '../App.css';

const Checkbox = (props) => {

    const {onChange, 
        data: {id, inputValue, done}
    } = props;

    return (
        <Fragment>
            <label className='list new-item'>
                <input type='checkbox' className='list_state' name={id} defaultChecked={done} onChange={onChange}
                />
                <span className='list_value'>{inputValue}</span>
                <span className="fa fa-trash trash"></span>

            </label>
        </Fragment>
    )
}

export default Checkbox;