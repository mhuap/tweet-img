import React, { useState } from "react";

export default function Poll({ poll }){
  
  return (<div id='poll'>

    {poll.options.map(x => {
      const percentageStr = `${x.percentage}%`
      return (<div className='poll-option'>
        <div className='poll-bar' style={{width: percentageStr}}></div>
        <span>{x.label}</span>
        <span>{x.percentage}%</span>
      </div>)
    })}

  </div>)
}
