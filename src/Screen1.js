import React, {useContext, useState} from 'react'
import { Handler, MyContext } from './Context';

const Screen1 = () => {
    
    const {username,changeUseranme} = useContext(MyContext);

    const handleChange = (e) => {
        changeUseranme(e.target.value);
    }
    return (
        <div>
            <h1>Screen 1</h1>
            <form>
                <input type='text' name='username' onChange={handleChange}/>
                <button>change username</button>
            </form>
        </div>
    )
}

export default Screen1;