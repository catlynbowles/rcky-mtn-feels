import { render } from '@testing-library/react'
import React, {useState, useEffect} from 'react'
import { getData }from '../../apiCalls'
import { Link } from 'react-router-dom'
import './FeelingView.css'
import '../Button/Button.css'
import LoadingIcon from '../../LoadingIcon/LoadingIcon'
import Error from '../Error/Error'
import PropTypes from 'prop-types'
import ViewSubtitle from '../ViewSubtitle/ViewSubtitle'
import StatsBox from '../StatsBox/StatsBox'
import Footer from '../Footer/Footer'


const FeelingView = ({id}) => {
  const [localTotals, setLocalTotals] = useState('')
  const [globalTotals, setGlobalTotals] = useState('')
  const [secondaryEmotions, setSecondaryEmotions] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const localTotal = getData(`https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=${id}`)
    const primaryGlobalTotals = getData('https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary/totals')
    const secondaryEmotions = getData(`https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary/${id}/secondary`)

    Promise.all([localTotal, primaryGlobalTotals, secondaryEmotions])
      .then(data => {
        setLocalTotals(data[0][0].counts['northAmerica/mountain'])
        setGlobalTotals(data[1][id])
        setSecondaryEmotions(data[2])
      })
      .catch(err => setError(`${err}`))
  }, [])
  
    return (
      <section className='page-container'>
        <article className='stats-container'>
          <ViewSubtitle id={id}/>
          {error ? <Error text={error}/> : 
          !localTotals && !globalTotals ? <LoadingIcon /> : 
          <div>
            <StatsBox localTotals={localTotals} globalTotals={globalTotals} secondaryEmotions={secondaryEmotions} />
          </div>
          }
        </article>
        <Link to='/' style={{textDecoration: 'none'}}>
          <div className='feelingButton home-button'><p>Back</p></div>
        </Link>
        <Footer />
      </section>
    )
}

export default FeelingView;

FeelingView.propTypes = {
  id: PropTypes.string.isRequired
}