import './chart.scss';

import ChartBar from './chart-bar';
import { DataPoint } from '../models/data-point';

type ChartProps = {
  dataPoints: DataPoint[];
};

const Chart = (props: ChartProps) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
