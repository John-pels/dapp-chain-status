import { Table } from "../Table"
import styles from '../Table/style.module.scss'


const tableHeadings = ['Name', 'Icon', 'Status']

const TableBody = () => {
    return (
        <tr className={styles.table_row}>
            <td className={styles.table_cell}>Kumasa</td>
            <td className={styles.table_cell}>
                <img src="" alt="icon" />
            </td>
            <td className={styles.table_cell}>
                <span className={`status status__green`} />
            </td>
        </tr>
    )
}

const HomeContent = () => {
    return (
        <Table tableHead={tableHeadings} tableBody={<TableBody />} />
    )
}

export { HomeContent }
