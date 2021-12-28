import React from "react";
import { Layout, Menu } from "antd";
import "./Home.css";
import { Contant } from "../contant/Contant";

export const Home = () => {
  const { Content, Footer, Sider } = Layout;
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <div className="logo">
            <img src="../../img/myImg.jpeg" alt="" />{" "}
            <i class="fas fa-sliders-h"></i>
            <h5>Rohit Kumar</h5>
            <p>India</p>
          </div>
          <Menu.Item key="1">
            <i class="fas fa-tachometer-alt" /> Dashboard
          </Menu.Item>
          <Menu.Item key="2">
            <i class="fas fa-calendar-alt"></i> Calender
          </Menu.Item>
          <Menu.Item key="3">
            <i class="fas fa-chart-pie"></i> Project Report
          </Menu.Item>
          <Menu.Item key="4">
            <i class="fas fa-folder-open"></i> Collection
          </Menu.Item>
          <Menu.Item key="5">
            <i class="far fa-comment-alt"></i> Feedback
          </Menu.Item>
          <Menu.Item key="6">
            <i class="fas fa-star"></i> Call Rating
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <div className="head">
          <Menu mode="horizontal" defaultSelectedKeys={["7"]}>
            <Menu.Item key="7">
              <i class="fas fa-calendar-alt"></i> Dashboard
            </Menu.Item>
            <Menu.Item key="8">
              <i class="fas fa-user"></i>
            </Menu.Item>
            <Menu.Item key="9">
              <i class="far fa-sticky-note"></i>
            </Menu.Item>
            <Menu.Item key="10">
              <i class="fas fa-voicemail"></i>
            </Menu.Item>
            <Menu.Item key="11">
              <i class="fas fa-car"></i>
            </Menu.Item>
            <Menu.Item key="12">
              <i class="fas fa-tachometer-alt"></i>
            </Menu.Item>
            <Menu.Item key="13">
              <i class="fas fa-glass-martini"></i>
            </Menu.Item>
            <Menu.Item key="14">
              <i class="fas fa-envelope-open-text"></i>
            </Menu.Item>
          </Menu>
        </div>
        {/* -- content -- */}
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
          >
           <Contant />
          </div>
        </Content>
        
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2021 Created by Rohit Kumar
        </Footer>
      </Layout>
    </Layout>
  );
};
