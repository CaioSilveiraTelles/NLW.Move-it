import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";
import { Countdown } from "./Countdown";
import { CountDownContext } from "../contexts/CountDownContext";
import { CompletedChallanges } from "./CompletedChallanges";

export function ChallengeBox() {
  const { data } = useContext(ChallengesContext);
  const { functions } = useContext(ChallengesContext);

  const { activeChallenge } = data;
  const { resetChallenge  } = functions;
  const { challengComplet } = functions;

  const {resetCountdown   } = useContext(CountDownContext);

  function handChallengSucceded(){
       challengComplet();
       resetCountdown ();
  }

  function handChallengFailed(){
      resetChallenge();
      resetCountdown ();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handChallengFailed}
            >
              Falhei
            </button>
            <button type="button" 
            className={styles.challengeSucceededButton}  
            onClick={handChallengSucceded} 
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Inicie um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de nível completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
