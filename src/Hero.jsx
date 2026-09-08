import "./Hero.css"
import boy from "./assets/heroimg.png"

function Hero() {
  return (
    <div className="Hero-container">
    <div className="First-container">
      <h1>DESCUBRA O 
        SEU  <br />
        VERDADEIRO 
         ESTILO</h1>
    </div>

          <div className="Boy-container">
        <img src={boy} alt="Modelo usando roupas" />
      </div>

    <div className="Second-container">
      <h1>EM UM 
        LUGAR QUE <br />
        POSSUÍ 
         TODOS ELES</h1>
    </div>

    <h2 className="Hero-flow">
        FLOW
    </h2>

    </div>
  );

  
}


export default Hero