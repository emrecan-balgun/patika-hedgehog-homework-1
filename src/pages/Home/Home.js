import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar';
import Welcome from '../../components/Welcome/Welcome';

import Cards from '../../components/Cards/Cards';

function Home() {


  return (
    <div className="container mx-auto">
      <Welcome message="Welcome to the Photo Gallery" />
      <SearchBar />
      <Cards />
    </div>
  )
}

export default Home;