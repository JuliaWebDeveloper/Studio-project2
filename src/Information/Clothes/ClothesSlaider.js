import { useState } from "react";
import SlaiderButtons from "./SlaiderButtons";

function ClothesSlaider({ image }) {

    const [kidsClothes, setKidsClothes] = useState(0);

    const previousClothes = () => {
        setKidsClothes(kidsClothes => {
            kidsClothes --;
            if (kidsClothes < 0) return image.length - 1;
            return kidsClothes;
        })
    }

    const nextClothes = () => {
        setKidsClothes(kidsClothes => {
            kidsClothes ++;
            if(kidsClothes > image.length-1) {
                kidsClothes=0;
            }
            return kidsClothes;
        })
    }
    
    return(
        <div className="clothes-container">
            <img src={image[kidsClothes]} width="400px" alt="Clothes"/>
            <SlaiderButtons 
                previousClothes={previousClothes}
                nextClothes={nextClothes}
            />
        </div>
    )
}
export default ClothesSlaider;