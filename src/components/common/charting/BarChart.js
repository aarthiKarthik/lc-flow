import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['Today', '3 Days', '2 Weeks', '30 Days', '60 Days', '>60 Days'],
  datasets: [
    {
      label: 'Amount $',
      backgroundColor: '#FF9B3B',
      borderColor: '#FF6210',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(245, 171, 53, 0.4)',
      hoverBorderColor: 'rgba(245, 171, 53, 0.9)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default ()=>{

      return (
      <div>
        <Bar
          data={data}
          width={300}
          height={300}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  
}