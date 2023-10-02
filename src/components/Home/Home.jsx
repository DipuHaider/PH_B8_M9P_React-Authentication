import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {

    const authInfo = useContext(AuthContext);

    return (
        <div>
            <Helmet>
                <title>RA | Home</title>
            </Helmet>
            <h2 className='text-3xl'>This is home. Auth Info: {authInfo.name}</h2>
        </div>
    );
};

export default Home;