import React from "react";
import { Container } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useBankStoreSelector } from '../redux/bankSlice'

const Balance = () => {
    const balance = useBankStoreSelector((state) => {console.log(state); return state.bank.balance})
    return(
        <div>
            <Container className="my-3">
                <h1>Account Balance: ${balance}</h1>
            </Container>
        </div>
    )
}

export default Balance;