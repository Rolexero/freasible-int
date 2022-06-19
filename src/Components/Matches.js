import React from "react";
import useHttp from "../Hooks/useHttp";
import home from "../asset/home-team.png";
import away from "../asset/visitor-team.png";
import Loading from "./Loading";

const Matches = ({ openTab, id }) => {
  const responseConfig = {
    url: `http://api.football-data.org/v2/competitions/${id}`,
    headers: {
      "X-Auth-Token": "ec144945fa844a478747716a258703be",
    },
  };

  const { data, status } = useHttp(responseConfig);
  const currentMatchday = data?.currentSeason?.currentMatchday;
  const startDate = data?.currentSeason?.startDate.split("-")[0];

  const responseConfig2 = {
    url: `https://api.football-data.org/v2/competitions/${id}/matches?season=${startDate}&matchday=${currentMatchday}`,
    headers: {
      "X-Auth-Token": "ec144945fa844a478747716a258703be",
    },
  };

  const { data: matches, status: matchesStatus } = useHttp(responseConfig2);
  console.log(matches, matchesStatus);
  const availableMatches = matches?.matches;

  let content;

    if (matchesStatus === "loading") {
      return (
        <div className={`mx-auto ${openTab === 1 ? "block" : "hidden"}`}>
          <Loading />
        </div>
      );
    }



  if (matchesStatus === "error") {
    return (content = (
      <div className={`mx-auto ${openTab === 1 ? "block" : "hidden"}`}>
        Unable to fetch Matches
      </div>
    ));
  }


  const getDate = (utctime) => {
    const date_arr = utctime.split("T")[0].split("-");
    return `${date_arr[1]}/${date_arr[2]}`;
  };

  const getTime = (utctime) => {
    const date_arr = utctime.split("T")[1].split(":");
    return `${date_arr[0]}:${date_arr[1]}`;
  };
if (availableMatches === undefined) {
    return (content = (
      <div className={`mx-auto ${openTab === 1 ? "block" : "hidden"}`}>
        There are no matches available
      </div>
    ));
}

  if (availableMatches?.length) {
    content = availableMatches.map((fixture) => {
      return (
        <div
          className="flex rounded match hover:shadow-2xl p-5 items-center"
          key={fixture.id}
        >
          <div className="match-details flex flex-col flex-1">
            <div className="home mb-5 flex">
              <div className="img-home mr-2">
                <img src={home} alt="home-img img-fluid p-2 w-20 h-20" />
              </div>
              <div className="mr-2">
                <h4 className="text-sm">{fixture.homeTeam.name}</h4>
              </div>
              <div className="outcome">
                <span
                  className={`${
                    fixture.score.fullTime.homeTeam >
                    fixture.score.fullTime.awayTeam
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {fixture.score.fullTime.homeTeam}
                </span>
              </div>
            </div>

            <div className="away flex">
              <div className="img-home mr-2">
                <img src={away} alt="away-img" />
              </div>
              <div className="">
                <h4 className="text-sm">{fixture.awayTeam.name}</h4>
              </div>
              <div className="outcome">
                <span
                  className={`${
                    fixture.score.fullTime.homeTeam <
                    fixture.score.fullTime.awayTeam
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {fixture.score.fullTime.awayTeam}
                </span>
              </div>
            </div>
          </div>
          <div className="match-status ml-5 text-gray-600 text-center pl-2 border-l-2 border-gray-600">
            <h6>FT</h6>
            <p>{getDate(fixture.utcDate)}</p>
            <p>{getTime(fixture.utcDate)}</p>
          </div>
        </div>
      );
    });
  }
  return (
    <div className={openTab === 1 ? "block" : "hidden"} id="link2">
      <h5 className="text-xl text-gray-600 mb-5">
        Matchweek: {currentMatchday}
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mx-0 pb-4">
        {content}
      </div>
    </div>
  );
};

export default Matches;
