import React from 'react'

const MapItem = ({item}) => {

    const title = item[0];
    const sub = item[1];

  return (
    <div className='card flex flex-col rounded-lg shadow-lg hover:scale-105 transition-all'>
        
        <div className='my-2 bg-pink-600 px-2 py-2 rounded-t-lg'>{title}</div>

        {sub.map((el) => <div className='my-1 to-pink-600 px-2'>
            {el}
        </div>)}
    </div>
  )
}

export default MapItem