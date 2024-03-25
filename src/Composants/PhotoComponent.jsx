import { useEffect, useState } from "react"
import axios from 'axios'
import logo from "../../public/images/K.png"

const PhotoComponent = () => {
    // eslint-disable-next-line no-unused-vars
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response);
                setPhotos(response.data);
            })
            .catch(error => {
                console.log(error)
            });
    },[]);

    return (
        <div className="container-fluid">
            {/* {errormsg}*/}
            <h1 className="mt-5 mb-4">Photos</h1>
            <img src={logo} alt="logo" />
            <div className="row">
             {photos.map(photo =>(
                <div className="col-lg3- col-md-4 col-sm-6 mb-4" key={photo.id}>
                    <div className="card">
                        <img className="card-img-top" src={photo.thumbnailUrl} alt={photo.title}/>
                        <div className="card-body">
                            <h5 className="card-title">{photo.title}</h5>
                            <p className="card-text">ID: {photo.id}</p>
                        </div>

                    </div>

                </div>
             ))

             }   
            </div>
        </div>
    );
}
export default PhotoComponent;