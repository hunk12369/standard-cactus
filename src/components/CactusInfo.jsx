import React from 'react'
import Description from './Description'
import "./CactusInfo.css"
import Stars from './Stars'
const CactusInfo = () => {
  return (
    <div className='info'>
        <img src="src/assets/images/unsplash_fbAnIjhrOL4.png" alt="cactus" />
        <Description/>
        <Stars/>
        <button>
        <img src="src/assets/images/Group 5.png" alt="cactus" />
            1
        <img src="src/assets/images/Group 5.png" alt="cactus" />
        </button>
    </div>
  )
}

export default CactusInfo