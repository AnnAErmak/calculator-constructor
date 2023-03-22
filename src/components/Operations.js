import {useDrag} from "react-dnd";

const Operations = () => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'oper',
        item: { id: 2 },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return(
        <div className="operations-wrap"
             ref={drag}
             style={{
                 opacity: isDragging ? 0.5 : 1,
                 cursor: 'move',
             }}
        >
            <button className="operation">/</button>
            <button className="operation">x</button>
            <button className="operation">-</button>
            <button className="operation">+</button>
        </div>
    )
}
export default Operations