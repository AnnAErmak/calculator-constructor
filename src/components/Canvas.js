import {useEffect, useState} from "react";
import {useDrop} from "react-dnd";
import {Reorder} from "framer-motion"


const Canvas = () => {

    let [els, setEls] = useState([])
    let [display, setDisplay] = useState([])

    const [, drop] = useDrop(() => ({
        accept: 'DnDPanel',
        drop: (item) => {
            setEls(els => addedElements(els, item))
        },
    }))

    function addedElements(els, item) {
        const elements = [...els]

        if (item.component.props.id === 1) {
            setDisplay([item.component])
            return elements
        }
        const res = elements.filter((el) => el.props.id === item.component.props.id)

        if (res.length !== 0) return elements

        return [...elements, item.component]
    }

    return (
        <section className="canvas"
                 ref={drop}
                 style={{
                     position: 'relative',
                     width: '400px',
                     height: '600px',
                 }}
        >
            {display[0]}
            <Reorder.Group axis="y" values={els} onReorder={setEls}>
                {!!els.length && els.map(item => (
                    <Reorder.Item key={item.props.id} value={item}>
                        {item}
                    </Reorder.Item>
                ))}
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