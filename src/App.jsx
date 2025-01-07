
import './App.css'
import { ActionProvider } from './context/ActionContext'
import { PopularMoviesProvider } from './context/PopularMoviesContext'
import { PopularSeriesProvider } from './context/PopularSeriesContext'
import { ReleaseProvider } from './context/ReleaseContext'
import { ThemeProvider } from './context/ThemeContext'
import { TopRatedProvider } from './context/TopRatedContext'
import { TrendingProvider } from './context/TrendingContext'
import View from './routes/View'

function App() {


  return (
    <ActionProvider>
      <ReleaseProvider>
        <TrendingProvider>
          <PopularMoviesProvider>
            <PopularSeriesProvider>
              <TopRatedProvider>
                <ThemeProvider>
                  <View/>
                </ThemeProvider>
              </TopRatedProvider>
            </PopularSeriesProvider>
          </PopularMoviesProvider>
        </TrendingProvider>
      </ReleaseProvider>
    </ActionProvider>
  )
}

export default App
