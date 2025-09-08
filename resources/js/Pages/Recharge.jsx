// resources/js/Pages/Recharge.jsx
import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Recharge() {
    const [mobile, setMobile] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post('/recharge', { mobile, amount }, {
            onSuccess: (page) => {
                setMessage(page.props.flash?.message || '');
            },
            onError: (errors) => {
                setMessage(Object.values(errors).join(', '));
            }
        });
    }

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Mobile Recharge</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Mobile Number:</label><br/>
                    <input type="text" value={mobile} onChange={e => setMobile(e.target.value)} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Amount:</label><br/>
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <button type="submit" className='bg-red-500 px-4 py-2 rounded-full'>Recharge</button>
            </form>
            {message && <p style={{ marginTop: '10px', color: 'green' }}>{message}</p>}
        </div>
    );
}
