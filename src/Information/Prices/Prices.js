import { dataPrices } from "../Prices/dataPrices";

function Prices() {

    return(
        <div className="main-price-container" >
            <h1>Цены</h1>
            <div className="container">
            {dataPrices.map((element) => {
            const { id, name, price, image, requisites, photoZone, photos, time, period } = element;
                return(
                    <div key={id}>
                        <div className="price-container">
                            <h4>{name}</h4>
                            <h2>{price}</h2>
                            <ul>
                               <li>{image}</li>
                               <li>{requisites}</li>
                               <li>{photoZone}</li>
                               <li>{photos}</li>
                               <li>{time}</li>
                               <li>{period}</li>
                            </ul>
                            <a href="https://wa.me/77777777777" className="btn">Запись на фотосессию</a>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
        
    

}
export default Prices;


