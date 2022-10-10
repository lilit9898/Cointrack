import * as Sections from './Sections';
import PossibilitySection from './Sections/Possibilities/PossibilitySection';

const Home = () => {
  return (
    <>
      <Sections.CoinCharts />
      <PossibilitySection />
    </>
  );
};

export default Home;
