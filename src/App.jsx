import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/header/header';
import Design from '../src/assets/design-inspiration.gif'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
      <section class="container d-flex flex-column flex-lg-row align-items-center">
            <div class="d-flex flex-column align-items-center align-items-lg-start">
                <h1>
                    Conquiste o Digital: Websites Profissionais e Estratégias no Google Meu Negócio
                </h1>
                <p class="mt-3">
                    Impulsione a presença digital do seu negócio. Criação e atualização de websites, otimização
                    estratégica no Google Meu Negócio. Descubra como podemos alavancar a sua marca para novos patamares
                    digitais.
                </p>
                <a href="https://linktr.ee/kaiquecolella">
                    <button type="button" class="btn">Entre em contato</button>
                </a>
            </div>
            <img className='logo' src={Design} alt="" />
        </section>
      </main>
    </>
  )
}

export default App
