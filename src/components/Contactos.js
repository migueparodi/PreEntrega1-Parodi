import { useForm } from 'react-hook-form';


const Contactos = () => {
    
    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }
    
    return(
        <div className='container'>
            <h1 className='main-title'>Contactos</h1>
            <form className='formulario' onSubmit={handleSubmit(enviar)}>
                <input type='text' placeholder='Ingrese Su Nombre' {...register("nombre")} />
                <input type='email' placeholder='Ingrese Su Email' {...register("email")} />
                <input type='phone' placeholder='Ingrese Su Celular' {...register("telefono")} />

                <button className='enviar' type='submit'>Enviar</button>
            </form>

        </div>
    ) 
}

export default Contactos