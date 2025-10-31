import React from 'react'
import VideoItems from './VideoItems'
import VideoPlay from './VideoPlay'
import "./App.css"


const Container = ({state,play,run}) => {
  return (
    <div>
        <div>
            <article>
                <aside id='play'>
                        <VideoPlay play={play} ></VideoPlay>
                </aside>
{/* ======================================================================= */}
                <aside id='images'>
                    {
                        state.map((data)=>{
                           return <VideoItems data={data} run={run}></VideoItems>
                        })
                    }
                </aside>
            </article>
        </div>
    </div>
  )
}

export default Container