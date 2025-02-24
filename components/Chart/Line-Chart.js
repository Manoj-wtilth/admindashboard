
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const LineChart = () => {
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Number of iPhones Sold"
        },
        axisY: {
            title: "Number of iPhones ( in Million )"
        },
        data: [
            {
                type: "area",
                xValueFormatString: "YYYY",
                yValueFormatString: "#,##0.## Million",
                dataPoints: [
                    { x: new Date(2017, 0), y: 7.6 },
                    { x: new Date(2016, 0), y: 7.3 },
                    { x: new Date(2015, 0), y: 6.4 },
                    { x: new Date(2014, 0), y: 5.3 },
                    { x: new Date(2013, 0), y: 4.5 },
                    { x: new Date(2012, 0), y: 3.8 },
                    { x: new Date(2011, 0), y: 3.2 }
                ]
            }
        ],
        height: "180",
        width: '400',
        exportEnabled: false
    };

    return (
        <div style={{ height: "20px" }}>
            <CanvasJSChart options={options}/>
        </div>
    );
}

export default LineChart;