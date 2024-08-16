function BestItems({favoriteData}) {
    return(
        <div className="container">
        <p className="best-title"> 베스트상품</p>
      <div className="best-container">
          {
            favoriteData.list.map((item)=>{
              return(
                <div key={item.id}> 
                  <img src={item.images} alt="item-images"/>
                  <div className="item-detail">
                  <p> {item.name}</p>
                  <p className="item-price">{item.price}원 </p>
                  <p className="item-like"> 🤍 {item.favoriteCount}</p>
                  </div>
                </div>
              )
            })
          }
      </div>
    </div>
    )
}

export default BestItems