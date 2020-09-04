import React, { useState,useEffect } from "react"
// useState
// export default function (props) {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>you clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>click</button>
//     </div>
//   )
// }
// useEffect
export default function (props) {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title=`you use ${count} times`
  })
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}