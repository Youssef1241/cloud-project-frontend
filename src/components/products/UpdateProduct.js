import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import AuthContext from "../../store/authContext";
import FormInputError from "../../UI/form/FormInputError";
import TextInput from "../../UI/form/TextInput";
import SelectInput from "./../../UI/form/SelectInput";

const UpdateProduct = (props) => {
  const [price, setPrice] = useState(10);
  const { register, handleSubmit, formState } = useForm();
  const authContext = useContext(AuthContext);
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

        <button type="Update" className="form-button">
          {changeType} Product
        </button>
};
}
export default UpdateProductForm;