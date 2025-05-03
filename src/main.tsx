import React from 'react'
import ReactDOM from "react-dom/client";

import './index.less';

const Main: React.FC = () => {
  return (
    <div id={'main'}>
      <div id={'title'}>Tianze Ds Qiu</div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Main />)
