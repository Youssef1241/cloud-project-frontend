import Card from '../../UI/Card';
import CardActions from '../../UI/CardActions'
import CardHeader from '../../UI/CardHeader'
import CardBody from '../../UI/CardBody'
let cartList=[]
const ProductCard = (props) =>{

    return (
            <Card>
            <CardHeader>
                <img
                className="object-scale-down w-[400px]" src={props.product.imgURL}
                alt={props.product.name}
                />
            </CardHeader>
            <CardBody>
                <h3 className="font-bold">{props.product.name}</h3>
                <h5>{props.product.price} EGP</h5>
            </CardBody>
            <br></br>
            <CardActions>
                <button className="bg-black text-white py-3 px-10 font-bold rounded-xl" onClick={buttonHandler}>Add to Cart</button>
            </CardActions>
            <br></br>
            </Card>
    );
    function buttonHandler(){
        cartList.push(props.product);
        console.log(cartList)
    }
};
export default {ProductCard,cartList};
