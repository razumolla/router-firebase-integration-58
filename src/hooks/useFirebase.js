import { useEffect, useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({})

    useEffect(() => {

    }, [])
    const singInWithGoogle = () => {
        // signInWithPopup(auth, googleProvider)
        //     .then(result => {
        //         const user = result.user;
        //         setUser(user);
        console.log(user);
        // })
    }
    return [user, setUser]
}
export default useFirebase;