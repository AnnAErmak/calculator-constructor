import {useEffect, useState} from "react";
import {useDrop} from "react-dnd";
import { Reorder } from "framer-motion"

import { v4 as uuidv4 } from 'uuid';
import {RiImageAddLine} from "react-icons/ri";
import Display from "./Display";
import Operations from "./Operations";
import Numbers from "./Numbers";
import Result from "./Result";

// const items = [
//     {id: 1, comp: <Display key={1}/>},
//     {id: 2, comp: <Operations key ={2}/>},
//     {id: 3, comp: <Numbers key ={3}/>},
//     {id: 4, comp: <Result key ={4}/>},
// ]

const Canvas = () => {

    let [els, setEls] = useState([])
    let [display, setDisplay] = useState([])

    const [, drop] = useDrop(() => ({
        accept: 'DnDPanel',
        drop: (item) => {
            //
            // const result = items.filter((el) => el.id === item.id )
            setEls( els => addedElements(els, item))

        },
    }))
    function addedElements(els, item){

        const elements = [...els]
        if(item.component.props.id === 1) {
            setDisplay([item.component])
            return elements
        }
        const res =elements.filter((el) => el.props.id === item.component.props.id)
        if(res.length !== 0) return elements
        return [...elements, item.component]

    }

    console.log(display)
    return(
        <section className="canvas"
                 ref={drop}
                 style={{
                     position: 'relative',
                     width: '400px',
                     height: '600px',
                 }}
        >
            <div>
                {display[0]}
            </div>

            <Reorder.Group axis="y" values={els} onReorder={setEls}>
                {!!els.length && els.map(item =>(
                        <Reorder.Item key={item.props.id} value={item}>
                            {item}
                        </Reorder.Item>
                    ))

                }
            </Reorder.Group>
                {/*<RiImageAddLine className="icon-img"/>*/}
            {/*<p>*/}
            {/*    <span className="canvas-header">Перетащите сюда</span>*/}
            {/*    <br/>*/}
            {/*    <span className="canvas-p">любой элемент</span>*/}
            {/*    <br/>*/}
            {/*    <span className="canvas-p">из левой панели</span>*/}
            {/*</p>*/}


        </section>
    )
}
export default Canvas