import React from 'react'

const LoadingDots = () => {
  return (
    <div className="flex lg:gap-6 gap-4">
      <span className="w-3 h-3 lg:w-4 lg:h-4 bg-neutral-500 rounded-full animate-bounce"></span>
      <span className="w-3 h-3 lg:w-4 lg:h-4 bg-neutral-500 rounded-full animate-[bounce_1s_infinite_250ms]"></span>
      <span className="w-3 h-3 lg:w-4 lg:h-4 bg-neutral-500 rounded-full animate-[bounce_1s_infinite_400ms]"></span>
    </div>
  )
}

export default LoadingDots;