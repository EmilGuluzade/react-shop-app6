import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'
import Banner from '../../../components/sections/banner/Banner'
import Cards from "../../../components/sections/Cards/Cards";
import Register from '../../../components/sections/Register/Register';
import Services from '../../../components/sections/Services/Services';
import Events from '../../../components/sections/Events/Events';

const Home = () => {
    const {data,setData} = useContext(MainContext)
    return (
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Banner></Banner>
        <Cards></Cards>
        <Register></Register>
        <Services></Services>
        <Events></Events>
      </>
    );
}

export default Home
        