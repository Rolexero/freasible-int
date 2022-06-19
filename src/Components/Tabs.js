import React from 'react'
import Standing from "../Components/Standing";
import Matches from "../Components/Matches";


const Tabs = ({openTab, setOpenTab, id}) => {
  return (
    <div className="flex flex-wrap">
        
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-1 flex-row bg-yellowColor"
          role="tablist"
        >
          <li className="mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`text-base text-white mx-auto font-bold uppercase px-5 w-4/5 py-3 rounded block leading-normal ${
                openTab === 0 ? "border-b-4 border-y-white" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(0);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              STANDINGS
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={`text-base text-white mx-auto font-bold uppercase px-5 w-4/5 py-3 rounded block leading-normal ${
                openTab === 1 ? "border-b-4 border-y-white" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              MATCHES
            </a>
          </li>
        </ul>

        {/* Tabs body  */}
        <div className="relative flex flex-col mx-auto break-words bg-white tab-size overflow-auto mb-6 drop-shadow-xl rounded">
          <div className="tab-content tab-space">
            <div className="px-4 py-5 flex-auto">
              <Standing openTab={openTab} id={id}/>
              <Matches openTab={openTab} id={id}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs