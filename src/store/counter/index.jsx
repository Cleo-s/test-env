import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button/index';

import './counter.css';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div className='counter-div'>
            <Button onClick={() => dispatch({
                type: 'DECREMENT'
            })} label={'Decrement'} className={'decrement'}/>
            <p classnName='counter-pragraph'>Count: {count}</p>
            <Button onClick={() => dispatch({
                type: 'INCREMENT'
            })} label={'Increment'} className={'increment'}/>
        </div>
    )
}

export default Counter;