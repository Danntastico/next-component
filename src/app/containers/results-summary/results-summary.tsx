import React from 'react'
import './styles.css'

const ResultsSummary: React.FC = () => (
  <div className='container'>
    <section className='results'>
      <h4>Your Result</h4>
      <div className='circled-container'>
        <span>76</span>
        <p>of 100</p>
      </div>
      <h2>Great</h2>
      <div className='results-text-container'>
        <p>You scored higher than 65% of the people who have taken these test.</p>
      </div>
    </section>
    <section className='summary'>
      <h3>Summary</h3>
      <div className='summary-card summary-reaction'>
        <p>Reaction</p>
        <div className='summary-statistics'>
          <p className='total'>80</p>
          <p>/ 100</p>
        </div>
      </div>
      <div className='summary-card summary-memory'>
        <p>Memory</p>
        <div className='summary-statistics'>
          <p className='total'>92</p>
          <p>/ 100</p>
        </div>
      </div>
      <div className='summary-card summary-verbal'>
        <p>Verbal</p>
        <div className='summary-statistics'>
          <p className='total'>61</p>
          <p>/ 100</p>
        </div>
      </div>
      <div className='summary-card summary-visual'>
        <p>Visual</p>
        <div className='summary-statistics'>
          <p className='total'>72</p>
          <p>/ 100</p>
        </div>
      </div>
      <button>Continue</button>
    </section>
  </div>
)


export default ResultsSummary