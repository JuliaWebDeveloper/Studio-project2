function PortfolioButtons({filteredPhotos}) {

    return(
        <div>
            <button className="portfolio-btn" onClick={() => filteredPhotos("#все")}>#все</button>
            <button className="portfolio-btn" onClick={() => filteredPhotos("#самолет")}>#самолет</button>
            <button className="portfolio-btn" onClick={() => filteredPhotos("#лодочка")}>#лодочка</button>
            <button className="portfolio-btn" onClick={() => filteredPhotos("#день рождения")}>#день рождения</button>
            <button className="portfolio-btn" onClick={() => filteredPhotos("#мальчик")}>#мальчик</button>
            <button className="portfolio-btn" onClick={() => filteredPhotos("#девочка")}>#девочка</button>
        </div>
    )

}
export default PortfolioButtons;