import { dataClothes } from "../Clothes/dataClothes";
import ClothesSlaider from "./ClothesSlaider";
import "./style.css";
import "../../App.css";



function Clothes() {

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
                {
                    dataClothes.map((item) => {
                        const {id, image, clothesFor} = item;
                        return (
                            <div className="clothes-container" key={id}>
                                <h4>{clothesFor}</h4>
                                <div>
                                   <ClothesSlaider image={image}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <p className="text">Если у вас есть сомнения по выбору одежды для фотосессии, я всегда рад помочь в выборе одежды для съемки.
                Учитывая все ваши пожелания и концепцию фотосессии, выбранной фотозоны, я предложу цветовую гамму и помогу с выбором одежды и образов.
            </p>
            <a href="https://wa.me/77777777777" className="btn center">Запись на фотосессию</a>
            <p className="fn">Этот сайт создан исключительно в образовательных целях. Pазработчик не имеет никаких прав на контент с фотографиями детской одежды KIABI. По вопросам обращайтесь по почте juliawebdev1@gmail.com</p>
        </div>
    )

}
export default Clothes;