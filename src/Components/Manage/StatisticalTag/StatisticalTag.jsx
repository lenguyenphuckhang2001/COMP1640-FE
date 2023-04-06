import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { DetailTag } from '../DetailTag/DetailTag';
import './StatisticalTag.scss';
import { DetailTagData } from '../Data/data';
import { useEffect } from 'react';
import TagApi from '../../../Api/TagApi';
export const StatisticalTag = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
  (async () => {
    const res = await TagApi.getAll();
    setDatas(res);
  })();
  }, []);
console.log(datas)
  const [state, setState] = useState({
    series: [
      {
        name: 'JS',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Html',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });
  return (
    <div className='StatisticalTag'>
      <div className='DetailTag'>
        {DetailTagData.map((tag, id) => {
          return (
            <div className='parentContainer' key={id}>
              <DetailTag
                title={tag.title}
                color={tag.color}
                barValue={tag.barValue}
                value={tag.value}
                series={tag.series}
              />
            </div>
          );
        })}
      </div>
      <div className='Compare-department'>
        <h4>Number of ideas for each department</h4>
        <ReactApexChart options={state.options} series={state.series} type='area' height={350} />
      </div>
      
    </div>
  );
};
