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

import DnDPanel from "./components/DnDPanel";
import React from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {

  return(
      <div className="App container">
            <div className="container-btns">
                <button className="btn-toggle "><AiOutlineEye className="icon-eye"/>Runtime</button>
                <button className="btn-toggle bg-white"><TbSelector className="icon-select"/>Constructor</button>
            </div>
          <div className="section-wrapper">
              <section className="elements">
                  <DnDPanel classPanel='display-wrap'  id={1}>
                      <input type="text" placeholder="0" disabled/>
                  </DnDPanel>
                  <DnDPanel classPanel = 'operations-wrap'  id={2}>
                      <button className="operation">/</button>
                      <button className="operation">x</button>
                      <button className="operation">-</button>
                      <button className="operation">+</button>
                  </DnDPanel>
                  <DnDPanel classPanel = 'numbers-wrap'  id={3}>
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
                  </DnDPanel>
                  <DnDPanel classPanel = 'result-wrap' id={4}>
                      <button className="number-btn">=</button>
                  </DnDPanel>
              </section>
                <Canvas/>
          </div>

      </div>
      )
}

export default App;
