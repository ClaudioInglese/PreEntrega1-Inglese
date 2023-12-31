import './CheckoutForm.css';
import { useState } from 'react';


const CheckoutForm = ({onSubmit}) => {
    

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        
        


        const userData = {
            name, phone, email           
        }       
        onSubmit(userData)
    }


    return (
        <div className='container-form'>
            <form className='form' onSubmit={handleConfirm}>
                <label>
                        Nombre
                    <input type='text' value={name} onChange={({target}) => setName(target.value)} />
                    
                </label>

                <label>
                        Telefono
                    <input type='text' value={phone} onChange={({target}) => setPhone(target.value)} />
                </label>

                <label>
                        Email
                    <input type='email' value={email} onChange={({target}) => setEmail(target.value)} />
                </label>

                <div>
                    <button className='button-create' type='submit'>Crear Orden</button>
                </div>                  
            </form>

        </div>
        
    )      
    

    
}




export default CheckoutForm;