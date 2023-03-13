import './chart.scss';

import ChartBar from './chart-bar';
import { DataPoint } from '../models/data-point';

type ChartProps = {
  dataPoints: DataPoint[];
};

const Chart = (props: ChartProps) => {
  const dataPointValues = props.dataPoints.map((dataPoint: DataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: DataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
