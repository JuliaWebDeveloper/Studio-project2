import { useState } from "react";
import { data } from "../Portfolio/data";
import PhotosForPortfolio from "../Portfolio/PhotosForPortfolio";
import PortfolioButtons from "../Portfolio/PortfolioButtons";


function Portfolio() {

    const [photos, setPhotos] = useState(data);
    
    const chosenPhotos = (searchTeam) => {
    const newPhotos = data.filter
   ((element) => element.searchTeam.includes(searchTeam))
    setPhotos(newPhotos);
    }

    return(
        <div>
            <div className="portfolio-container">
                <PortfolioButtons filteredPhotos={chosenPhotos}/>
                <PhotosForPortfolio listOfPhotos={photos} />
            </div>
        </div>
    )
    
}
export default Portfolio;