import './Categories.css'
import streetwear from './assets/STREETWEAR.png'
import oldmoney from './assets/OLDMONEY.png'
import tracksuits from './assets/TRACKSUITS.png'
import sportlife from './assets/SPORTLIFE.png'


function Categories() {
  return (
    <div className="Categories-container">
      <div className="Title">
        <h1>CATEGORIAS QUE <br />
            REFLETEM VOCÊ</h1>
      </div>
        <div className="Categories-list">
            <div className = "Category1">
            <a href="#"><img src={streetwear} alt="Streetwear" /></a>
            <h2>STREETWEAR</h2>
            </div>
            <div className = "Category2">
            <a href="#"><img src={oldmoney}   alt="Old Money" /></a>
            <h2>OLD MONEY</h2>      
            </div>
            <div className = "Category3">
            <a href="#"><img src={tracksuits} alt="Track Suits" /></a>
            <h2>TRACK SUITS</h2>
            </div>
            <div className = "Category4">
            <a href="#"><img src={sportlife} alt="Sport Life" /></a>
            <h2>SPORT LIFE</h2>
             </div>  
        </div>
        <div className="botao">
          <button className="vertodas">VER TODAS</button>  
        </div>
        
    </div>
  )
}


export default Categories