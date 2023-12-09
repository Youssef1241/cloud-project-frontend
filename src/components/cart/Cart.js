import ProductCard from "../products/ProductCard";
import CartItem from "./CartItem";

const Cart=()=>{
    return (
        <div className="flex flex-wrap">
            {ProductCard.cartList.map((p)=>(
                <CartItem product={p} key={p._id} />
            ))}
        </div>
        
    );

};
export default {Cart};