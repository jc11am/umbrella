import styles from "./Card.module.scss"

const Card = function({ children, cardClass }) {
    return(
        <div className={`${styles.card} ${cardClass}`}>
            {children}
        </div>
    )
}

export default Card