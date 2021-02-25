import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css";
import { CountDownContext } from "../contexts/CountDownContext";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const {
     minute
    ,second
    ,hasFinished
    ,isActive
    ,startCountdown
    ,resetCountdown
  }  = useContext(CountDownContext)

  const [minuteLeft, minuteRight] = String(minute).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(second).padStart(2, "0").split("");


  return (
    <>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button disabled type="button" className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountdown}
              type="button"
              className={`${styles.countdownButton} + ${styles.stopCountdownButton}`}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              onClick={startCountdown}
              type="button"
              className={styles.countdownButton}
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}
    </>
  );
}
