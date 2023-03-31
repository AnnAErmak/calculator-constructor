import React from "react";
import {useState} from "react";
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {Reorder} from "framer-motion"
import {v4 as uuidv4} from 'uuid';

import {RiImageAddLine} from "react-icons/ri";
import DnDPanel from "./DnDPanel";
import {
    addCharacterToString,
    addEmptyString,
    delOneCharacter,
    getResultofOperation
} from "../store/reducers/ExpressionReducer";
import {changeActive} from "../store/reducers/dndPanelRedeucer";

const Canvas = () => {

    let [elements, setElements] = useState([])
    let [display, setDisplay] = useState([])

    const {expression} = useSelector(state => state.expressionReducer)
    const {isRuntime} = useSelector(state => state.modeReducer)

    const dispatch =useDispatch()

    const [{canDrop}, drop] = useDrop(() => ({
        accept: 'DnDPanel',
        drop: (item, monitor) => {

            setElements(elements => {
                if (item.id === 1) {
                    setDisplay(() => [{...item}])
                    return elements
                }

                const result = elements.filter(el => el.id === item.id)
                if (result.length !== 0) return elements
                return [...elements, {...item}]
            })
        },
        collect: (monitor) => (
            {
                canDrop: monitor.canDrop(),
            }
        )
    }))

    function deletedDisplayHandler (){
        setDisplay([])
        dispatch(changeActive(1))
    }
    function deletedDnDPanelHandler (id){
        setElements(elements.filter((el) => el.id !== id))
        dispatch(changeActive(id))
    }

    function handleClickBtnResult(){
        try{
            if(expression.search(/[^0-9*/+-.]/mi) !== -1) return
            const result = eval(expression).toFixed(2)
            dispatch(getResultofOperation(result))
        }catch (err){
            alert(`Выражение: ${expression} введено не корректно`)
            dispatch(addEmptyString())
        }
    }

    function createElement(item) {
        if (!Array.isArray(item.children)) {
            return (
                <div id={item.id} className='result-wrap'>
                    <button className={item.children.props.className}
                            disabled = {!isRuntime}
                            onClick={() =>handleClickBtnResult()}
                    >{item.children.props.children}</button>
                </div>
            )
        }
        if(item.id === 4){
            return(
                <div id={item.id} className='result-wrap'>
                    <button className="number"
                            disabled = {!isRuntime}
                            onClick={(e) =>dispatch(addEmptyString())}
                    >CLEAR</button>
                    <button className="number"
                            disabled = {!isRuntime}
                            onClick={(e) =>dispatch(delOneCharacter())}>&#8592;DEL</button>
                </div>
            )
        }
        return (
            <div id={item.id} className='numbers-wrap'>
                {item.children.map(btn => <button
                    key={uuidv4()}
                    className={btn.props.className}
                    disabled = {!isRuntime}
                    onClick={() =>dispatch(addCharacterToString(btn.props.symbol))}
                >{btn.props.children}</button>)}
            </div>
        )
    }

    let background = 'white'
    if (canDrop) {
        background = 'linear-gradient(0deg, #F0F9FF, #F0F9FF), linear-gradient(0deg, #C4C4C4, #C4C4C4)'
    }

    return (
        <section className="canvas"
                 ref={drop}
                 style={{
                     position: 'relative',
                     width: '248px',
                     height: '516px',
                     background,
                 }}
        >
            {!!display.length && (
                <div id={display[0].id} className='display-wrap' onDoubleClick={isRuntime? ()=>{} :() => deletedDisplayHandler()}>
                    <input type="text" placeholder={0} value={expression} disabled/>
                </div>
            )}

            <Reorder.Group  values={elements} onReorder={isRuntime? ()=>{} :setElements}>
                {!!elements.length && elements.map(item => (
                    <Reorder.Item dragListener={!isRuntime} key={item.id} value={item} onDoubleClick={isRuntime? ()=>{} :() => deletedDnDPanelHandler(item.id)}>
                        {createElement(item)}
                    </Reorder.Item>
                ))}
            </Reorder.Group>

            {
                !elements.length && !display.length && (<>
                        <RiImageAddLine className="icon-img"/>
                        <p>
                            <span className="canvas-header">Перетащите сюда</span>
                            <br/>
                            <span className="canvas-p">любой элемент</span>
                            <br/>
                            <span className="canvas-p">из левой панели</span>
                        </p>
                    </>
                )
            }
        </section>
    )
}
export default Canvas