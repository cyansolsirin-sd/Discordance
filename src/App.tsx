import Hero from './components/Hero';
import Cast from './components/Cast';
import Crew from './components/Crew';

export default function App() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Hero />
      <Cast />
      <Crew />
    </main>
  );
}
