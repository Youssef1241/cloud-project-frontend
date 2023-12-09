import {useEffect, useState} from 'react';
import ProductList from '../components/products/ProductList';
import { useForm,register } from 'react-hook-form';
import Cart from '../components/cart/Cart';
import TextInput from '../components/TextInput';
const ProductPage=()=>{
    const{register,handleSubmit}=useForm();
    const[products,setProducts]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
        useEffect(()=>{
            const fetchAbortController=new AbortController();
            const fetchSignal=fetchAbortController.signal;
            const fetchProducts=async()=>{
                try{
                    const response =await fetch('http://localhost:3000/products?filter=all',{
                        signal:fetchSignal
                    });
                    const data=await response.json();
                    if(!response.ok){
                        throw Error(data.error);
                    }
                    setProducts(data.products)
                    setIsLoading(false);
                }catch(err){
                    console.log(err.message);
                }
                
        
            };
            fetchProducts();
        return()=>{
            fetchAbortController.abort();
        }},[]);
    if(isLoading){
        return <h3>Loading...</h3>
    }



    const submitHandler=async (formData)=> {
        try{
            let q=formData.name;
            const response=await fetch(`http://localhost:3000/products?filter=${q}`)
            const data=await response.json();
            if(!response.ok){
                throw Error(data.error);
            }
            setProducts(data.products)
            setIsLoading(false);
    
        }catch(err){
            console.log(err.message);
        }
    };
    
    return (<div>
        <form className="flex flex-col p-10 gap-5 bg-blue-900 w-fit" onSubmit={handleSubmit(submitHandler)}>
            <TextInput label="Search by Name" type="text" name="name" register={register} validation={{ required: true }}/>

            <button type='submit' className='bg-white rounded-xl my-4 py-2 px-8 self-center'>Go</button>
            
        </form>
        <ProductList products={products}/>
        <Cart.Cart/>
    </div>
    );
};



export default ProductPage;
