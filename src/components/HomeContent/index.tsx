import { useCallback, useEffect, useState } from 'react'
import { Table } from "../Table"
import styles from '../Table/style.module.scss'
import { useDispatch } from 'react-redux'
import { action } from 'typesafe-actions'
import { ChainStatusTypes } from '../../store/types'
import { Spinner } from '../Spinner'
import { useSelector } from '../../store'
import { filterChains, isArrayNotEmpty } from '../../utils/data'
import { chainService } from '@src/services/chain'

const tableHeadings = ['Icon', 'Name', 'Token Symbols', 'Status']
const DURATION = 5 * 60000

const TableBody = () => {
    const allChains = useSelector(state => state.chains.allchainNetworks)
    const filteredChains = filterChains(allChains)
    const isAllChainsNotEmpty = isArrayNotEmpty(filteredChains)
    return (
        <>

            {
                isAllChainsNotEmpty ? filteredChains.map(({ icon, name, tokenSymbols, connected }, index) => {
                    let status = connected
                    useEffect(() => {
                        setInterval(async () => {
                            try {
                                const response = await chainService.getNetworkStatus(name.toLowerCase())
                                status = await response?.data
                                console.log(`${name}: `, status)
                            } catch (error) {
                                console.log(error)
                            }
                            console.log('hey man!')
                        }, DURATION)

                        return () => {
                            clearInterval()
                        }
                    }, [DURATION])

                    return (
                        <tr className={styles.table__row} key={index}>
                            <td className={styles.table__cell}>
                                <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/images/${icon}`} alt={icon} className={styles.table__img} />
                            </td>
                            <td className={styles.table__cell}>{name}</td>
                            <td className={styles.table__cell}>{tokenSymbols[0]}</td>

                            <td className={styles.table__cell}>
                                <div className="flex">
                                    <span className={`status ${status ? 'status__green' : 'status__red'}`} ></span>
                                    {status ? 'Connected' : 'Not connected'}
                                </div>
                            </td>
                        </tr>
                    )
                }) : null
            }

        </>
    )
}

const HomeContent = () => {
    const [isFetching, setIsFetching] = useState(false)
    const dispatch = useDispatch()
    const fetchChains = useCallback(() => {
        setIsFetching(true)
        dispatch(action(ChainStatusTypes.GET_ALL_NETWORK_CHAIN_REQUEST, onSuccess, onError))
    }, [])


    useEffect(() => {
        fetchChains()
    }, [])


    const onSuccess = () => {
        setIsFetching(false)
    }

    const onError = () => {
        setIsFetching(false)
    }

    if (isFetching) return <Spinner />
    return (
        <Table tableHead={tableHeadings} tableBody={<TableBody />} />
    )
}

export { HomeContent }
