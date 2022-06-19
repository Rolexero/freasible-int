import React from 'react'
import { Link } from "react-router-dom";
import useHttp from "../Hooks/useHttp";
import Loading from './Loading';


const AllCompetitions = () => {
    const responseConfig = {
      url: "http://api.football-data.org/v2/competitions?areas=2077&plan=TIER_ONE",
      headers: {
        "X-Auth-Token": "ec144945fa844a478747716a258703be",
      },
    };
    const { data, status } = useHttp(responseConfig);

  if (status === 'loading') {
  return (
    <div className="mx-auto mb-5">
      <Loading />
    </div>
  );
}

if (status === 'error') {
  return (
    <div className="mx-auto mb-3">
      Unable to fetch Competitions
    </div>
  )
}

if (data.competitions.length === 0) {
  return(
    <div className="mx-auto mb-3">
      No available Competitions
    </div>
  )
}
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 pb-4">
      {data?.competitions.map((data) => {
        return (
          <Link
            to={`/competition/${data.id}`}
            state={{ name: data?.name }}
            key={data.id}
          >
            <div
              key={data.id}
              className="flex w-full rounded shadow-lg  hover:shadow-2xl p-5"
            >
              <div className="p-2 w-20 h-20 m-2">
                <img
                  src={data?.emblemUrl}
                  className="object-cover img-fluid"
                  alt={data.id}
                />
              </div>
              <div className="p-2 m-2">
                <p>{data?.name}</p>
                <span>{data?.area.name}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default AllCompetitions