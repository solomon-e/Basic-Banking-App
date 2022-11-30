import React from "react";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';

import { deposit, withdraw, useBankStoreDispatch } from '../redux/bankSlice'
import { useDispatch } from "react-redux";

const Banking = () => {
    const [amount, setAmount] = useState(0) 
    const dispatch = useBankStoreDispatch()

    const handleChange = e => {
        setAmount(e.target.value)
    }

    const handleDeposit = () => {
        dispatch(deposit(+amount))
    }

    const handleWithdraw = () => {
        dispatch(withdraw(+amount))
    }

    return(
        <div>
            <div>
                <Form.Control size="lg" type="text" placeholder="Enter amount" className="mb-2" value={amount} onChange={handleChange} />
                <div >
                <Button variant="secondary" className="float-end" onClick={handleWithdraw}>Withdraw</Button>
                <Button variant="primary" className="me-4 float-end" onClick={handleDeposit}>Deposit</Button>
                </div>
            </div>
        </div>
    )
}

export default Banking;
