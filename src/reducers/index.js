import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Chamak Challo", duration: "3:49" },
    { title: "Laila", duration: "2:25" },
    { title: "Jane Jana", duration: "4:03" },
    { title: "Sultan", suration: "3:20" },
    { title: "O Sanam", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
