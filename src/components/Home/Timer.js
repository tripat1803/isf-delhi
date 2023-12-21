import React, { useEffect, useState } from 'react'

export default function Timer() {
    const targetDate = new Date('2024-01-09T00:00:00Z');
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    function calculateTimeRemaining() {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            // Target date has passed
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }
    return (
        <div className='flex items-center gap-3 text-xl'>
            <div className='flex gap-3 items-center'>
                <div className='flex flex-col bg-[rgb(227,30,36)] rounded-lg w-[120px]'>
                    <p className='py-6 px-10 text-center text-3xl font-semibold'>{timeRemaining.days}</p>
                    <p className='py-1 px-2 border-t text-center'>Days</p>
                </div>
                <div className='flex flex-col bg-[#f56f6c] rounded-lg w-[120px]'>
                    <p className='py-6 px-10 text-center text-3xl font-semibold'>{timeRemaining.hours}</p>
                    <p className='py-1 px-2 border-t text-center'>Hours</p>
                </div>
                <div className='flex flex-col bg-[#f56f6c] rounded-lg w-[120px]'>
                    <p className='py-6 px-10 text-center text-3xl font-semibold'>{timeRemaining.minutes}</p>
                    <p className='py-1 px-2 border-t text-center'>Minutes</p>
                </div>
                <div className='flex flex-col bg-[#f56f6c] rounded-lg w-[120px]'>
                    <p className='py-6 px-10 text-center text-3xl font-semibold'>{timeRemaining.seconds}</p>
                    <p className='py-1 px-2 border-t text-center'>Seconds</p>
                </div>
            </div>
        </div>
    )
}
