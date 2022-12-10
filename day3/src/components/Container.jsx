import {React, useState} from 'react';
import Form from './Form';
import GifList from './GifList';
import '../App.css';

const Container = () => {
    const [list, setList] = useState([]);
    
    const handleAddItem = addItem => {
        setList([...list, addItem]);
    }

    return (
        <div className='container'>
            <Form handleAddItem={handleAddItem}/>
            <GifList list={list} setList={setList}/>
        </div>
    )
}

export default Container;