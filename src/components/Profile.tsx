import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

export function Profile() {
    const { data } = useContext(ChallengesContext);
    const { level} = data;
    
  


    return (
        <div className={styles.profileContainer} >
            <img src="/profile.jpg" alt="Avatar"/>
            <div>
                <strong>Caio Silveira Telles</strong>
                <p>
                    <img src="/icons/level.svg" alt="Level Icon"/>
                 Level {level}</p>
            </div>
        </div>
    )
}