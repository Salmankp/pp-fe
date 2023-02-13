import React from 'react'
import styles from './styles.module.scss'
import Chart from 'react-apexcharts'

const Graph = ({data, currency}) => {
  // https://apexcharts.com/javascript-chart-demos/line-charts/zoomable-timeseries/
  const options = {
    chart: {
      type: 'area',
      stacked: false,
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: data?.dates,
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val)
        },
      },
    },
  }
  const series = [
    {
      name: currency,
      data: data?.amounts,
    },
  ]

  return (
    <div className={styles.chart}>
      <Chart options={options} series={series} type='area' height={350} />
    </div>
  )
}

export default Graph
