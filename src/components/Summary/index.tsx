import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary() {

    const {transactions} = useTransactions()

    const totalDeposits = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            return acc + transaction.value
        }

        return acc; 
    }, 0)

    const totalWithdraw = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'withdraw') {
            return acc + transaction.value
        }

        return acc; 
    }, 0)

    const total = totalDeposits - totalWithdraw

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                {new Intl.NumberFormat(
                    'pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalDeposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>- {new Intl.NumberFormat(
                    'pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalWithdraw)}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat(
                    'pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(total)}</strong>
            </div>
        </Container>
    )
}