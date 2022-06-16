import React from 'react'
import AllCompetions from '../Components/AllCompetitions';


const Home = () => {
  return (
    <div className="container mx-auto px-0 mt-0">
      <div className="shadow-2xl flex flex-col mx-auto rounded-lg w-4/5 relative  p-10 space-y-3 min-h-fit mb-10">
        <h2 className="text-2xl">All Competitions</h2>
        <AllCompetions />
      </div>
    </div>
  );
}

export default Home