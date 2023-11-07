import { useState } from 'react';
import '../App.css'
import { validateEmail, validateForm } from '../utils/helpers';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        // Gets the event data from the input
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on input, set values
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleOnBlurName = (e) => {
        e.preventDefault();

        if (!name) {
            alert('Name field cannot be blank.')
        }
    }
    const handleOnBlurEmail = (e) => {
        e.preventDefault();

        if (!validateEmail(e.value)) {
            alert('Not a valid email. Try again.')
        }
    }


    return (
        <div className='app-container text-left app-background app-container p-2'>
            <form className='form'>
                <input
                    className='m-4 d-flex justify-content-start'
                    value={name}
                    name='name'
                    onBlur={handleOnBlurName}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Name'
                /><br />
                <input
                    className='m-4 d-flex justify-content-start'
                    value={email}
                    name='email'
                    onBlur={handleOnBlurEmail}
                    onChange={handleInputChange}
                    type='email'
                    placeholder='Email'
                /><br />
                <input
                    className='m-4 d-flex justify-content-start message-box align-top'
                    value={message}
                    name='message'
                    onBlur={handleOnBlurName}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Message'
                />
            </form>
        </div>
    )
}

export default Contact;