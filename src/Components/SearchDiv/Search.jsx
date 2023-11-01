import React from "react";
import pesquisa from "../../assets/pesquisa.png"
import cancelar from "../../assets/cancelar.png"
import companhia from "../../assets/casa.png"
import ponto from "../../assets/localizacao.png"

const Search = () => {

  return(
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
        
        <form action="">
            <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10] bg-white p-5 shadow-greyIsh-700">
                <div className="flex gap-2 items-center">
                  <img src={pesquisa} alt="search" className='w-6 icon'/>
                  <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Search Job Here..." />
                  <img src={cancelar} alt="cancel" className="w-6 icon"></img>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={companhia} alt="search" className='w-6 icon'/>
                  <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Search by company..." />
                  <img src={cancelar} alt="cancel" className="w-6 icon"></img>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={ponto} alt="search" className='w-6 icon'/>
                  <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Search by location..." />
                  <img src={cancelar} alt="cancel" className="w-6 icon"></img>
                </div>

                <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">Search</button>

            </div>
        </form>

        <div className="secDiv flex items-center gap-10 justify-center">

          <div className="singleSearch flex items-center gap-2">

            <label htmlFor="inclusive" className="text-[#808080] font-semibold">Sort by:</label>
           
            <select name="" id="inclusive" className="bg-white rounded-[3px] px-4 py-1">
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts with</option>
              <option value="">Contains </option>
            </select>

          </div>
          <div className="singleSearch flex items-center gap-2">

            <label htmlFor="type" className="text-[#808080] font-semibold">Type:</label>
           
            <select name="" id="type" className="bg-white rounded-[3px] px-4 py-1">
              <option value="">Full-time</option>
              <option value="">Remote</option>
              <option value="">Contract</option>
              <option value="">Part-time</option>
            </select>

          </div>
          <div className="singleSearch flex items-center gap-2">

            <label htmlFor="level" className="text-[#808080] font-semibold">Level:</label>
           
            <select name="" id="level" className="bg-white rounded-[3px] px-4 py-1">
              <option value="">Senior</option>
              <option value="">Begginer</option>
              <option value="">Intermediate</option>
              <option value="">Internship</option>
            </select>

          </div>

          <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>

        </div>

    </div>
  )
}

export default Search