import './Portfolio.css';

export default function Portfolio(props) {
  return (
    <section className='body-container'>
      <h1>Irem Harnak is a front-end developer based in Toronto, Canada</h1>
      <div className='portfolio-container'>
        <div className='portfolio-img-container'>
          <img src="https://live.staticflickr.com/65535/52248975412_2092c75493_c.jpg" alt="" />
        </div>
        <div className='portfolio-img-container'>
          <img src="https://live.staticflickr.com/65535/52250454485_0a1e7df2a9_c.jpg" alt="" />
        </div>
        <div className='portfolio-img-container'>
          <img src="https://live.staticflickr.com/65535/52249950371_6d31d2d343_c.jpg" alt="" />
        </div>
      </div>
      </section>
  )
}