import React from 'react'
import { AuthContextApi } from '../../Apis/AuthContext';
import "./Profile.css";
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    let { displayName, photoURL } = useContext(AuthContextApi);
    return (
      <section id="profileBlock">
        <article>
          <header>
            <figure>
              <Link to="/userhome/upload-photo">
                <span className="_editIcon">
                  <i class="fa fa-pencil" aria-hidden="true"></i>
                  Choose Photo
                </span>

                <img src={photoURL} alt={displayName} />
              </Link>
            </figure>
            <aside>
              <h5>Profile</h5>
              <h1>{displayName}</h1>
            </aside>
          </header>
        </article>
      </section>
    );
}

export default Profile
