import React from 'react';
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import '../App.css';

function header() {
  return (
    <>
        <div className="AppHeader">
            <Typography.Title className="Title">PlamenZvon</Typography.Title>
        </div>
    </>
  )
}

export default header