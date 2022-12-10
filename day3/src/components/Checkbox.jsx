import React, { Fragment } from 'react';
import '../App.css';

const Checkbox = (props) => {

    const {
        onChange,
        data: {id, inputValue, done}
    } = props;

    return (
        <Fragment>
            <label className='list new-item'>
                <input className="list__state" name={id} 
                    type="checkbox" 
                    defaultChecked={done} 
                    onChange={onChange}/>
                <div className='list__value'>
                    {inputValue}
                </div>
            </label>
        </Fragment>
    )
}

export default Checkbox;