import Single from "../../compnents/single/Single"
import "./Single_user.scss"
import { singleUser } from "../../data"

const Single_user = () => {

  //Fetch data and send to Single component

  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  )
}

export default Single_user