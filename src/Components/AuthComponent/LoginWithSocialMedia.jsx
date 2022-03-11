import firebase from "../../firebase";
export let GoogleProvider = new firebase.auth.GoogleAuthProvider();
export let FacebookProvider = new firebase.auth.FacebookAuthProvider();


let SocialLogin = async provider => {
    try {
        let DATA = await firebase.auth().signInWithPopup(provider);
        return DATA.user;
    } catch (err) {
        return err;
    }
};

export default SocialLogin;