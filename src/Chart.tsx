import React from 'react';

import styles from './Chart.module.css';

const Chart = ({ data }) => {
  const maxValue = Math.max(...data, 1);

  return (
    <div className={styles.chart}>
      {data.map((value, index) => (
        <div
          key={index}
          className={styles.bar}
          style={{
            height: `${(value / maxValue) * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Chart;
