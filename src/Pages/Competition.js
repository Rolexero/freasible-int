import React, {useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import useHttp from '../Hooks/useHttp';
import { Link } from 'react-router-dom';
import Tabs from '../Components/Tabs';


const Competition = () => {
    const {id, query} = useParams();
    const location = useLocation();

    
    const competitionName = location.state?.name;

    const[openTab, setOpenTab] = useState(0);


  return (
    <div className="container mx-auto px-0 mt-0">
      <div className="flex flex-col border  border-gray-200 mx-auto p-1 rounded-lg md:w-4/5  min-h-fit">
        <nav className="flex p-4" aria-label="Breadcrumb">
          <ol className="inline-flex  items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center ">
              <Link
                to="/"
                className="text-base inline-flex  items-center text-center border-b-4 p-1 border-darkBlue font-medium text-black dark:hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-darkBlue duration-300"
              >
                All Competitions
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-base font-medium text-gray-500 md:ml-2 dark:text-gray-500">
                  {competitionName}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className='px-3 mx-3 mb-5 py-1 '>
          <h4 className="text-2xl text-darkBlue">
            <strong>{competitionName}</strong>
          </h4>
        </div>

        {/* Tabs */}
        <Tabs openTab={openTab} setOpenTab={setOpenTab} id={id} />
      </div>
    </div>
  );
}

export default Competition