import * as React from 'react';
import { Link} from 'react-router-dom';
import Main from './Main';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';


export default function App() {




  return (
    <>  
      <div>

        <ul>
          <li><Link to='/'>About today </Link></li>
          <li><Link to='/topics'>Now</Link></li>
          <li><Link to='/settings'>About Tomorrow</Link></li>
        </ul>
        <hr />
        <Main />       
      </div>   
    </>)
}