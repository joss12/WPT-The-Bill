import React,{useState, useContext, useRef} from 'react';
import {Button, Form, Alert} from 'react-bootstrap';
import {EddyContext} from '../Context'

const Stage1 = () =>{

    const textInput = useRef();
    const context = useContext(EddyContext)


    const [err, setErr] = useState([false,''])

    const handleSubmit = (e) =>{
        e.preventDefault();
        const value = textInput.current.value;

        const validate = validateInput(value)

       if(validate){
        setErr([false, '']);
        context.addPlayer(value)
        textInput.current.value = ''
       }
    }

    const validateInput = (value) =>{
        
        if(value === ''){
            setErr([true, 'Sorry you need to add something'])
            return false
        }
        if(value.length <= 2){
            setErr([true, 'Sorry you need to add 3 char at least'])
            return false
        }

        return true
    }

    console.log(context.state)

    return (
        <>
            <Form onSubmit={handleSubmit} className='mt-4'>
                <Form.Group>
                    <Form.Control 
                       type='text'
                       placeholder='Add player name'
                       name='player'
                       ref={textInput}
                    />
                </Form.Group>

                {
                    err[0] ? <Alert>
                        {err[1]}
                    </Alert>: null
                }

                <Button className='miami' variant='primary' type='submit'>Add player</Button>

                {
                    context.state.players && 
                    context.state.players.length > 0 ?

                    <>
                    <hr />
                    <div>
                        <ul className='list-group'>
                        {
                            context.state.players.map((player, idx)=>(
                                <li key={idx} className="list-group-item 
                                d-flex justify-content-between 
                                align-items-center 
                                list-group-item-action">
                                {player}
                                <span className='badge-danger'
                                onClick={()=> context.removePlayer(idx) }
                                >
                                    X
                                </span>
                                </li>
                            ))
                        }
                        </ul>
                        <div
                        className='action_button'
                        onClick={()=>context.next()}
                        >
                        Next
                        </div>
                    </div>
                    </>: null
                }
            </Form>
        </>
    )
}
export default Stage1