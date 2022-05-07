import styles from './style.module.scss'


const Spinner = () => {
    return (
        <section className={styles.spinner__overlay}>
            <div className={styles.spinner}></div>
        </section>
    )
}

export { Spinner }
