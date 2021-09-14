import React from 'react'
import { Doughnut } from 'react-chartjs-2';
const PieChart = () => {
    const data = {
        labels:[ '15 ETH', '10 ETH', '5 ETH', '2 ETH', '1 ETH'],
        datasets:[
            {
                label: 'sales',
                data:[1,2,2,1,5],
                borderColor: [
                    'rgba(255,206,86,0.2)',
                    'rgba(255,106,86,0.2)',
                    'rgba(255,226,86,0.2)',
                    'rgba(255,26,86,0.2)',
                ],
                backgroundColor: [
                    '#5598DA',
                    '#7F7AD5',
                    '#48ECD9',
                    '#4897A1',
                    '#387BAD',
                ]
            }
        ]
    }
    const options = {
        title:{
            display:true,
            text:'Chart'
        }
    }
    return (
        <div className="chart_container">
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default PieChart
