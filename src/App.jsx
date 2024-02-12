import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Layout, Button, DatePicker, theme   } from "antd";
import AppHeader from "./components/header";


import { Layout as AntLayout, Menu, Breadcrumb, ConfigProvider, Avatar, Popover, Table, Spin, notification } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = AntLayout;
const { SubMenu } = Menu;
import moment from 'moment';
import axios from "axios";
import { mapIdToValue, mapIdToStatusString, mapIdToNazevString, getNazevfromId, cities, Statuses } from "./helper/helper";

const details = (text, loadedContent) => (
  <>
    <h2>Podrobnosti Výjezdu</h2>
    <h3>📝Poznámka pro média</h3>
    <p>{text}</p>
    <h3>🚒Zasahující jednotky</h3>
    <Spin tip="Načítání Jednotek"></Spin>
  </>
);

const columns = [
  { title: "Datum ohlášení", dataIndex: "casOhlaseni", key: "casOhlaseni", render: date => (date instanceof Date) ? date.toLocaleString() : "" },
  { title: "Stav", dataIndex: "stavId", key: "stavId", filters: Statuses, onFilter: (value, record) => record.stavId.startsWith("Ukončená" || "SaP na místě" || "Likvidovaná"), },
  { title: "Typ události", dataIndex: "typId", key: "typId" },
  { title: "Podtyp události", dataIndex: "podtypId", key: "podtypId" },
  { title: "Kraj", dataIndex: "kraj", key: "kraj" },
  { title: "Okres", dataIndex: "okres", key: "okres" },
  { title: "Obec", dataIndex: "obec", key: "obec", filters: cities, filterMultiple: true, onFilter: (value, record) => record.obec.startsWith(value) },
  { title: "Část obce", dataIndex: "ulice", key: "ulice" },
  { title: "ORP", dataIndex: "ORP", key: "ORP" },
  { title: "Silnice", dataIndex: "silnice", key: "silnice" },
  { title: "Poznámka pro média", dataIndex: "poznamkaProMedia", key: "poznamkapromedia", render: (text) =>
   <Popover trigger="click" content={details(text)}>
      {text}
      <Button>Podrobnosti</Button>
    </Popover> },
]

function App() {
  const AvatarImageSource = "./mainicon.png";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [CalloutDataPopover] = useState([]);
  const [CalloutDataLoading, setCalloutDataLoading] = useState(true);

  const [api, contextHolder] = notification.useNotification();
  const openSuccessNotification = (type) => {
    api[type]({
      messsage: "Úspěch",
      description: "Výjezdy byly úspěšně načteny",
    })
  }

  useEffect(() => {
    const startOfDay = moment().startOf('day').toISOString();
    const endOfDay = moment().endOf('day').toISOString();

    const params = {
      casOd: startOfDay,
      casDo: endOfDay,
      krajId: 116,
      stavIds: [
        210, 400, 410, 420, 430, 440, 500, 510, 520, 600,
        610, 620, 700, 710, 750, 760, 780, 800
      ],
    };
    axios.get("https://udalosti.firebrno.cz/api/", { params }).then(response => {
      response.data.map(item => {
          if (item.silnice == null) {
            item.silnice = "❌";
          }
      });
      const ModifiedData = response.data.map(item => ({
        ...item,
        casOhlaseni: new Date(item.casOhlaseni),
        stavId: mapIdToValue(item.stavId),
        kraj: item.kraj.nazev,
        podtypId: mapIdToNazevString(item.podtypId),
        typId: getNazevfromId(item.typId),
        okres: item.okres.nazev,
      }));
      setData(ModifiedData);
      setLoading(false);
      openSuccessNotification("success");
    }).catch(error => {
      AxiosError = error;
      console.log(error);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {contextHolder}
      <AntLayout style={{ minHeight: '100vh' }}>
      <AntLayout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0}} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Výjezdy</Breadcrumb.Item>
          </Breadcrumb>
          <h1>PlamenZvon</h1>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Spin spinning={loading}>
              <Table dataSource={data} columns={columns}></Table>
            </Spin>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', fontFamily: "ggsans" }}>Zdroj Dat <a href="https://udalosti.firebrno.cz">FireBrno</a> <br /> PlamenZvon ©2024 Lukáš Poláček</Footer>
      </AntLayout>
    </AntLayout> 
    </>
  )
}

export default App