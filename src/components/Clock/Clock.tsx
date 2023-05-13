import React, {useEffect, useState} from 'react';


const getZero = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`
}
export const Clock: React.FC = () => {
    const [date, setDate] = useState(new Date())
    //
    //
    const hours = getZero(date.getHours())
    const minutes = getZero(date.getMinutes())
    const seconds = getZero(date.getSeconds())

    useEffect(() => {

       const intervalId = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <>
            <div>Time : {hours} : {minutes} : {seconds} </div>
        </>
    )
}