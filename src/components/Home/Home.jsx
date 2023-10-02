import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>RA | Home</title>
            </Helmet>
            <h2 className='text-3xl'>This is home</h2>
        </div>
    );
};

export default Home;