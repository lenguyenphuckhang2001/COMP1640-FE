import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import { SidebarData } from '../Data/data';
import { UilBars } from '@iconscout/react-unicons';
import { UilMultiply } from '@iconscout/react-unicons'
import './Sidebar.scss';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-50%',
    },
  };
  return (
    <Col md={3}>
      <>
        <div
          className='bars'
          style={expanded ? { left: '50%' } : { left: '5%' }}
          onClick={() => setExpaned(!expanded)}
        >
          <span>{expanded ? (<UilMultiply/>) : (<UilBars/>)}</span>
        </div>
        <motion.div
          className='sidebar'
          variants={sidebarVariants}
          animate={window.innerWidth <= 768 ? `${expanded}` : ''}
        >
          {/* logo */}
          {/* <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div> */}

          <div className='menu'>
            {SidebarData.map((item, index) => {
              return (
                <Link className='menu-link' to={item.routing}>
                  <div
                    className={selected === index ? 'menuItem active-mod' : 'menuItem'}
                    key={index}
                    onClick={() => setSelected(index)}
                  >
                    <item.icon />
                    <span>{item.heading}</span>
                  </div>
                </Link>
              );
            })}
            <div className='menuItem'>
              <UilSignOutAlt />
            </div>
          </div>
        </motion.div>
      </>
    </Col>
  );
};
