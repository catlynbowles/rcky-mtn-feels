import { Component } from 'react'
import './App.css';
import { getData } from '../apiCalls'
import { Route } from 'react-router-dom'
import Emotions from '../Emotions/Emotions'
import MainFeelingPage from '../MainFeelingPage/MainFeelingPage'
import LoadingIcon from '../LoadingIcon/LoadingIcon'
import Error from '../Error/Error'

class App extends Component { 
  constructor() {
    super()
    this.state = {
      primaryEmotions: [],
      error: ''
    }
  } 

  componentDidMount = () => {
    getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary')
      .then(data => this.setState({primaryEmotions: data}))
      .catch(error => {
        this.setState({error: `${error}`})
      })
  }

  render() {
    if (this.state.primaryEmotions) {
      console.log(this.state.primaryEmotions)
    }
    return (
      <body className='body'>
        <h1 className='title'>☆・゜Rocky Mountain VibeCheck ゜・☆</h1>
        <p className='line'>*・゜・*:.。.*.。.:*・ç・*:.。.*.。.:*・☆・゜・*:.。.*.。.:*・☆・゜・*:.。.:*・☆・゜・*:.。.*.。.:*・゜・*</p>
        <Route exact path='/' render={() => 
          <div>
            <h3 className='subtitle'>What are you feeling today?</h3>
            {this.state.error ? <Error text={this.state.error}/> : !this.state.primaryEmotions.length ? <LoadingIcon/> : <Emotions primaryEmotions={this.state.primaryEmotions}/>}
          </div>
        }/>
        <Route path={`/:name`} render={({match}) => {
          return (
            <MainFeelingPage id={match.params.name} primaryEmotions={this.state.primaryEmotions}/>
          )
        }
      
        }/>
      </body>
    )
  }
}

export default App;


