import React from "react";
import { Layout, Menu } from "antd";
import "./Header.css";

export const Header = () => {
  const { Header } = Layout;

  return (
    <>
      <Layout>
        <Header className="header">
          <Menu theme="dark" mode="horizontal" className="menu">
            <Menu.Item key="1">
              <i class="fas fa-square-full"></i> Production
            </Menu.Item>
            <Menu.Item key="2">
              <i class="fas fa-square-full"></i> Purchase
            </Menu.Item>
            <Menu.Item key="3">
              <i class="fas fa-square-full"></i> Inventory
            </Menu.Item>
            <Menu.Item key="4">
              <i class="fas fa-square-full"></i> WMS
            </Menu.Item>
            <Menu.Item key="5">
              <i class="fas fa-square-full"></i> CRM
            </Menu.Item>
            <Menu.Item key="6">
              <i class="fas fa-square-full"></i> Sales
            </Menu.Item>
            <Menu.Item key="7">
              <i class="fas fa-square-full"></i> More
            </Menu.Item>
              <Menu.Item key="8">
                <i class="fas fa-search"></i>
              </Menu.Item>
              <Menu.Item key="9">
                <i class="fas fa-bell"></i>
              </Menu.Item>
              <Menu.Item key="10">
                <i class="fas fa-ellipsis-v"></i>
              </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};
