import React, { useState }  from 'react';
import "./DetailTag.scss"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
export const DetailTag = (props) => {
    const data = props;
    const [expanded, setExpanded] = useState(false);
    return (
      <AnimateSharedLayout>
        {expanded ? (
          <ExpandedTag data={props} setExpanded={() => setExpanded(false)} />
        ) : (
          <CompactTag data={props} setExpanded={() => setExpanded(true)} />
        )}
      </AnimateSharedLayout>
    );
  function CompactTag({ data, setExpanded }) {
    return (
      <div className='MainDetail'>
        <motion.div
      className="CompactCard"
      style={{
        background: data.color.backGround,
        boxShadow: data.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={data.barValue}
          text={`${data.barValue}%`}
        />
        <span>{data.title}</span>
      </div>
      <div className="detail">
        <span>{data.value}</span>
        <span>Last weak</span>
      </div>
    </motion.div>
    </div>
    );
  }
  function ExpandedTag({ data, setExpanded }) {
    const datas = {
      options: {
        chart: {
          type: "area",
          height: "auto",
        },
  
        dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "#fff",
          opacity: 0.35,
        },
  
        fill: {
          colors: ["#90a6ab"],
          type: "gradient",
        },
        dataLabels: {
          enabled: false,
          colors: ["#"],
        },
        stroke: {
          curve: "smooth",
          colors: ["white"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        grid: {
          show: true,
        },
        yaxis: {
          labels: {
              style: {
                  colors: ["#ffffff"],
                  fontSize: '12px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  cssClass: 'apexcharts-yaxis-label',
              },
          },
        },
  
        xaxis: {
          type: "datetime",
          labels: {
              style: {
                  colors: ["#ffffff"],
                  fontSize: '12px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  cssClass: 'apexcharts-xaxis-label',
              },
    
          },
          categories: [
            "2023-03-19T00:00:00.000Z",
            "2023-03-19T01:30:00.000Z",
            "2023-03-19T02:30:00.000Z",
            "2023-03-19T03:30:00.000Z",
            "2023-03-19T04:30:00.000Z",
            "2023-03-19T05:30:00.000Z",
            "2023-03-19T06:30:00.000Z",          
          ],
        },
      },
    };
  
    return (
      <motion.div
        className="ExpandedCard"
        style={{
          background: data.color.backGround,
          boxShadow: data.color.boxShadow,
        }}
        layoutId="expandableCard"
      >
        <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
          <UilTimes onClick={setExpanded} />
        </div>
          <span>{data.title}</span>
        <div className="chartContainer">
          <Chart options={datas.options} series={data.series} type="area" />
        </div>
        <span>Last 24 hours</span>
      </motion.div>
    );
  }
};
