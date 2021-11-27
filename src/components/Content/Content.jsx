import React from 'react'
import ActorsQuantity from './ActorsQuantity'
import AppDashBoard from './AppDashBoard'
import Footer from './Footer'
import Genres from './Genres'
import LastMovieInDB from './LastMovieInDB'
import MoviesInDB from './MoviesInDB'
import TopBar from './TopBar'
import TotalAwards from './TotalAwards'

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
                    <Genres />
          
                </div>
            </div>
            {/* <!--End Content Row Top--> */}
        </div>
        {/* <!-- End of MainContent --> */}

     
      <Footer />
        

    </div>
    )
}

export default Content;
