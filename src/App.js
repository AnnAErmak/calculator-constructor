import "./App.css";
import{AiOutlineEye} from "react-icons/ai"
import{TbSelector} from "react-icons/tb"
import {RiImageAddLine} from "react-icons/ri"

import { useDrag, useDrop } from 'react-dnd'
import {useState} from "react";

import Display from "./components/Display";
import Operations from "./components/Operations";
import Canvas from "./components/Canvas";
import Numbers from "./components/Numbers";
import Result from "./components/Result";




function App() {

  return(
      <div className="App container">
            <div className="container-btns">
                <button className="btn-toggle "><AiOutlineEye className="icon-eye"/>Runtime</button>
                <button className="btn-toggle bg-white"><TbSelector className="icon-select"/>Constructor</button>
            </div>
          <div className="section-wrapper">
              <section className="elements">
                  <Display />
                  <Operations />
                  <Numbers/>
                  <Result/>
              </section>
                <Canvas/>
          </div>

      </div>
      )
}

export default App;
