import Single from "../../compnents/single/Single"
import { singleProduct } from "../../data"
import "./single_product.scss"

const Single_product = () => {

  //Fetch data and send to Single component
  return (
    <div className="product">
      <Single {...singleProduct}/>        
    </div>
  )
}

export default Single_product