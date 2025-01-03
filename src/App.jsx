
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import View from './routes/View'

function App() {


  return (
    <ThemeProvider>
      <View/>
    </ThemeProvider>
  )
}

export default App
