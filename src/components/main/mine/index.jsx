import React from 'react';
import Store from "storejs"
import { loginAsync } from "@/components/main/mine/actionCreator"
import { MineWrap, LoginWrap } from "./styled"
import img from "@/images/ad.png"
import creatHistory from 'history/createHashHistory'  //返回上一页这段代码
const history = creatHistory();//返回上一页这段代码

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isShow: false,
            username: "",
            password: "",
        }
    }
    render() {
        if (this.state.isShow) {
            return (
                <MineWrap>
                    <div className="main">
                        <div className="mine_info">
                            <div className="mine_main">
                                <div className="mine_mainHead">
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <span>{this.state.username}</span>

                                </div>
                                <div className="mine_mainVip">
                                    <p>普通会员</p>
                                </div>
                                <div className="mine_cont">
                                    <a href="JavaScript:;;">
                                        <p className="num">0</p>
                                        <p className="name">账户余额</p>
                                    </a>
                                    <a href="JavaScript:;;">
                                        <p className="num">8</p>
                                        <p className="name">积分</p>
                                    </a>
                                    <a href="JavaScript:;;">
                                        <p className="num"> 0</p>
                                        <p className="name">优惠券</p>
                                    </a>
                                    <a href="JavaScript:;;">
                                        <p className="kai">立即开通</p>
                                        <p className="name">橙PLUS卡</p>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="imgBox">
                            <img src={img} alt=""/>
                        </div>
                        <div className="mine_setting">
                            <ul className="setting_list">

                            </ul>
                        </div>
                    </div>
                </MineWrap>
            )
        } else {
            return (
                <LoginWrap>
                    <div className="nav" onClick={this.goback.bind(this)}>&lt;</div>

                    <div className="fromBox">
                        <h1>欢迎来到聚橙网</h1>
                        <ul>
                            <li>
                                姓名：<input type='text' value={this.state.username} onChange={this.handleChangename.bind(this)} />
                            </li>
                            <li>
                                密码：<input type='password' value={this.state.password} onChange={this.handleChangepwd.bind(this)} />

                            </li>
                            <li>
                                <div onClick={this.handleLogin.bind(this)}>登录</div>
                            </li>
                        </ul>
                    </div>
                </LoginWrap>
            )
        }
    }
    handleChangename(event) {
        const username = event.target.value
        this.setState({ username })
    }
    handleChangepwd(event) {
        const password = event.target.value
        this.setState({ password })
    }
    handleLogin() {
        loginAsync({ uname: this.state.username, upwd: this.state.password }, (res) => {
            console.log(res.data);
            Store.set("userInfo", res.data);
            this.setState({ isShow: true })
        })
    }
    goback() {
        history.goBack()
    }
}

