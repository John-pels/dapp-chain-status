import { isArrayNotEmpty } from "../../utils/data"
import { FC } from "react"
import styles from './style.module.scss'

interface TableProps {
    tableHead: Array<string>
    tableBody: React.ReactNode
}

const Table: FC<TableProps> = ({ tableHead, tableBody }) => {

    return (
        <section className={styles.responsive}>
            <table className={styles.table}>
                <thead className={styles.table__head}>
                    <tr className={styles.table__row}>
                        {isArrayNotEmpty(tableHead) && tableHead.map((heading, index) => (
                            <th key={index} className={styles.table__cell}>{heading}</th>
                        ))}
                    </tr>
                </thead>

                <tbody className={styles.table__body}>
                    {tableBody}
                </tbody>
            </table>
        </section>
    )
}


export { Table }
