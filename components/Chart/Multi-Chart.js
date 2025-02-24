import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const MultiChart = () => {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2",
            title: {
                text: "Quarterly Sales by Country"
            },
            axisY: {
                prefix: "$",
                //gridThickness: 0,
                tickLength: 0,
                suffix: "K",
                title: "Sales in USD",
                includeZero: true
            },
            legend: {
                cursor: "pointer",
                itemclick: function (e) {
                    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    }
                    else {
                        e.dataSeries.visible = true;
                    }
                    e.chart.render();
                }
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "column",
                name: "Germany",
                showInLegend: true,
                color: "#118AB2",
                yValueFormatString: "$##,###K",
                dataPoints: [
                    { label: "Q1", y: 50 },
                    { label: "Q2", y: 100 },
                ]
            }, {
                type: "column",
                name: "India",
                color: "#06D6A0",
                showInLegend: true,
                yValueFormatString: "$##,###K",
                dataPoints: [
                    { label: "Q1", y: 75 },
                    { label: "Q2", y: 115 },
                ]
            }, {
                type: "column",
                name: "China",
                color: "#FFD166",
                showInLegend: true,
                yValueFormatString: "$##,###K",
                dataPoints: [
                    { label: "Q1", y: 110 },
                    { label: "Q2", y: 120 },
                ]
            }, {
                type: "column",
                name: "Unites States of America",
                color: "#EF476F",
                showInLegend: true,
                yValueFormatString: "$##,###K",
                dataPoints: [
                    { label: "Q1", y: 140 },
                    { label: "Q2", y: 150 },
                ]
            }],
            height: "200",
            width: '400',
            exportEnabled: false
        };
 
        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
}
export default MultiChart; 