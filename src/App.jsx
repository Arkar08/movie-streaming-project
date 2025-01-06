
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import { TopRatedProvider } from './context/TopRatedContext'
import View from './routes/View'

function App() {


  return (
    <TopRatedProvider>
      <ThemeProvider>
        <View/>
      </ThemeProvider>
    </TopRatedProvider>
  )
}

export default App
