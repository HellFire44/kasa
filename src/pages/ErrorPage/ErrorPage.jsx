import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Main from '../../layout/Main/Main';
import Footer from "../../layout/Footer/Footer"
import './errorPage.scss'

export function ErrorPage() {
  return (
    <>
      <Header />
      <Main >
            <div className="error-page">
              <div>
                  <h1>404</h1>
                  <p>Oups! La page que vous demandez n'existe pas.</p>
              </div>
                  <Link to="/">Retourner sur la page d'accueil</Link>
            </div>

      </Main>
      <Footer />
      
    </>
  )
}