import React,{useContext} from 'react';
import {EddyContext} from '../Context'

const Stage2 = () =>{

    const context = useContext(EddyContext)

    return (
        <>
            <div className="result_wrapper">
                <h3>The looser is: </h3>
                <div>{context.state.result}</div>
            </div>
            <div className='action_button'
            onClick={()=> context.resetGame()}>
            START OVER
            </div>
            <div className='action_button btn_2'
            onClick={()=> context.getNewLooser()}>
            GET NEW LOOSER
            </div>
        </>
    )
}
export default Stage2