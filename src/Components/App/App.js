import './App.scss';
import '../../Styles/variables.scss'
import Header from '../Header/Header';
import Routes from '../Routes/Routes';

const App = () => {
  return (
    <body className='main'>
      <Header />
      <Routes />
    </body>
  )
}

export default App;

