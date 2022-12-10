import {React, useState} from 'react';
import '../App.css'

const Form = (props) => {
    const {handleAddItem} = props;
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
            <div className="form-gif">
                <label className='label-input'>Regalos</label>
                <div className="file-input">
                    <input type="text" className="text" value={inputValue}
                    onChange={e => setInputValue(e.target.value)}/>

                    <button className="button pink">
                        Agregar
                    </button>
                </div>

            </div>
        </form>
    )
}

export default Form;