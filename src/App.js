import "./App.css";
import{AiOutlineEye} from "react-icons/ai"
import{TbSelector} from "react-icons/tb"
import {RiImageAddLine} from "react-icons/ri"

import Canvas from "./components/Canvas";


import DnDPanel from "./components/DnDPanel";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getResultofOperation,
    addCharacterToString,
    addEmptyString,
    delOneCharacter
} from "./store/reducers/ExpressionReducer";

function App() {

    const [isRuntime, setIsRuntime] =  useState(false)


    const dispatch =useDispatch()
    const {expression} = useSelector(state => state.expressionReducer)


    function handleClickBtnResult(){

        try{
            if(expression.search(/[^0-9*/+-.]/mi) != -1) return
            const result = eval(expression).toFixed(2)
            dispatch(getResultofOperation(result))
        }catch (err){
            alert(`Выражение: ${expression} введено не корректно`)
            dispatch(addEmptyString())
        }
    }

  return(
      <div className="App container">
            <div className="container-btns">
                <button className="btn-toggle "><AiOutlineEye className="icon-eye"/>Runtime</button>
                <button className="btn-toggle bg-white"><TbSelector className="icon-select"/>Constructor</button>
            </div>
          <div className="section-wrapper">
              <section className="elements">
                  <DnDPanel classPanel='display-wrap'  id={1}>
                      <input type="text" placeholder={0} value={expression} disabled/>
                  </DnDPanel>
                  <DnDPanel classPanel = 'operations-wrap'  id={2}>
                      <button className="operation" onClick={(e) =>dispatch(addCharacterToString('/'))}>/</button>
                      <button className="operation" onClick={(e) =>dispatch(addCharacterToString('*'))}>x</button>
                      <button className="operation" onClick={(e) =>dispatch(addCharacterToString('-'))}>-</button>
                      <button className="operation" onClick={(e) =>dispatch(addCharacterToString('+'))}>+</button>
                  </DnDPanel>
                  <DnDPanel classPanel = 'numbers-wrap'  id={3}>
                      <button className="number" onClick={(e) =>dispatch(addCharacterToString('7'))}>7</button>
                      <button className="number" onClick={(e) =>dispatch(addCharacterToString('8'))}>8</button>
                      <button className="number" onClick={(e) =>dispatch(addCharacterToString('9'))}>9</button>
                      <button className="number" onClick={(e) =>dispatch(addCharacterToString('4'))}>4</button>
                      <button className="number" onClick={(e) =>dispatch(addCharacterToString('5'))}>5</button>
                      <button className="number" onClick={(e) =>dispatch(addCharacterToString('6'))}>6</button>
                      <button className="number" onClick={(e) =>dispatch(addCharacterToString('1'))}>1</button>
                      <button className="number" onClick={(e) =>dispatch(addCharacterToString('2'))}>2</button>
                      <button className="number" onClick={(e) =>dispatch(addCharacterToString('3'))}>3</button>
                      <button className="number stretch" onClick={(e) =>dispatch(addCharacterToString('0'))}>0</button>
                      <button className="number" onClick={(e) =>dispatch(addCharacterToString('.'))}>.</button>
                  </DnDPanel>
                  <DnDPanel classPanel = 'result-wrap' id={4}>
                      <button className="number" onClick={(e) =>dispatch(addEmptyString())}>CLEAR</button>
                      <button className="number" onClick={(e) =>dispatch(delOneCharacter())}>&#8592;DEL</button>
                  </DnDPanel>
                  <DnDPanel classPanel = 'result-wrap' id={4}>
                      <button className="number-btn" onClick={(e) =>handleClickBtnResult()}>=</button>
                  </DnDPanel>
              </section>
                <Canvas/>
          </div>

      </div>
      )
}

export default App;
