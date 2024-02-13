import { promises as fs } from 'fs';
import { DataFrame, readCSV } from 'danfojs-node';
import Visualization from '../components/visualization';

export default function Home() {

  const fetchData = async () => {
    const file = readCSV(process.cwd() + '/src/data/netflix_titles.csv');
    const df = new DataFrame(file);
    console.log(df)
  };

  const df = fetchData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Render your data here */}
      {/* {data.map(i => {
        
      })} */}
      <Visualization data={df}/>
    </main>
  );
}
