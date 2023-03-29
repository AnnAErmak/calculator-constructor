import React, {useState} from 'react';
import {useDrag} from "react-dnd";
import { v4 as uuidv4 } from 'uuid';
import {addEmptyString, getResultofOperation} from "../store/reducers/ExpressionReducer";
import {useDispatch, useSelector} from "react-redux";
import {changeActive} from "../store/reducers/dndPanelRedeucer";

const DnDPanel = ({ id, children, classPanel, draggable = false}) => {
     // let [isStatic, setIsStatic] = useState('')
    const {expression} = useSelector(state => state.expressionReducer)
    const {isActive} = useSelector(state => state.dndPanelReducer)
    const dispatch = useDispatch()
    const [{isDragging}, drag] = useDrag(() => ({
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
                // setIsStatic('static')
            }

        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))


    // function handleClickBtnResult(e){
    //     if (e.button) console.log(e.button)
        // try{
        //     if(expression.search(/[^0-9*/+-.]/mi) !== -1) return
        //     const result = eval(expression).toFixed(2)
        //     dispatch(getResultofOperation(result))
        // }catch (err){
        //     alert(`Выражение: ${expression} введено не корректно`)
        //     dispatch(addEmptyString())
        // }
    // }

    return (
        <div className={classPanel}
             draggable={false}

             ref={drag}
             // style={{
             //     // opacity: isDragging ? 0.5 : 1,
             //     cursor: 'move',
             //     // draggable: 'false'
             // }}
             // onClick={(e) =>handleClickBtnResult(e)}
        >
            {children}
        </div>
    );
};

export default DnDPanel;