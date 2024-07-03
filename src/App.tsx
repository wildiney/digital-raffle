import Banner from './components/Banner/Banner';
import Lots from './components/Lots/Lots';
import Layout from './components/Layout/Layout';

function App () {
  const background = 'https://images.unsplash.com/photo-1718973818150-9c0c855d33b0?q=80';
  const banner = null;

  return (
    <Layout background={background} >
      {banner && <Banner img={banner}></Banner>}
      <Lots />
    </Layout>
  );
}

export default App
