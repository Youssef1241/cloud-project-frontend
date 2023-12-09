const CartItem=(props)=>{
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 h-16 bg-gray-200 rounded-md shadow-sm m-2"><h3>{props.product.name}</h3>
        <h2>{props.product.price}</h2></div>
    );
}
export default CartItem;