import { useParams } from "react-router-dom"
import data from"../staticData/people.json"

const SingleUser = () => {
    const {id} = useParams()
    const singleUser = data.users.find((user) => user.id === parseInt(id))
    // console.log(singleUser);

    //console.log('user', data);

  return (
        <div>
            <h1 className='user-data-heading'>Single User Information</h1>
            <div className='user-data-item'>
            <div className='user-data-item-list'>
                <img src={singleUser.image} alt="" loading='lazy' />
            </div>
            <div className="single-user-info">
                <p><strong>Name: </strong>{singleUser.name}</p>
                <p><strong>Email: </strong>{singleUser.email}</p>
                <p><strong>Phone: </strong>{singleUser.phone}</p>
                <p><strong>Website: </strong>{singleUser.website}</p>
            </div>
        </div>
        </div>
  )
}

export default SingleUser