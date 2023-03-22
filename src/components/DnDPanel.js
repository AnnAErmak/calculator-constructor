import React, {useState} from 'react';
import {useDrag} from "react-dnd";
import { v4 as uuidv4 } from 'uuid';

const DnDPanel = ({ id, children, classPanel, draggable = false}) => {
    let [isActive, setIsActive] = useState(true)

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'DnDPanel',
        item: { component: <DnDPanel id={id} children={children} classPanel={classPanel}/>},
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
    return (
        <div className={classPanel}
             draggable={isActive}
             ref={drag}
             style={{
                 opacity: isDragging ? 0.5 : 1,
                 cursor: 'move',
             }}
        >
            {children}
        </div>
    );
};

export default DnDPanel;