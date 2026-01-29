import React from 'react'
import Text from './Text'

const HorizontalLine = ({name}) => {
    return (
        <div className='flex items-center w-full py-20 gap-4 justify-center'>
            <span className='line'></span>
            <h2 className='font-bold text-gray-700 text-2xl whitespace-nowrap'>
                {name}
            </h2>
            <span className='line'></span>
        </div>
    )
}

export default HorizontalLine
