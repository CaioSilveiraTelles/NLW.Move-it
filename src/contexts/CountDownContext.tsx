import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { ChallengesContext } from "./ChallengesContext";


interface CountDownContextProps {
    children: ReactNode;
  }

interface CountDownContextData{

    minute      : number   ;
    second      : number   ;
    hasFinished : boolean  ;
    isActive    : boolean  ;
    startCountdown: () => void;
    resetCountdown: () => void;

}

export const CountDownContext = createContext({} as CountDownContextData)

export function CountDownProvider({children}: CountDownContextProps) {

    let countdownTimeout: NodeJS.Timeout;

    const { functions } = useContext(ChallengesContext);
    const { startNewChallenge } = functions;
  
    const [timer, setTimer] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
  
    const minute = Math.floor(timer / 60);
    const second = timer % 60;

    function startCountdown() {
        setIsActive(true);
      }
    
      function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTimer(0.1 * 60);
      }
    
      useEffect(() => {
        if (isActive && timer > 0) {
          countdownTimeout = setTimeout(() => {
            setTimer(timer - 1);
          }, 1000);
        } else if (isActive && timer === 0) {
          setHasFinished(true);
          setIsActive(false);
          startNewChallenge();
        }
      }, [isActive, timer]);
    


    return(

        <CountDownContext.Provider
        value={{
            minute,
            second,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,

        }}>
            {children}
        </CountDownContext.Provider>
    )
}