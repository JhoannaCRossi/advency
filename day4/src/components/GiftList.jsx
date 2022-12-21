import React from 'react';
import Checkbox from './Checkbox';

const GiftList = (props) => {
    const {list, setList} = props;

    const onChangeStatus = e => {
        const {name, checked} = e.target;
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }))
        const updateList2 = updateList.filter(item => !item.done);
        setList(updateList2);
    }

    const chk = list.map(item => (
        
        <Checkbox key={item.id} data={item} onChange={onChangeStatus}/>
    ));

    return (
        <div className='form-gift'>
            {list.length ? chk : "no tasks"}
        </div>
    )
}

export default GiftList;