import SlaiderButtons from "./SlaiderButtons";

function ClothesSlaider({clothesFor, image, previousClothes, nextClothes}) {
    
    return(
        <div className="clothes-container">
            <h4>{clothesFor}</h4>
            <img src={image} width="400px" alt="Clothes"/>
            <SlaiderButtons 
                previousClothes={previousClothes}
                nextClothes={nextClothes}
            />
        </div>
    )
}
export default ClothesSlaider;