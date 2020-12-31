import ContactLayout from '../../components/ContactLayout';

interface HomeInterface{
    color: string;
}

const Home: React.FC<HomeInterface>  = ({
    color
})=>{
    return <ContactLayout color={color}/>
}

export default Home;