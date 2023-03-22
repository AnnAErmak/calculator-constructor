import React from 'react';
import {useDrag} from "react-dnd";

const Result = () => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'res',
        item: { id: 4 },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return (
        <div className="result-wrap"
             ref={drag}
             style={{
                 opacity: isDragging ? 0.5 : 1,
                 cursor: 'move',
             }}
        >
            <button className="number-btn">=</button>
        </div>
        );
};

export default Result;