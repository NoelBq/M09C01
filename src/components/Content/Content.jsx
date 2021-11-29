import React from 'react'
import ActorsQuantity from './ActorsQuantity'
import AppDashBoard from './AppDashBoard'
import Footer from './Footer'
import ContentGenres from "./ContentGenres";
import LastMovieInDB from './LastMovieInDB'
import MoviesInDB from './MoviesInDB'
import TopBar from './TopBar'
import TotalAwards from './TotalAwards'
import TableContent from './TableContent'

function Content() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">

        <div id="content">
           <TopBar />
            {/* <!-- End of Topbar -->

            <!-- Content Row Top --> */}
            <div class="container-fluid">
              
              <AppDashBoard />
                <div class="row">

                    {/* <!-- Movies in Data Base --> */}
                  <MoviesInDB />
                    {/* <!-- Total awards --> */}
           
                   <TotalAwards />
                    {/* <!-- Actors quantity --> */}
                  <ActorsQuantity />
                </div>
                {/* <!-- End movies in Data Base --> */}
                

                {/* <!-- Content Row Last Movie in Data Base --> */}
                <div class="row">
                    {/* <!-- Last Movie in DB --> */}
                   <LastMovieInDB />
                    {/* <!-- End content row last movie in Data Base --> */}

                    {/* <!-- Genres in DB --> */}
                    <ContentGenres genres={[
                    {name: "Acción"},{name:"Ciencia Ficcion"},{name:"Comedia"},{name:"Aventura"},{name:"Documental"},{name:"Drama"},{name:"Fantasia"},{name:"Infantiles"},{name:"Musical"}
                ]} />
                </div>
            </div>
            {/* <!--End Content Row Top--> */}
        </div>
        {/* <!-- End of MainContent --> */}

        <TableContent movies={[
                    { "titulo": "Billy Eliot", "duracion": 123, "rating": 5, "generos": ["Drama", "Comedia"], "premios": 2 },
                    { "titulo": "Alicia en el pais de las maravillas", "duracion": 142, "rating": 4.8, "generos": ["Drama", "Comedia"], "premios": 3 }
                ]} />
   
     <Footer />
        

    </div>
    )
}

propTypes = {
  titulo:PropTypes.array.isRequired,
  icon:PropTypes.array.isRequired,
  text:PropTypes.array.isRequired,
  cifra:PropTypes.array.isRequired,
  border: PropTypes.array.isRequired,
  };
  ContentRowMovies.defaultProps = {
  titulo:"No se encuentra titulo",
  icon:"Icono inaccesible",
  text:"Texto inaccesible",
  cifra: 0,
  border: "null",
  };
  

export default Content;
