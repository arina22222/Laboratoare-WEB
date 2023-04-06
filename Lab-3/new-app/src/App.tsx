import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Card,Col, Row } from 'antd';
import './App.css';


const { Header, Content, Footer, Sider } = Layout;


const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);
function handleClick() {
  alert("Ai grija, azi vei cuceri lumea :)"); 
  console.log("Ai grija, azi vei cuceri lumea :)"); 
}

const App: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const[secondName, setSecondName]=useState('');

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const cards = [
    { title: 'Look', content: 'Card content' },
    { title: 'Smile', content: 'Card content' },
    { title: 'Amazing', content: 'Card content' }
  ];
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: '20 24px', minHeight: 280 }}>Content
          <input value={firstName} name="firstName" onChange={e=>setFirstName(e.target.value)} placeholder='Introduceti numele '   />
          <input value={secondName} name="secondName" onChange={e=>setSecondName(e.target.value)} placeholder="De la 1 la 10 cat de bine te simti."   />
          <button onClick={handleClick}>Next</button>
        
            <Row gutter={16}>
                {cards.map(card => (
                   <Col span={8} key={card.title}>
                     <Card title={card.title} bordered={false}>
                      {card.content}
                    </Card>
                   </Col>
              ))}
            </Row>

          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Hey, I Believe, I can fly, I believe i can touch the sky</Footer>
    </Layout>
  );
};

export default App;