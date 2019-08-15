import React from "react"
import { TabBar } from 'antd-mobile';
import { TabbarWrap } from "@/components/layout/styled"
import indexImg from "@/images/1.2.png"
import indexSel from "@/images/1.1.png"
import theater from "@/images/2.1.png"
import theaterS from "@/images/2.2.png"
import ticket from "@/images/3.1.png"
import ticketS from "@/images/3.1.png"
import my from "@/images/4.1.png"
import myS from "@/images/4.2.png"

 import { NavLink } from "react-router-dom"
// import { blockParams } from "handlebars";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
      // routerList: [
      //   { path: "/index" },
      //   { path: "/mine"},
      //   { path: "/theater"},
      //   { path: "/ticket" }
      // ],
    };
  }

  render() {
    return (
      <TabbarWrap>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#949494"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title={this.state.selectedTab === 'blueTab'? "" : "首页"}
            key={this.state.selectedTab === 'blueTab'? "" : "首页"}
            icon={<NavLink style={{
              width: '22px',
              height: '22px',
              display:'block',
              background: `url(${indexImg}) center center /  30px 30px no-repeat`
            }}
            to="/index"  />
            }
            selectedIcon={<NavLink style={{
              width: '42px',
              height: '42px',
              background: `url(${indexSel}) center center /  30px 30px no-repeat`
            }}
            to="/index" />
            }
            selected={this.state.selectedTab === 'blueTab'}

            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <NavLink style={{
                width: '22px',
                height: '22px',
                display:'block',
                background: `url(${theater}) center center /  30px 30px no-repeat`
              }}
              to="/theater"  />
            }
            selectedIcon={
              <NavLink style={{
                width: '22px',
                height: '22px',
                background: `url(${theaterS}) center center /  30px 30px no-repeat`
              }}
              to="/theater" />
            }
            title="剧院"
            key="剧院"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <NavLink style={{
                width: '22px',
                height: '22px',
                display:'block',
                background: `url(${ticket}) center center /  30px 30px no-repeat`
              }}
              to="/ticket" />
            }
            selectedIcon={
              <NavLink style={{
                width: '22px',
                height: '22px',
                background: `url(${ticketS}) center center /  30px 30px no-repeat`
              }}
              to="/ticket" />
            }
            title="票夹"
            key="票夹"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={ <NavLink style={{
              width: '22px',
              height: '22px',
              display:'block',
              background: `url(${my}) center center /  30px 30px no-repeat`
            }}
            to="/mine" />}
            selectedIcon={<NavLink style={{
              width: '22px',
              height: '22px',
              display:'block',
              background: `url(${myS}) center center /  30px 30px no-repeat`
            }}
            to="/mine" />}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
      </TabbarWrap>
    );
  }
}