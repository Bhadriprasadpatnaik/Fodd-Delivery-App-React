import React from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile components/Profile";
import ProfileUpload from './Profile components/ProfileUpload';
import CreatePlayList from './../Components/AudioComponent/CreatePlayList';
import MusicHome from "../Components/AudioComponent/MusicHome";
import AudioDetails from "../Components/AudioComponent/AudioDetails";



const UserRightBlock = () => {
  let { id } = useParams();
  return (
    <div className="userRightBlock">
      {id === "profile" && <Profile />}
      {id === "upload-photo" && <ProfileUpload />}
      {id === "create-play-list" && <CreatePlayList />}
      {id === "music-home" && <MusicHome/> }
      <AudioDetails/>
    </div>
  );
};

export default UserRightBlock;
