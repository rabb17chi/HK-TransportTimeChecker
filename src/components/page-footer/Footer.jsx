import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer 
    className='bg-gray-200 p-2 py-4 text-center w-full mt-2 text-2xl'>

        <Link href='https://github.com/rabb17chi' 
        className='cursor-pointer underline underline-offset-3 text-pink-300 bg-gray-600 p-1 m-1' 
        title='GitHub網站'>
            <span>rabb17</span>
        </Link>

        <h2>
            <Link 
            href='https://github.com/rabb17chi/HK-TransportTimeChecker'
            className='hover:text-orange-500'
            >香港公共運輸時間查詢工具</Link> | 2025
        </h2>
        <p></p>
    </footer>
  )
}

export default Footer