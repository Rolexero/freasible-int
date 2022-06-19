import React from "react";
import useHttp from "../Hooks/useHttp";
import Loading from "./Loading";

const Standing = ({ openTab, id }) => {
  const responseConfig = {
    url: `http://api.football-data.org/v2/competitions/${id}/standings?standingType=TOTAL`,
    headers: {
      "X-Auth-Token": "ec144945fa844a478747716a258703be",
    },
  };
  const { data, status } = useHttp(responseConfig);

  const competitionTable = data;
  const standings = competitionTable?.standings;
  const groups = [];
  let standingsTable;

  if (status === "loading") {
    return (
      <div className={`mx-auto ${openTab === 0 ? 'block' : 'hidden'}`}>
        <Loading />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={`mx-auto ${openTab === 0 ? "block" : "hidden"}`}>
        Unableto fetch Standings
      </div>
    );
  }

  standings?.map((standing) => {
    if (standing.group) {
      groups.push(standing.group);
    }
    if (standing.table.length) {
      standingsTable = standing.table;
    }
  });

  console.log(groups)
  if (groups?.length && standingsTable === undefined) {
       return <div className={`mx-auto ${openTab === 0 ? "block" : "hidden"}`}>
         {groups?.map((group)=>{
              return (
                <div className="relative overflow-x-auto shadow-md p-3 sm:rounded-lg" key={group}>
                    <h3>{group.split("_").join(" ")}</h3>
                  <table className="w-full text-sm text-left overflow-auto  text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr className="border-b border-black">
                        <th scope="col" className="py-3 px-5 m-5">
                          Team
                        </th>
                        <th scope="col" className="py-3 p-5">
                          MP
                        </th>
                        <th scope="col" className="py-3 p-5">
                          W
                        </th>
                        <th scope="col" className="py-3 p-5">
                          D
                        </th>
                        <th scope="col" className="py-3 p-5">
                          L
                        </th>
                        <th scope="col" className="py-3 p-5">
                          GF
                        </th>
                        <th scope="col" className="py-3 p-5">
                          GA
                        </th>
                        <th scope="col" className="py-3 p-5">
                          Pts
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              );
          })}
        </div>
  }

  return (
    <div className={openTab === 0 ? "block" : "hidden"} id="link1">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left overflow-auto  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="border-b border-black">
              <th scope="col" className="py-3 px-5 m-5">
                Team
              </th>
              <th scope="col" className="py-3 p-5">
                MP
              </th>
              <th scope="col" className="py-3 p-5">
                W
              </th>
              <th scope="col" className="py-3 p-5">
                D
              </th>
              <th scope="col" className="py-3 p-5">
                L
              </th>
              <th scope="col" className="py-3 p-5">
                GF
              </th>
              <th scope="col" className="py-3 p-5">
                GA
              </th>
              <th scope="col" className="py-3 p-5">
                Pts
              </th>
            </tr>
          </thead>
          <tbody>
            {standingsTable?.map((standing) => {
              return (
                <tr
                  className="bg-white text-black border-b "
                  key={standing.position}
                >
                  <th
                    scope="row"
                    className="p-5 font-medium whitespace-nowrap flex items-center"
                  >
                    <div className="m-2 text-center min-w-0 w-2">
                      {standing.position}
                    </div>
                    <div className="flex team-name">
                      <div className="team-img ml-2">
                        <img
                          src={standing?.team.crestUrl}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      {standing?.team.name}
                    </div>
                  </th>

                  <td className="py-4 w-10 p-5">{standing.playedGames}</td>
                  <td className="py-4 w-10 p-5">{standing.won}</td>
                  <td className="py-4 w-10 p-5">{standing.draw}</td>
                  <td className="py-4 w-10 p-5">{standing.lost}</td>
                  <td className="py-4 w-10 p-5">{standing.goalsFor}</td>
                  <td className="py-4 w-10 p-5">{standing.goalsAgainst}</td>
                  <td className="py-4 w-10 p-5">{standing.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Standing;
