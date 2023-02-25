import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect,useState } from 'react';
import h1 from './img/i1.png';


const Changer = () => {
  const [theme, settheme] = useState('white')
  const [icon, seticon] = useState(<LightModeIcon/>)

  function im() {
    if(theme==='black'){
      settheme('white');
      seticon(<LightModeIcon/>);
    }

    else{
      settheme('black');
      seticon(<DarkModeIcon/>);
    }
    
  }

  useEffect(() => {
  document.body.className=theme;
  },[theme])
  
  return (
   <>
 <div className='nav'>
 
 <p className='pg'>light & dark </p>

<p className='btn1'>
<button className='btn' onClick={im}> {icon}</button>
</p>

 </div>

 <div className='nxt'>

  <div className='nxt1'>
    <h1 >Nike</h1>
    <img className='img1' src={h1} />
  </div>

<div className='nxt2'>
  <p className='ph2'>tenis Nike</p>
  <p className='p1'>EXCELENTE PARA CORRIDAS</p>
  <p className='p3'> Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Est accusantium reiciendis <br/> quos non consequatur voluptates, exdeleniti voluptatum nam dolorum dolore itaqueds,<br/> exercitationem minus velit pariatur ducimus <br/> necessitatibus suscipit quas.</p>
  <div className='flex'>
    <p className='fl1'>R$299,90</p> 
    <button className='btn2'>Buy</button>
    </div>
</div>
    
 </div>
   </>
  )
}

export default Changer