
import { Link } from "react-router-dom"
import data from"../staticData/people.json"
import "../styles/components/People.css"

const People = () => {
  return (
    <div className='user-data'>
        <h1 className='user-data-heading'>User List</h1>
         <div className='user-data-item'>
         {
          data.users.map((item , index) => 
            <Link to={`/people/${item.id}`} key={index} className='user-data-item-list'>
                <img src={item.image} alt="" loading='lazy' />
                <h1>{item.name}</h1>
                <h2>{item.email}</h2>
                 <span>{item.phone}</span>
                 {/* <Link > <button>Click</button></Link> */}
                 {/* <p>{item.website}</p> */}
            </Link>

           
        )  
        }
         </div>
    </div>
  )
}

export default People