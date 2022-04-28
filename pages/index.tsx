import type { NextPage } from "next";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import HeroSection from "../components/HeroSection/HeroSection";
import Skeleton from "../components/Skeleton/Skeleton";

const Home: NextPage = () => {
  return (
    <Skeleton>
      {/* HERO SECTIOn */}
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate rem
        minima maiores culpa, asperiores eius. Earum, nobis exercitationem.
        Eaque ab dolore odio officia unde incidunt quis exercitationem libero
        rem, obcaecati, delectus dolorum rerum nobis. Aliquid perferendis velit
        suscipit officia illum autem quidem adipisci fugit, in aut ratione
        repellat! Illum dolores est voluptatum nam laborum, et, laboriosam
        maxime ipsum consequuntur quis quasi eligendi eos dignissimos, placeat
        porro. Reiciendis totam atque aspernatur fugiat pariatur minima, modi
        corrupti fugit, quibusdam, harum quasi aperiam! Laudantium voluptatem id
        nemo, sunt ipsum earum necessitatibus, omnis exercitationem ipsa vel
        laborum, facere possimus dolorem odit consequuntur cum laboriosam.
      </p>
    </Skeleton>
  );
};

export default Home;
