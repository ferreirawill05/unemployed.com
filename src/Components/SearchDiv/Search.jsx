import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search = () => {

  return(
    <div className="searchDiv grid gp-[10] bg-greyIsh rounded-[10px] p-[3rem]">
        <form action="">
            <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10] bg-white p-5 shadow-greyIsh-700">
                <div className="flex gap-2 items-center">
                    <SearchOutlinedIcon/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Search