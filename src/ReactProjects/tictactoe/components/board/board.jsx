import React,{useState} from "react";
import styles from './board.module.scss';
import Button from '../button/button.jsx'

const Board = () =>{ 
    const [boxes, setBoxes] = useState(Array(9).fill(null));

    
    return (
        <section className={styles.board}>
            {boxes.map((box,index)=>(
                <Button box={box} index={index}/>
            ))}
        </section>
    )
}
export default Board;