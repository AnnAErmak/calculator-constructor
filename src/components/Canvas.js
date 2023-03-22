import {useEffect, useState} from "react";
import {useDrop} from "react-dnd";
import { Reorder } from "framer-motion"


import {RiImageAddLine} from "react-icons/ri";
import Display from "./Display";
import Operations from "./Operations";
import Numbers from "./Numbers";
import Result from "./Result";

const items = [
    {id: 1, comp: <Display key={1}/>},
    {id: 2, comp: <Operations key ={2}/>},
    {id: 3, comp: <Numbers key ={3}/>},
    {id: 4, comp: <Result key ={4}/>},
]

const Canvas = () => {

    let [els, setEls] = useState([])

    const [, drop] = useDrop(() => ({
        accept: ['dis', 'oper', 'num', 'res'],
        drop: (item) => {
            const result = items.filter((el) => el.id === item.id )
            setEls( els => addedElements(els, item, result))

        },
    }))
    function addedElements(els, item, result){
        const elements = [...els]
        const res =elements.filter((el) => el.id === item.id)
        if(res.length !== 0) return elements
        return [...elements, result[0]]

    }

    return(
        <section className="canvas"
                 ref={drop}
                 style={{
                     position: 'relative',
                     width: '400px',
                     height: '600px',
                 }}
        >
            <Reorder.Group axis="y" values={els} onReorder={setEls}>
                {els.map(item =>(
                        <Reorder.Item key={item.id} value={item}>
                            {item.comp}
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