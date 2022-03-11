import React, { useState, useEffect, createContext } from "react";
import firebase from "./../firebase";
export let AudioContextApi = createContext();


let AudioContextProvider = ({ children }) => {
    let [state, setState] = useState([]);
    let [selectSong, setSelecSong] = useState([]);
    let HandleSelect = audio => {
        setSelecSong(audio);
        console.log(selectSong);
    }
    useEffect(() => {
        let fetchAudios = async () => {
            // fetch data from database
            let audioList = firebase.database().ref("audio_library");
            // firebase event to fetch
            audioList.on("value", callback => {
                // console.log(callback.val());
                // console.log(callback.key);
                let SpotifyMusics = [];
                callback.forEach(audio => {
                    let {
                        DownloadMP3, DownloadPoster, audio_artist, audio_category, audio_details, audio_language, audio_title,
                    } = audio.val();
                    SpotifyMusics.push({
                        id: audio.key,
                        title: audio_title,
                        artist: audio_artist,
                        language: audio_language,
                        category: audio_category,
                        details: audio_details,
                        poster: DownloadPoster,
                        src:DownloadMP3,
                    })
                })
                setState(SpotifyMusics);
            });
        }
        fetchAudios();
    }, [state.AUDIOS]);
    return (
        <AudioContextApi.Provider value={{ state, HandleSelect, selectSong }}>
            {children}
        </AudioContextApi.Provider>
    );
}

export default AudioContextProvider;