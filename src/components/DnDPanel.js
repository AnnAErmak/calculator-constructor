import React from 'react';
import {useDrag} from "react-dnd";

import {useDispatch, useSelector} from "react-redux";
import {changeActive} from "../store/reducers/dndPanelRedeucer";

const DnDPanel = ({ id, children, classPanel}) => {

    const dispatch = useDispatch()

    const {dndPanelList} = useSelector(state => state.dndPanelReducer)

    const [, drag] = useDrag(() => ({
        type: 'DnDPanel',
        item: {
            id,
            children,
            classPanel
        },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                dispatch(changeActive(item.id))
            }

        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <div className={classPanel}
             draggable={!dndPanelList[id-1].isStatic}
             ref={drag}
             style={{
                 cursor: 'move',
             }}
        >
            {children}
        </div>
    );
};

export default DnDPanel;