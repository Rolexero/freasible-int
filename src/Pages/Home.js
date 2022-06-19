import React from 'react'
import AllCompetions from '../Components/AllCompetitions';

const Home = () => {

  return (
    <div className="container mx-auto px-0 mt-0">
      <div className="flex flex-col border wrapper border-gray-200 mx-auto p-1 rounded-lg md:w-4/5 p-auto space-y-4 mb-20">
        <h2 className="text-2xl mt-5 p-3">All Competitions</h2>
        <AllCompetions />
      </div>
    </div>
  );
}

export default Home