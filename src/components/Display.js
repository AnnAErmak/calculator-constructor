import {useDrag} from "react-dnd";
import {useState} from "react";

const Display = () => {
    let [isActive, setIsActive] = useState(true)

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'dis',
        item: { id: 1 },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                setIsActive(!isActive)
            }

        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return(
        <div className="display-wrap"
             draggable={isActive}
             ref={drag}
             style={{
                 opacity: isDragging ? 0.5 : 1,
                 cursor: 'move',
             }}
        >
            <input type="text" placeholder="0"/>
        </div>
    )
}
export default Display