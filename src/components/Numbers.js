import React from 'react';
import {useDrag} from "react-dnd";

const Numbers = () => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'num',
        item: { id: 3 },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))
    return (
        <div className="numbers-wrap"
             ref={drag}
             style={{
                 opacity: isDragging ? 0.5 : 1,
                 cursor: 'move',
             }}
        >
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
        </div>
    );
};

export default Numbers;