import React from "react";
import { Card, Col, Row } from "antd";
import "./Contant.css";

export const Contant = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={7}>
          <Card
            title="Sale"
            className="card1"
            bordered={false}
            extra={
              <a>
                This Month <i class="fas fa-chevron-down"></i>
              </a>
            }
          >
            <figure class="pie-chart">
              <div class="inner">
                <i class="fas fa-signal"></i>
                <p class="num">532560</p>
                <p class="word">in rupees</p>
              </div>
            </figure>
            <div class="card-footer text-muted">
              <p class="completed">
                <i class="fas fa-square-full"></i> Completed
              </p>
              <p class="urgent">
                <i class="fas fa-square-full"></i> Urgent
              </p>
              <p class="normal">
                <i class="fas fa-square-full"></i> Normal
              </p>
            </div>
          </Card>
        </Col>

        <Col span={9}>
          <Card
            title="Payments"
            className="card2"
            bordered={false}
            extra={
              <a>
                This Month <i class="fas fa-chevron-down"></i>
              </a>
            }
          >
            <div class="card-body">
              <div class="box">
                <ul>
                  <li>500</li>
                  <li>400</li>
                  <li>300</li>
                  <li>200</li>
                  <li>100</li>
                  <li class="o">0</li>
                </ul>
                <div class="container"></div>
                <div class="container"></div>
                <div class="container"></div>
                <div class="container"></div>
                <div class="container"></div>
                <div class="container"></div>
                <div class="container"></div>
                <div class="container"></div>
                <div class="container"></div>
                <div class="container"></div>
                <div class="container"></div>
                <div class="container"></div>
                <div class="skill-name"></div>
                <div class="skill-name"></div>
                <div class="skill-name"></div>
                <div class="skill-name"></div>
                <div class="skill-name"></div>
                <div class="skill-name"></div>
                <div class="skill-name"></div>
                <div class="skill-name"></div>
                <div class="skill-name"></div>
                <div class="skill-name"></div>
                <div class="skill-name"></div>
                <div class="skill-name"></div>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Activeties" className="card5" bordered={false}>
            <div class="card-header">
              <p class="bmn">
                <i class="fas fa-birthday-cake"></i> Birthday
              </p>
              <p class="bmna">
                <i class="fas fa-chevron-down"></i>
              </p>
            </div>
            <div class="card-body">
              <div class="row">

                <div class="col-5">
                  <img src="../../../img/myImg.jpeg" alt="" class="card5-img" />
                  <p class="card5-nm">Rohit Kr.</p>
                  <br />
                  <p class="card5-dy">Today</p>
                </div> <br />

                <div class="col-5">
                  <img src="../../../img/myImg.jpeg" alt="" class="card5-img" />
                  <p class="card5-nm">Rohit Kr.</p>
                  <br />
                  <p class="card5-dy">Today</p>
                </div> <br />

                <div class="col-5">
                  <img src="../../../img/myImg.jpeg" alt="" class="card5-img" />
                  <p class="card5-nm">Rohit Kr.</p>
                  <br />
                  <p class="card5-dy">Today</p>
                </div> <br />

                <div class="col-5">
                  <img src="../../../img/myImg.jpeg" alt="" class="card5-img" />
                  <p class="card5-nm">Rohit Kr.</p>
                  <br />
                  <p class="card5-dy">Today</p>
                </div>

              </div>
            </div>
            <div class="card-header meetings">
              <p class="bmn">
                <i class="fas fa-users"></i> meetings
              </p>
              <p class="bmna">
                <i class="fas fa-chevron-down"></i>
              </p>
            </div>
            <div class="card-body meet">
              <p>
                <i class="fas fa-check"></i> Sales team meeting 10 am
              </p>
              <p>
                <i class="fas fa-check"></i> Design team meeting for letest
                update
              </p>
              <p>
                <i class="fas fa-check"></i> Sales team meeting 10 am
              </p>
              <p>
                <i class="fas fa-check"></i> Design team meeting for letest
                update
              </p>
            </div>
            <div class="card-header notification">
              <p class="bmn">
                <i class="fas fa-bell"></i> Notification
              </p>
              <p class="bmna">
                <i class="fas fa-chevron-down"></i>
              </p>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card
            title="Latest Ratting & Reviews"
            className="card3"
            bordered={false}
          >
            <div class="card-header">
              <p class="sale">1. Mr. John James</p>
              <p class="thismn">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </p>
            </div>
            <p class="card3-text">Lorem ipsum dolor sit amet consectetur</p>
            <hr />
            <div class="card-header">
              <p class="sale">2. Mr. John James</p>
              <p class="thismn">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </p>
            </div>
            <p class="card3-text">Lorem ipsum dolor sit amet consectetur</p>
            <hr />
            <div class="card-header">
              <p class="sale">3. Mr. John James</p>
              <p class="thismn">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </p>
            </div>
            <p class="card3-text">Lorem ipsum dolor sit amet consectetur</p>
          </Card>
        </Col>

        <Col span={9}>
          <Card title="Top Salling Products" className="card4" bordered={false}>
            <div class="scrollbar" id="style-2">
              <div class="card-header">
                <p class="sale">1. Product Name Here</p>
                <p class="sale">15</p>
                <p class="sale">14999/-</p>
              </div>
              <hr />
              <div class="card-header">
                <p class="sale">2. Product Name Here</p>
                <p class="sale">15</p>
                <p class="sale">14999/-</p>
              </div>
              <hr />
              <div class="card-header">
                <p class="sale">3. Product Name Here</p>
                <p class="sale">15</p>
                <p class="sale">14999/-</p>
              </div>
              <hr />
              <div class="card-header">
                <p class="sale">4. Product Name Here</p>
                <p class="sale">15</p>
                <p class="sale">14999/-</p>
              </div>
              <hr />
              <div class="card-header">
                <p class="sale">5. Product Name Here</p>
                <p class="sale">15</p>
                <p class="sale">14999/-</p>
              </div>
              <hr />
              <div class="card-header">
                <p class="sale">6. Product Name Here</p>
                <p class="sale">15</p>
                <p class="sale">14999/-</p>
              </div>
              <hr />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
