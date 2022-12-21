import {React, useState} from 'react';

const Form = (props) => {
    const { handleAddItem } = props;
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(inputValue);

        handleAddItem({
            id: (+new Date).toString(),
            inputValue,
            done: false
        });

        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label className='label-input'>Regalos</label>
                <div className='form-input'>
                    <input type='text' className='text' value={inputValue}
                        onChange={e => setInputValue(e.target.value)}/>
                    <button className='button pink' disabled={inputValue ? "" : "disabled"}>
                        Agregar
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form;