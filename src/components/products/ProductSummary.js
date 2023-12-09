const ProductSummary = (props) => {
    return (
        <Card>
            <CardHeader>
          <img
            src={props.product.imgUrl}
            alt={props.product.name}
            width="100"
          />
          </CardHeader>
          <CardBody>
            <div>Product ID: {props.product._id}</div>
            <div>Product Name: {props.product.name}</div>
            <div>Price: {props.product.price}</div>
            
            </CardBody>
            <CardActions>
                <button className="bg-white py-3 px 10 font-bold rounded-x1">
                    View
                </button>

            </CardActions>      
      </Card>
    );
  };
  
  export default ProductSummary;