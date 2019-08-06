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


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
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
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${indexImg}) center center /  30px 30px no-repeat`
            }}
            />
            }
            selectedIcon={<div style={{
              width: '42px',
              height: '42px',
              background: `url(${indexSel}) center center /  30px 30px no-repeat`
            }}
            />
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
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${theater}) center center /  30px 30px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${theaterS}) center center /  30px 30px no-repeat`
              }}
              />
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
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${ticket}) center center /  30px 30px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${ticketS}) center center /  30px 30px no-repeat`
              }}
              />
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
            icon={{ uri: `${my}` }}
            selectedIcon={{ uri: `${myS}` }}
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