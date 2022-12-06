import React from 'react';
import Board from './board/board';
import styles from './tictactoe.module.scss';
import Scoreboard from './scoreBoard/scoreboard';
import PopModal from './popModal/popModal';

const Tictactoe = () => {
  return (
    <main className={styles.main_container}>
        <Scoreboard/>
        {/* <PopModal/> */}
        <Board/>
    </main>
  )
}

export default Tictactoe;