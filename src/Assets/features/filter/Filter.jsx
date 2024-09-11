import React, { useState, useEffect } from "react";
import "../../css/Filter.css";
import { filterItemsLang, filterItemsMedia } from "./fiterDropdownItems";
import { useSelector, useDispatch } from "react-redux";
import {
  filterAnime,
  selectFilteredAnimes,
  selectFilterLang,
  selectFilterMedia,
  setAnimes,
  setFilteredAnimesForPage,
  setFilterKey,
} from "./filterSlice";

function Filter({ Animes, Page }) {
  const lang = useSelector(selectFilterLang);
  const media = useSelector(selectFilterMedia);
  // const filteredAnimes = useSelector(selectFilteredAnimes);
  const [filterLang, setFilterLang] = useState(lang);
  const [filterMedia, setFilterMedia] = useState(media);

  const dispatch = useDispatch();

  // Dispatch the Animes and FilterKey on component mount or when Animes change
  useEffect(() => {
    dispatch(setAnimes(Animes));
    dispatch(setFilterKey({ lang: filterLang, media: filterMedia }));
    dispatch(filterAnime());
    dispatch(setFilteredAnimesForPage(Page));
  }, [Animes, filterLang, filterMedia, dispatch]);

  const handleFilterLang = (type) => {
    setFilterLang(type);
    dispatch(setFilterKey({ lang: type, media: filterMedia }));
    dispatch(filterAnime());
    dispatch(setFilteredAnimesForPage(Page));
  };

  const handleFilterMedia = (type) => {
    setFilterMedia(type);
    dispatch(setFilterKey({ lang: filterLang, media: type }));
    dispatch(filterAnime());
    dispatch(setFilteredAnimesForPage(Page));
  };

  // console.log(filteredAnimes);

  return (
    <div className="bg-gray-700 w-48 absolute top-11 left-0 z-10">
      <ul className="p-0">
        <span className="font-semibold text-lg text-white ml-4">Language</span>
        {filterItemsLang.map((item) => (
          <li
            key={item.id}
            className={
              filterLang !== item.type
                ? "pl-4 pr-20 py-2 hover:bg-gray-800 text-gray-500 hover:text-white cursor-pointer"
                : "pl-4 pr-20 py-2 hover:bg-gray-800 text-white cursor-pointer"
            }
            onClick={() => handleFilterLang(item.type)}
          >
            <input
              type="radio"
              className="mr-2 text-transparent"
              checked={item.type === filterLang}
              readOnly
            />
            {item.title}
          </li>
        ))}
      </ul>

      <ul className="p-0">
        <span className="font-semibold text-lg text-white ml-4">Media</span>
        {filterItemsMedia.map((item) => (
          <li
            key={item.id}
            className={
              filterMedia !== item.type
                ? "pl-4 pr-20 py-2 hover:bg-gray-800 text-gray-500 hover:text-white cursor-pointer"
                : "pl-4 pr-20 py-2 hover:bg-gray-800 text-white cursor-pointer"
            }
            onClick={() => handleFilterMedia(item.type)}
          >
            <input
              type="radio"
              className="mr-2 text-transparent"
              checked={item.type === filterMedia}
              readOnly
            />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
