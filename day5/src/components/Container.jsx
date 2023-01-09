import {React, useState} from 'react';
import Form from './Form';
import GiftList from './GiftList';
import '../App.css'

const Container = () => {
    const [list, setList] = useState([]);

    const handleAddItem = addItem => {
        setList([...list, addItem])
    }

    return (
        <div className='container'>
            <Form handleAddItem={handleAddItem}/>
            <GiftList list={list} setList={setList}/>
        </div>
    )
}

export default Container;