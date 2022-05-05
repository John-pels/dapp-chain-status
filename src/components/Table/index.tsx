import { isArrayNotEmpty } from "@src/utils/data"
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
                    <tr id="table_head-colored" className={styles.table_row}>
                        {isArrayNotEmpty(tableHead) && tableHead.map((heading, index) => (
                            <th key={index} className={styles.table__cell}>{heading}</th>
                        ))}
                    </tr>
                </thead>

                <tbody className={styles.table_body}>
                    {tableBody}
                </tbody>
            </table>
        </section>
    )
}


export { Table }
