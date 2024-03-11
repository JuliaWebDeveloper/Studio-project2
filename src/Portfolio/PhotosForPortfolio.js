import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";


function PhotosForPortfolio({listOfPhotos}) {

    const [model, setModel] = useState(false);

    const [tempPhotoSrc, setTempPhotoSrc] = useState('');
    
    const getPhoto = (image) => {
        setTempPhotoSrc(image);
        setModel(true);
    }

    return(
        <div>
            <div className={model? "model open" : "model"}>
               <img src={tempPhotoSrc} alt="photo"/>
               <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className="container">
                {listOfPhotos.map((element) => {
                    const {id, searchTeam, image} = element;
                    return(
                    <div className="photo-container" key={id} onClick={() => getPhoto(image)}>
                        <img className="photo-portfolio" src={image} width="400" alt="photo"/>
                    </div>
                    )
                })}
            </div>
        </div>
    )

}
export default PhotosForPortfolio;