import { FC } from "react";
import { Table } from "../../components";

export default {
    title: 'components/Table',
    component: Table
}

interface props {
    tableHeading: Array<string>;
    tableBody: React.ReactNode
}
const tableHeadings = ['Icon', 'Name', 'Token Symbols', 'Status']

const TableBody = () => {
    return (
        <>

            {
                [...new Array(5)].map((_, index) => (
                    <tr className={'table__row'} key={index}>
                        <td className={'table__cell'}>
                            <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/images/bifrost.svg`} alt={'icon'} className={'table__img'} />
                        </td>
                        <td className={'table__cell'}>Bifrost</td>
                        <td className={'table__cell'}>BIF</td>

                        <td className={'table__cell'}>
                            <div className="flex">
                                <span className='status  status__red' ></span>
                                Not connected
                            </div>
                        </td>
                    </tr>
                ))
            }

        </>
    )
}


export const CustomTable: FC<props> = ({ tableBody = <TableBody />,
    tableHeading = tableHeadings
}) => <Table tableHead={tableHeading} tableBody={tableBody} />
