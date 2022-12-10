import React from 'react';
import Checkbox from './Checkbox';
import '../App.css';


const GifList = (props) => {
    const { list, setList } = props;

    const onChangeStatus = e => {
        const {name, checked} = e.target;
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }))
        setList(updateList);
    }

    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));

    return (
        <div className='form-gift'>
            {list.length ? chk : "No Gifts"}
        </div>
    )
}

export default GifList;