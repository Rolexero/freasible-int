import React from 'react'
import { useQuery } from "react-query";
import { AllCompetitonsApi } from '../api';

        const fetchCompetitions = async () => {
          const response = await fetch(AllCompetitonsApi);
          const data = await response.json
        };


const AllCompetitions = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="w-full rounded p-3 shadow-xl hover:shadow-2xl">
        premier League
      </div>
      <div className="sm:w-1/2">one</div>
      <div className="md:w-1/2">one</div>
      <div className="md:w-1/2">one</div>
    </div>
  );
}

export default AllCompetitions