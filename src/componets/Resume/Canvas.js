import React from 'react'
import useCanvas from './useCanvas'

const Canvas = props => {
  
  const { draw, width, height, ...rest } = props
  const canvasRef = useCanvas(draw)
  
  return <canvas ref={canvasRef} {...rest} width={width} height={height} />
}

export default Canvas