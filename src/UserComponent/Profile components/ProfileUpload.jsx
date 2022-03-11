import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "./Profile.css";
import firebase from "firebase";
import { AuthContextApi } from "./../../Apis/AuthContext";

const ProfileUpload = () => {
  let AUTH = useContext(AuthContextApi);
  let [state, setState] = useState({
    profile_photo: "",
    loading: false,
    barStatus: false,
    progress: 0,
  });
  let { loading, profile_photo, progress, barStatus } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.files[0] });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let { name } = profile_photo;
      let photo = firebase
        .storage()
        .ref(`user-photo/${name}`)
        .put(profile_photo);
      // console.log(photo);
      //!firebase events
      photo.on(
        "state_changed",
        snapShot => {
          //progress bar
          let progressBar =
            (snapShot.bytesTransferred / snapShot.totalBytes) * 100;
          setState({ loading: true, barStatus: true, progress: progressBar });
        },
        error => {
          //error handling
          toast.error(error.message);
        },
        async () => {
          //completion of upload task
          let DownloadUrl = await firebase
            .storage()
            .ref("user-photo")
            .child(name)
            .getDownloadURL();
          AUTH.updateProfile({ photoURL: DownloadUrl });
        }
      );
      toast.success("successfully photo uploaded");
    } catch (error) {
      toast.error(error.message);
    }
  };
  let ProgressTemplate = () => {
    return (
      <progress value={progress} min={0} max={100}>
        {progress}
      </progress>
    );
  };
  return (
    <section id="photo_upload_block">
      <ProgressTemplate />
      {
        <section id="progressSection">
          <article>
            {barStatus === true ? (
              <>
                {/* <span>
                  <ProgressTemplate />
                </span> */}
                <span>{Math.round(progress) + "%"}</span>
              </>
            ) : (
              ""
            )}
          </article>
        </section>
      }
      <article>
        {/* <ProgressTemplate /> */}
        <div className="_block">
          <h2>upload Photo</h2>
          <form onSubmit={handleSubmit}>
            <input type="file" name="profile_photo" onChange={handleChange} />
            <button>
              {loading === true ? <i className="fas fa-spinner"></i> : "upload"}
            </button>
            {/* <button>upload</button> */}
          </form>
        </div>
      </article>
    </section>
  );
};

export default ProfileUpload;
