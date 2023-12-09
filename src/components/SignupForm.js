import { useForm } from 'react-hook-form';
import FormInputError from './FormInputError';
import TextInput from './TextInput';
const SignupForm=(props)=>{
    const{register,handleSubmit,formState}=useForm();
    return (
        <form className="flex flex-col p-10 gap-5 bg-gray-800 w-fit" onSubmit={handleSubmit(submitHandler)}>
            <TextInput label="Name" type="text" name="name" register={register} validation={{ required: true }}/>
            {formState.errors.username &&(<FormInputError>Name must not be empty.</FormInputError>)}
            <TextInput label="Username" type="text" name="username" register={register} validation={{ required: true }}/>
            {formState.errors.username &&(<FormInputError>Username must not be empty.</FormInputError>)}
            <TextInput label="Password" type="password" name="password" register={register} validation={{required:true}}></TextInput>
            {formState.errors.username &&(<FormInputError>Password must not be empty.</FormInputError>)}
            <button type='submit' className='bg-white rounded-xl my-4 py-2 px-8 self-center'>Sign Up</button>
            
        </form>
    );
};
const submitHandler=async (formData)=> {
    try{
        const response=await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
            
        });
        const data=await response.json();
        if(!response.ok){
            throw Error(data.error);
        }
    }catch(err){
        console.log(err.message);
    }
};
export default SignupForm;