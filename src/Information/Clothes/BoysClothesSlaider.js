// import { dataBoysClothes } from "../Clothes/dataClothes";
// import { useState } from "react";

// function BoysClothesSlaider() {

//     const [kidsClothes, setKidsClothes] = useState(0);

//     const { id, image } = dataBoysClothes[kidsClothes];

//     const previousClothes = () => {
//         setKidsClothes((kidsClothes => {
//             kidsClothes --;
//             if(kidsClothes<0) {
//                 return dataBoysClothes.length-1;
//             }
//             return kidsClothes;
//         }))
//     }

//     const nextClothes = () => {
//         setKidsClothes((kidsClothes => {
//             kidsClothes ++;
//             if(kidsClothes > dataBoysClothes.length-1) {
//                 kidsClothes=0;
//             }
//             return kidsClothes;
//         }))
//     }

//     return(
    
//     <div className="clothes-container">
//         <h4>Для мальчика</h4>
//         <img src={image} width="400px" alt="BoysClothes"/>
//         <div>
//           <button className="cta" onClick={previousClothes}>
//             <span>Предыдущий</span> 
//           </button>
//           <button className="cta" onClick={nextClothes}>
//             <span>Следующий</span> 
//           </button>
//         </div>
//     </div>     
//     )

// }
// export default BoysClothesSlaider;