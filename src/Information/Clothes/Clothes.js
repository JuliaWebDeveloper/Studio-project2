// import BoysClothesSlaider from "../Clothes/BoysClothesSlaider";
// import GirlsClothesSlaider from "../Clothes/GirlsClothesSlaider";
import { useState } from "react";
import { dataClothes } from "../Clothes/dataClothes";
import ClothesSlaider from "./ClothesSlaider";



function Clothes() {

    const [kidsClothes, setKidsClothes] = useState(0);
    const {id, image, clothesFor} = dataClothes[kidsClothes];


    const girlsClothes = dataClothes.filter(element =>
        element.clothesFor === "Для девочки"
        );
    const boysClothes = dataClothes.filter(element =>
        element.clothesFor === "Для мальчика"
        );

    console.log(girlsClothes);
    console.log(boysClothes);


    const previousClothes = () => {
        setKidsClothes((kidsClothes => {
            kidsClothes --;
            if(kidsClothes<0) {
                return dataClothes.length-1;
            }
            return kidsClothes;
        }))
    }

    const nextClothes = () => {
        setKidsClothes((kidsClothes => {
            kidsClothes ++;
            if(kidsClothes > dataClothes.length-1) {
                kidsClothes=0;
            }
            return kidsClothes;
        }))
    }

    

    return(
        <div className="clothes-container">
            <h1>Как подобрать одежду для фотосессии</h1>
            <ul>
                <li className="style-item">
                    <h4>Цветовая гамма</h4>
                    <p className="style-text">Образ для фотосессии начинается с выбора основного цвета, затем к нему добавляются остальные (не более 3-х цветов).
                     Предпочтения следует отдавать спокойным, нежным оттенкам.
                     Выбирая цветовую гамму одежды для фотосессии обратите внимание на такие оттенки, как: бежевый, песочный, молочный, серый, оливковый, все приглушенные оттенки зеленого, нежно-желтый, теплый оранжевый, персиковый, пудровые цвета, розовый, голубой, сиреневый. Также выигрышно будут смотреться какие-то небольшие элементы с блеском - бронзовым или золотым.
                    </p>
                </li>
                <li className="style-item">
                    <h4>Нет принтам</h4>
                    <p className="style-text">Как правило, на фотографиях лучше всего смотрится однотонная одежда. Лучше отказаться от принтов, крупных логотипов, надписей.</p>
                </li>
                <li className="style-item">
                    <h4>Гармоничность</h4>
                    <p className="style-text">Если участников фотосессии несколько, то их образы должны совпадать по стилистике, гармонировать между собой и с выбранной фотозоной.</p>
                </li>
            </ul>
            <p className="text">Для того, чтобы вам было легче сориентироваться, я сделал небольшую подборку образов для девочек и мальчиков.</p>
            <div className="container">
                <ClothesSlaider 
                clothesFor="Для девочки"
                image={girlsClothes.image}
                previousClothes={previousClothes}
                nextClothes={nextClothes}/>
               <ClothesSlaider 
                  clothesFor="Для мальчика"
                  image={boysClothes.image}
                previousClothes={previousClothes}
                nextClothes={nextClothes} />  
            </div>
            <p className="text">Если у вас есть сомнения по выбору одежды для фотосессии, я всегда рад помочь в выборе одежды для съемки.
                Учитывая все ваши пожелания и концепцию фотосессии, выбранной фотозоны, я предложу цветовую гамму и помогу с выбором одежды и образов.
            </p>
            <a href="https://wa.me/77777777777" className="btn center">Запись на фотосессию</a>
        </div>
    )

}
export default Clothes;