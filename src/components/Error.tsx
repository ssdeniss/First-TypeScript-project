import React from 'react'
interface ErrorMessageProps {
    error: string
}
const Error = ({ error }: ErrorMessageProps) => {

    return (
        <div className='text-red-600' style={{ position: 'fixed', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '48px' }}>{error}</div>
    )
}

export default Error