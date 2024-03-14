function SlaiderButtons({previousClothes,nextClothes}) {
   
    return(
        <div>
          <button className="cta" onClick={previousClothes}>
            <span>Предыдущий</span> 
          </button>
          <button className="cta" onClick={nextClothes}>
            <span>Следующий</span> 
          </button>
        </div>
    )

}
export default SlaiderButtons;