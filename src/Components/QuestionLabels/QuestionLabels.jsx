import React from 'react';
import './QuestionLabels.scss';

export const QuestionLabels = () => {
  return (
    <div className='container'>
      <div className='question'>
        <div className='vote_item'>
          <div className='item_vote'>
            <span>1</span>
          </div>
          <div className='vote'>
            <span>votes</span>
          </div>
          <div className='item_answer'>
            <span>5</span>
          </div>
          <div className='answer'>
            <span>answer</span>
          </div>
          <div className='item_view'>
            <span>9</span>
          </div>
          <div className='view'>
            <span>view</span>
          </div>
        </div>
        <div className='post'>
          <h3 className='title'>
            <a href='#'> Drawing on Canvas and Fitting this drawing inside the control using MVVM</a>
          </h3>
          <div className='content'>I am trying to draw a graphical object on canvas that will fit the size
           of the control on the screen using .NET MAUI. 
          I am aiming to plot some grid lines inside the control to show some data. I need</div>
          <div className='language'>
              <a className='item_1' href='#'> Javascript</a>
              <a className='item_2' href='#'> React</a>
              <a className='item_3' href='#'> C#</a>
              <a className='item_4' href='#'> Html</a>
          </div>
        </div>
        <div className='asked'>
          <div className='polite'>
            <a href='https://stackoverflow.com/users/11973720/neha-chaudhary'>
              <div className='profile'>
                <img src='https://yt3.googleusercontent.com/EjDbQk-LzHFPEcOUSNceQ4wKy3TAdCyFd7b4MEbtKKfQflhMikFN_VUo7HVszQ-fjTUJNR7MCg=s900-c-k-c0x00ffffff-no-rj' alt='alibaba' />
              </div>
            </a>
          </div>
          <div className='info'>
            <a className='info_item' href='https://stackoverflow.com/users/11973720/neha-chaudhary'>Florentino</a>
            <p className='list_view'>1.999 </p>
            <a className='time' href="#">asked 5 seconds ago</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionLabels;
