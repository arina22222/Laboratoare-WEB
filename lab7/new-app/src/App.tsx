import * as React from 'react';
import { Link} from 'react-router-dom';
import Main from './Main';
import { SwapOutlined, PlayCircleOutlined, DownSquareOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import './App.css'

export default function App() {

  return (
    <>  
      <div className='Main'>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<SwapOutlined />}>
            <Link to='/'>About today</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PlayCircleOutlined />}>
            <Link to='/topics'>Now</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DownSquareOutlined />}>
            <Link to='/settings'>About Tomorrow</Link>
          </Menu.Item>
        </Menu>
        <hr />
        <Main />       
      </div>   
    </>)
}
