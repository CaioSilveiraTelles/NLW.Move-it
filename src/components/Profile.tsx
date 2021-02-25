import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer} >
            <img src="/profile.jpg" alt="Avatar"/>
            <div>
                <strong>Caio Silveira Telles</strong>
                <p>
                    <img src="/icons/level.svg" alt="Level Icon"/>
                    Level 1</p>
            </div>
        </div>
    )
}