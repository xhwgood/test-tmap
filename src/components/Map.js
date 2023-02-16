// @ts-check
import React, { useCallback } from 'react'
import { TMap, InfoWindow } from '@map-component/react-tmap'
import { renderToString } from 'react-dom/server'
import './index.css'

const center = { lat: 39.984104, lng: 116.307503 }

function Map() {
  const handleClick = useCallback(
    () => {
      console.log('点击了按钮')
    },
    [],
  )

  const reactString = renderToString(<div className='btn-wrapper'><button onClick={handleClick}>我是按钮</button></div>)

  return (
    <div className='container'>
      <TMap
        mapKey="ATSBZ-UNI6S-CEJO2-6F6XK-7DCHK-YGBMX" // 申请的 key
        version="1.exp"
        center={center} // 设置中心点坐标
      >
        <InfoWindow
          visible
          position={center}
          content="Hello World!"
        />
      </TMap>
    </div>
  )
}

export default Map