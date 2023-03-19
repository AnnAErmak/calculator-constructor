import "./App.css";
import{AiOutlineEye} from "react-icons/ai"
import{TbSelector} from "react-icons/tb"
import {RiImageAddLine} from "react-icons/ri"

function App() {
  return(
      <div className="App container">
            <div className="container-btns">
                <button className="btn-toggle "><AiOutlineEye className="icon-eye"/>Runtime</button>
                <button className="btn-toggle bg-white"><TbSelector className="icon-select"/>Constructor</button>
            </div>
          <div className="section-wrapper">
              <section className="elements">
                  <div className="display-wrap">
                      <input type="text" placeholder="0"/>
                  </div>
                  <div className="operations-wrap">
                      <button className="operation">/</button>
                      <button className="operation">x</button>
                      <button className="operation">-</button>
                      <button className="operation">+</button>
                  </div>
                  <div className="numbers-wrap">
                      <button className="number">7</button>
                      <button className="number">8</button>
                      <button className="number">9</button>
                      <button className="number">4</button>
                      <button className="number">5</button>
                      <button className="number">6</button>
                      <button className="number">1</button>
                      <button className="number">2</button>
                      <button className="number">3</button>
                      <button className="number stretch">0</button>
                      <button className="number">,</button>
                  </div>
                  <div className="result-wrap">
                      <button className="number-btn">=</button>
                  </div>
              </section>
              <section className="canvas">
                  <RiImageAddLine className="icon-img"/>
                  <p>
                      <span className="canvas-header">Перетащите сюда</span>
                      <br/>
                      <span className="canvas-p">любой элемент</span>
                      <br/>
                      <span className="canvas-p">из левой панели</span>
                  </p>
              </section>
          </div>

      </div>
      )
}

export default App;
