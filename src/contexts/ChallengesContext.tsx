import { createContext, useState, ReactNode, useEffect, useContext } from "react";

import challenges from "../../challenges.json";

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengesContextData {
  data: {
    level: number;
    experience: number;
    experienceToNextLevel: number;
    completedChallenges: number;
    activeChallenge: {
      type: "body" | "eye";
      description: string;
      amount: number;
    };
  };
  functions: {
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    challengComplet: () => void;
  };
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(10);
  const [completedChallenges, setCompletedChallenges] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect (() => {
    Notification.requestPermission();
  }, []) 

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const newChallenge = challenges[randomChallengeIndex];

    
    setActiveChallenge(newChallenge);

    new Audio ('/notification.mp3').play()

    if (Notification.permission === 'granted'){
      new Notification ('Novo Desafio' , {
      body: `Valendo ${activeChallenge.amount} xp! `
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function challengComplet(){
      if (!activeChallenge){
        return;
      }

      const {amount} = activeChallenge

      let finalExperience = experience + amount ;

      if (finalExperience >= experienceToNextLevel){
          finalExperience = finalExperience - experienceToNextLevel ;
          levelUp();
      } 

      setExperience(finalExperience);
      setActiveChallenge(null);
      setCompletedChallenges(completedChallenges + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        data: {
          level,
          experience,
          experienceToNextLevel,
          completedChallenges,
          activeChallenge,
        },
        functions: {
          levelUp,
          startNewChallenge,
          resetChallenge,
          challengComplet,
        },
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
