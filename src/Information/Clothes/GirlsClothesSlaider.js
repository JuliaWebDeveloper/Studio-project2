// import { dataGirlsClothes } from "../Clothes/dataClothes";
// import { useState } from "react";

// function GirlsClothesSlaider() {

//     const [kidsClothes, setKidsClothes] = useState(0);

//     const { id, image } = dataGirlsClothes[kidsClothes];
    

//     const previousClothes = () => {
//         setKidsClothes((kidsClothes => {
//             kidsClothes --;
//             if(kidsClothes<0) {
//                 return dataGirlsClothes.length-1;
//             }
//             return kidsClothes;
//         }))
//     }

//     const nextClothes = () => {
//         setKidsClothes((kidsClothes => {
//             kidsClothes ++;
//             if(kidsClothes > dataGirlsClothes.length-1) {
//                 kidsClothes=0;
//             }
//             return kidsClothes;
//         }))
//     }

//     return(
//             <div className="clothes-container">
//                 <h4>Для девочки</h4>
//                 <img src={image} width="400px" alt="GirlsClothes"/>
//                 <div>
//                   <button className="cta" onClick={previousClothes}>
//                     <span>Предыдущий</span> 
//                   </button>
//                   <button className="cta" onClick={nextClothes}>
//                     <span>Следующий</span> 
//                   </button>
//                 </div>
//             </div>
//     )

// }
// export default GirlsClothesSlaider;