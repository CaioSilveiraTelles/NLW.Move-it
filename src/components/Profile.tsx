import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)
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

export default Profile

