import HomeLayout from '../../components/HomeLayout';

interface HomeInterface{
    color: string;
}

const Home: React.FC<HomeInterface>  = ({
    color
})=>{
    return <HomeLayout color={color}/>
}

export default Home;