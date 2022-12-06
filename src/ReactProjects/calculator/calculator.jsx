import styles from './calculator.module.scss';
import React,{useReducer} from 'react';
import {btns} from "./calculator"
const ACTIONS = {
    ADD_DIGIT: "addDigit",
    DELETE_DIGIT:"deleteDigit",
    CLEAR:"clear",
    CHOOSE_OPERATION:"chooseOperation",
    EQUALS:'equals'
}
const Calculator = () => {
    const reducer =(state,{type,payload})=>{
        switch(type){
            case ACTIONS.ADD_DIGIT:
                if(state.overwrite){
                    return{
                        present: payload.btn,
                        overwrite:false
                    }
                }
                if(state.present === 0 && payload.btn === 0) {
                    return {
                        state
                    }
                }
                if(state.present === "." && state.present.includes(".")){
                    return state
                }
                return {
                    ...state,
                    present: `${state.present || "" }${payload.btn}`
                    
                }
            case ACTIONS.CLEAR:
                return {}
            case ACTIONS.CHOOSE_OPERATION:
                if(state.present == null && state.past == null)
                return state
                if(state.past == null){
                    return {
                        ...state,
                        past: state.present,
                        operation: payload.operation,
                        present:null,
                        overwrite:false
                    }
                }
                return{
                    ...state,
                    present: evaluate(state),
                    past:null,
                    // present: null,
                    // past: evaluate(state),
                    operation: null,
                    overwrite: true
                }
            case ACTIONS.DELETE_DIGIT:
                if(state.present === null || state.past === null || state.operation === null){
                    return state
                }
                else if(state.past !== null && state.operation !== null){
                    return{
                        ...state,
                        operation: null,
                        past: state.past.slice(0,-1)
                    }
                }
                return{
                    ...state,
                    present: state.present.slice(0,-1)
                }
                
        }
    }
    function evaluate ({operation,past,present}){
        const prev = past
        const  current = present
        if(isNaN(prev) || isNaN(current)) return ""
        let eva = 0;
        switch(operation){
            case "/":
                eva = prev / current
                break;
            case "x":
                eva = prev * current
                break;
            case "+":
                eva = (+prev) + (+current)
                break;
            case "-":
                eva = prev - current
        }
        return eva
    }
    const [{present,past,operation},dispatch]=useReducer(reducer,{})
    return (
        <main className={styles.mainContainer}>
            <div className={styles.calcu}>
                <section className={styles.output}>
                        <span className={styles.past}>{past}{operation}</span>
                        <span className={styles.present}>{present}</span>
                </section>
                <section className={styles.calcuBtn}>
                        {btns.otherBtn.map((btn,index)=>(
                            <button key={index} className={`${styles["otherBtn"+index]}`}
                            onClick={()=>{
                                if(btn ==="AC"){
                                    return dispatch({type: ACTIONS.CLEAR,payload:{btn}})
                                }else if(btn === "DEL"){
                                    return dispatch({type: ACTIONS.DELETE_DIGIT})
                                }
                                    return dispatch({type: ACTIONS.ADD_DIGIT, payload:{btn}})
                                }
                            }
                            >{btn}</button>
                        ))}
                        {btns.digits.map((btn,index)=>(
                            <button key={index} className={styles.btn}
                            onClick={()=>dispatch({type: ACTIONS.ADD_DIGIT,payload:{btn}})}
                            >{btn}</button>
                        ))}
                        {btns.operation.map((operation,index)=>(
                            <button key={index} className={`${styles["operation" + index]}`}
                            onClick={()=>dispatch({type: ACTIONS.CHOOSE_OPERATION, payload:{operation}})}
                            >{operation}</button>
                        ))}
                </section>
            </div>
        </main>
    )
}
export default Calculator;

// rafce shortcut , rafc