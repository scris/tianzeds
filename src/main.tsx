import React from 'react';
import ReactDOM from "react-dom/client";

import './index.less';

const Main: React.FC = () => {
  return (
    <div id={'main'}>
      <div id={'background-dot'}></div>
      <div className={'part'}>
        <div className={'title'}>Tianze Ds Qiu / 邱天泽</div>
        <div className={'normal'}>
          <p>
            Undergraduate Student of both&nbsp;
            <a href={'https://www.bupt.edu.cn/'}>BUPT</a>
            &nbsp;and&nbsp;
            <a href={'https://www.qmul.ac.uk/'}>Queen Mary</a>,
            doing research on Agentic AI, NLP and Trustworthy AI.
          </p>
          <p>
            Incoming Ph.D. student of both&nbsp;
            <a href={'https://cs.fudan.edu.cn/'}>College of CS and AI, Fudan University</a>
            &nbsp;and&nbsp;
            <a href={'https://sii.edu.cn/'}>Shanghai Innovation Institute</a>.
          </p>
          <p>Also got interests in Apps / Web Development. Loving Cross-Platform.</p>
        </div>
      </div>
      <div className={'part'}>
        <div className={'subtitle'}>Education</div>
        <div className={'normal'}>
          <p><span className={'time'}>Starting from 2026.9:</span> Fudan University, Ph.D. student in Computer Science and Technology.</p>
          <p><span className={'time'}>2022.9 - 2026.6:</span> BUPT, Undergraduate student in Intelligent Science and Technology. Rank: 2 / 98.</p>
          <p><span className={'time'}>2019.9 - 2022.6:</span> Hangzhou No.2 High School, Zhejiang.</p>
        </div>
      </div>
      <div className={'part'}>
        <div className={'subtitle'}>Experiences</div>
        <div className={'normal'}>
          <p><span className={'time'}>2025.2 - 2025.9:</span> Intern at NTU Singapore, on Agentic AI Safety, working under Dr. Xinfeng Li.</p>
          <p><span className={'time'}>2024.10 - 2025.5:</span> Intern at AIBox, Gaoling School of AI, RUC, on LLM Reinforcement Learning.</p>
          <p><span className={'time'}>2022.10 - 2025.4:</span> Co-creator of MashOn / 码上 Online LLM Education Platform.</p>
        </div>
      </div>
      <div className={'part'}>
        <div className={'subtitle'}>Noteworthy Facts</div>
        <div className={'normal'}>
          <p><span className={'time'}>2024.12:</span> I was awarded the 2024 China National Scholarship.</p>
          <p><span className={'time'}>2024.10:</span> I won International Gold Medal (Top 0.009%) at China International College Students’ Innovation Competition (a.k.a. “Internet+”) as leading contributor.</p>
          <p><span className={'time'}>2024.2:</span> The project I co-led, MashOn, is listed among 18 typical cases of AI + Higher Education by the Ministry of Education of China.</p>
          <p><span className={'time'}>2023.6:</span> I got an impressive CET-6 English score of 636 / 710.</p>
        </div>
      </div>
      <div className={'part'}>
        <div className={'subtitle'}>Links</div>
        <div className={'normal'}>
          <p>
            <a href={'https://github.com/scris'} target={'_blank'}>GitHub @scris</a>&nbsp;|&nbsp;
            <a href={'https://legacy.tianzeds.pages.dev/'} target={'_blank'}>Old Website</a>&nbsp;|&nbsp;
            <a href={'https://orcid.org/0009-0009-7532-5620'} target={'_blank'}>ORCID</a>&nbsp;|&nbsp;
            <a href={'https://www.linkedin.com/in/tianze-qiu-5744ba320/'} target={'_blank'}>LinkedIn</a>&nbsp;|&nbsp;
            <a href={'./cv-en.pdf'} target={'_blank'}>Resume</a>&nbsp;|&nbsp;
            <a href={'./cv-cn.pdf'} target={'_blank'}>中文简历</a>&nbsp;|&nbsp;
            <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2025209903号-1</a>
          </p>
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
