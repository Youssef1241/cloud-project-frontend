import ProductCard from "./ProductCard";
const ProductList=(props)=>{
    return (
        <div className="grid grid-cols-4 gap-4">
            {props.products.map((p)=>(
                <ProductCard.ProductCard product={p} key={p._id} />
            ))}
        </div>
        
    );
};
export default ProductList;