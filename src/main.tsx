import React from 'react'
import ReactDOM from "react-dom/client";

import './index.less';

const Main: React.FC = () => {
  return (
    <div id={'main'}>
      <div id={'background-dot'}></div>
      <div className={'part'}>
        <div className={'title'}>Tianze Ds Qiu / 邱天泽</div>
        <div className={'normal'}>
          <p>Undergraduate Student of both BUPT and Queen Mary,
          doing research on Agentic AI, NLP and Trustworthy AI.</p>
          <p>Also got interests in Apps/Web Development. Loving Flutter.</p>
        </div>
      </div>
      <div className={'part'}>
        <div className={'subtitle'}>Experiences</div>
        <div className={'normal'}>
          <p>2025.2 - Now: Intern at NTU Singapore, on Agentic AI Safety</p>
          <p>2024.10 - 2025.5: Intern at Gaoling School of AI, RUC, on LLM Reinforcement Learning</p>
          <p>2022.10 - Now: Co-creator of MashOn / 码上 Online LLM Education Platform</p>
        </div>
      </div>
      <div className={'part'}>
        <div className={'subtitle'}>Noteworthy Facts</div>
        <div className={'normal'}>
          <p>2024.12: I was awarded the 2024 China National Scholarship</p>
          <p>2024.10: I won International Gold Medal (Top 0.009%) at China International College Students’ Innovation Competition (a.k.a. “Internet+”) as leading contributor</p>
          <p>2024.2: The project I co-led, MashOn, is listed among 18 typical cases of AI + Higher Education by the Ministry of Education of China</p>
          <p>2023.6: I got an impressive CET-6 English score of 636/710</p>
        </div>
      </div>
      <div className={'part'}>
        <div className={'subtitle'}>Links</div>
        <div className={'normal'}>
          <p>
            <a href={'https://github.com/scris'} target={'_blank'}>GitHub @scris</a>&nbsp;|&nbsp;
            <a href={'https://legacy.tianzeds.pages.dev/'} target={'_blank'}>Former Website Version</a>&nbsp;|&nbsp;
            <a href={'https://orcid.org/0009-0009-7532-5620'} target={'_blank'}>ORCID</a>&nbsp;|&nbsp;
            <a href={'https://www.linkedin.com/in/tianze-qiu-5744ba320/'} target={'_blank'}>LinkedIn</a>
          </p>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
