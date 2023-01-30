import propTypes from "prop-types";
import { createContext, useMemo, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  /* useState du composant searchBar */
  const [searchValue, setSearchValue] = useState("");

  /* useStates du composant filterPanel */
  const [filterCdd, setFilterCdd] = useState(false);
  const [filterCdi, setFilterCdi] = useState(false);
  const [filterAlternance, setFilterAlternance] = useState(false);
  const [filterInternship, setFilterInternship] = useState(false);
  const [kilometer, setKilometer] = useState(1000);

  /* useState du composant UserGeolocation */
  const [userCoordinates, setUserCoordinates] = useState({
    latitude: 50.6301254,
    longitude: 3.01388937,
  });

  const [userInfo, setUserInfo] = useState({
    id: null,
    lastname: null,
    firstname: null,
    email: null,
    phonenumber: null,
    linkedinlink: null,
    githublink: null,
    city: null,
    activeSearch: null,
    postalcode: null,
    CV: null,
    avatar: null,
    biography: null,
  });

  const [mySpace, setMySpace] = useState("profile");

  const context = useMemo(
    () => ({
      searchValue,
      setSearchValue,
      filterCdd,
      setFilterCdd,
      filterCdi,
      setFilterCdi,
      filterAlternance,
      setFilterAlternance,
      filterInternship,
      setFilterInternship,
      userCoordinates,
      setUserCoordinates,
      kilometer,
      setKilometer,
      userInfo,
      setUserInfo,
      mySpace,
      setMySpace,
    }),
    [
      searchValue,
      setSearchValue,
      filterCdd,
      setFilterCdd,
      filterCdi,
      setFilterCdi,
      filterAlternance,
      setFilterAlternance,
      filterInternship,
      setFilterInternship,
      userCoordinates,
      setUserCoordinates,
      kilometer,
      setKilometer,
      userInfo,
      setUserInfo,
      mySpace,
      setMySpace,
    ]
  );

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export default Provider;

export { Context };

const UserInfoShape = {
  id: propTypes.number,
  lastname: propTypes.string,
  firstname: propTypes.string,
  email: propTypes.string,
  phonenumber: propTypes.string,
  linkedinlink: propTypes.string,
  githublink: propTypes.string,
  city: propTypes.string,
  postalcode: propTypes.number,
  activeSearch: propTypes.number,
  CV: propTypes.string,
  avatar: propTypes.string,
  biography: propTypes.string,
};

Provider.propTypes = {
  children: propTypes.shape({
    searchValue: propTypes.string,
    setSearchValue: propTypes.string,
    filterCdd: propTypes.bool,
    setFilterCdd: propTypes.bool,
    filterCdi: propTypes.bool,
    setFilterCdi: propTypes.bool,
    filterAlternance: propTypes.bool,
    setFilterAlternance: propTypes.bool,
    filterInternship: propTypes.bool,
    setFilterInternship: propTypes.bool,
    userInfo: propTypes.shape(UserInfoShape),
    setUserInfo: propTypes.shape(UserInfoShape),
    mySpace: propTypes.string,
    setMySpace: propTypes.string,
  }).isRequired,
};
