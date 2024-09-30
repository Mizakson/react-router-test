import { Outlet, useParams } from "react-router-dom"
import Spinach from './Spinach.jsx'
import Popeye from './Popeye.jsx'
import DefaultProfile from './DefaultProfile.jsx'

const Profile = () => {
    const { name } = useParams()

    return (
        <div>
            <h1>Hello from profile page</h1>
            <p>So, how are you?</p>
            <hr />
            <h2>The profile visited is here:</h2>
            { name === "popeye" ? (
                <Popeye />
            ) : name === "spinach" ? (
                <Spinach />
            ) : (
                <DefaultProfile />
            )}
            <Outlet />
        </div>
    )
}

export default Profile