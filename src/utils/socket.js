import React, { createContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export const SocketContext = createContext('')

const SocketConnection = ({ children }) => {
    const [socket, setSocket] = useState('')

    useEffect(() => {
        setSocket(
            io(
                `${process.env.REACT_APP_SOCKET_URL
                }`,
                { transports: ['websocket'] }
            )
        )
    }, [])

    return (
        <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
    )
}

export default SocketConnection