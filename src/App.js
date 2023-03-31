import "./App.css";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import{AiOutlineEye} from "react-icons/ai"
import{TbSelector} from "react-icons/tb"
import Canvas from "./components/Canvas";
import DnDPanel from "./components/DnDPanel";
import {toggleMode} from "./store/reducers/modeReducer";

function App() {

    const dispatch =useDispatch()
    const {isRuntime} = useSelector(state => state.modeReducer)
    const {dndPanelList} = useSelector(state => state.dndPanelReducer)

  return(
      <div className="App container">
            <div className="container-btns">
                <button className={`btn-toggle ${isRuntime ? 'bg-white' : ''}`} onClick={() => dispatch(toggleMode())}><AiOutlineEye className="icon-eye"/>Runtime</button>
                <button className={`btn-toggle ${!isRuntime ? 'bg-white' : ''}`} onClick={() => dispatch(toggleMode())}><TbSelector className="icon-select"/>Constructor</button>
            </div>
          <div className="section-wrapper">
              <section className="elements" style={{visibility: !isRuntime ? 'visible' : 'hidden'}}>
                  <DnDPanel
                      classPanel={`display-wrap ${dndPanelList[0].isStatic ? 'static' : ''}`}
                      id={1}
                  >
                      <input type="text" placeholder={0} disabled draggable={false}/>
                  </DnDPanel>
                  <DnDPanel classPanel ={`operations-wrap ${dndPanelList[1].isStatic ? 'static' : ''}`} id={2} >
                      <button className="operation" disabled symbol='/'>/</button>
                      <button className="operation" disabled symbol='*'>x</button>
                      <button className="operation" disabled symbol='-'>-</button>
                      <button className="operation" disabled symbol='+'>+</button>
                  </DnDPanel>
                  <DnDPanel classPanel = {`numbers-wrap ${dndPanelList[2].isStatic ? 'static' : ''}`} id={3}>
                      <button className="number" disabled symbol='7'>7</button>
                      <button className="number" disabled symbol='8'>8</button>
                      <button className="number" disabled symbol='9'>9</button>
                      <button className="number" disabled symbol='4'>4</button>
                      <button className="number" disabled symbol='5'>5</button>
                      <button className="number" disabled symbol='6'>6</button>
                      <button className="number" disabled symbol='1'>1</button>
                      <button className="number" disabled symbol='2'>2</button>
                      <button className="number" disabled symbol='3'>3</button>
                      <button className="number stretch" disabled symbol='0'>0</button>
                      <button className="number" disabled symbol='.'>.</button>
                  </DnDPanel>
                  <DnDPanel classPanel ={`result-wrap ${dndPanelList[3].isStatic ? 'static' : ''}`}  id={4}>
                      <button className="number" disabled >CLEAR</button>
                      <button className="number" disabled >&#8592;DEL</button>
                  </DnDPanel>
                  <DnDPanel classPanel ={`result-wrap ${dndPanelList[4].isStatic ? 'static' : ''}`} id={5}>
                      <button className="number-btn" disabled >=</button>
                  </DnDPanel>
              </section>
                <Canvas isRuntime ={isRuntime}/>
          </div>

      </div>
      )
}

export default App;
