import './App.css';
import Container from '@mui/material/Container';
import Home from './component/Home';
import { ColorTheme } from './ColorTheme';
import {ThemeProvider } from '@mui/material/styles';

//Redux Store Setting Libraries
import { Provider } from 'react-redux';
import {store} from './component/store/store'


function App() {
  return (
    // setting redux store
    <Provider store={store}>
      <div  style={{backgroundColor:'#E9F1FF', height:"100vh"}} >
        {/* Setting Material Ui Theme */}
        <ThemeProvider theme={ColorTheme}>
          <Container maxWidth="sm"  style={{padding:"0px"}}  > 
            <div style={{backgroundColor:'#ffffff'}} ><Home/></div>
          </Container>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;
