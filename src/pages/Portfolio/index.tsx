import PortfolioLayout from '../../components/PortfolioLayout';

interface HomeInterface{
    color: string;
}

const Home: React.FC<HomeInterface>  = ({
    color
})=>{
    return <PortfolioLayout color={color}/>
}

export default Home;