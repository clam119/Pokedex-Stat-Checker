import { Radar } from 'react-chartjs-2';

import {
Chart as ChartJS,
RadialLinearScale,
PointElement,
LineElement,
Filler,
Tooltip,
} from 'chart.js';

ChartJS.register(
RadialLinearScale,
PointElement,
LineElement,
Filler,
Tooltip,
);

export default function PokemonStats ({isLoading, requestedPokemon}) {
    if (isLoading){
        const data = {
            labels: ['HP', 'ATK', 'DEF', 'SP.ATK', 'SP.DEF', 'SPD'],
            datasets: [
              {
                data: [0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
          };
          return (
              <div style={{ height: 475, width: 475}}>
                  <Radar data = { data }></Radar>
              </div>
          )
    } 

const data = {
  labels: ['HP', 'ATK', 'DEF', 'SP.ATK', 'SP.DEF', 'SPD'],
  datasets: [
    {
      data: requestedPokemon.stats.map(stat => stat.base_stat),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};
    
  return (
    <div className="border-black"  style={{ height: 475, width: 475}}  >
        <Radar data= {data}></Radar>
    </div>
  )
}