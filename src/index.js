import { createRoot } from 'react-dom/client'
const appElement = document.getElementById("app")
const root = createRoot(appElement)
const BasicComponentNameHere = () => { return ( <div> <p>Hello World!</p> </div> ) }


root.render(<BasicComponentNameHere />)