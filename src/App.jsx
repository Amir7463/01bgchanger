import { useState } from "react"

function App() {
  const [color,setcolor] = useState("#657369")

  return (
    
     <div className="w-full h-screen duration-200"
     style={{backgroundColor:color}}
     >
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center
        gap-5 shadow-lg bg-white px-20 py-2 rounded-2xl">
          <button
          onClick={() => setcolor("red")}
          className="outline-none px-8 bg py-1 rounded-full text-white"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => setcolor("pink")}
          className="outline-none px-8 bg py-1 rounded-full text-white"
          style={{backgroundColor: "pink"}}
          >pink</button>
          <button
          onClick={() => setcolor("blue")}
          className="outline-none px-8 bg py-1 rounded-full text-white"
          style={{backgroundColor: "blue"}}
          >blue</button>
          <button
          onClick={() => setcolor("yellow")}
          className="outline-none px-8 bg py-1 rounded-full text-white"
          style={{backgroundColor: "yellow"}}
          >yellow</button>
          <button
          onClick={() => setcolor("green")}
          className="outline-none px-8 bg py-1 rounded-full text-white"
          style={{backgroundColor: "green"}}
          >green</button>
        </div>
      </div>
     </div>
  
  )
}

export default App
