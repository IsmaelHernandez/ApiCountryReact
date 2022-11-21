import './App.css'
import CardCountry from './components/CardCountry'

const App = () => {
 

  return (
    <div className="App">
      <div className='divContainer'>
        <div className='divapp'>
          <h1 className='titleapp'>Countries that play the world cup!</h1>
        </div>
        <CardCountry countryName='qatar' />
        <CardCountry countryName='germany' />
        <CardCountry countryName='denmark' />
        <CardCountry countryName='france' />
        <CardCountry countryName='croatia' />
        <CardCountry countryName='España' />
        <CardCountry countryName='Serbia' />
        <CardCountry countryName='peru' />
        <CardCountry countryName='swiss' />
        <CardCountry countryName='Netherlands' />
        <CardCountry countryName='Portugal' />
        <CardCountry countryName='Poland' />
        <CardCountry countryName='chile' />
        <CardCountry countryName='Brasil' />
        <CardCountry countryName='Argentina' />
        <CardCountry countryName='Uruguay' />
        <CardCountry countryName='Ecuador' />
        <CardCountry countryName='Canada' />
        <CardCountry countryName='mexico' />
        <CardCountry countryName='usa'/>
        <CardCountry countryName='Costa Rica'/>
        <CardCountry countryName='iran'/>
        <CardCountry countryName='South Korea'/>
        <CardCountry countryName='japan'/>
        <CardCountry countryName='Saudi Arabia'/>
        <CardCountry countryName='Australia'/>
        <CardCountry countryName='Ghana'/>
        <CardCountry countryName='Senegal'/>
        <CardCountry countryName='Tunisia'/>
        <CardCountry countryName='Morocco'/>
        <CardCountry countryName='Cameroon'/>
      </div>
    </div>
  )
}

export default App
