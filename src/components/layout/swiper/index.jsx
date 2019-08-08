import React, { PureComponent } from "react";
import SwiperN from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.css";
import { SwiperWrap } from "@/components/layout/styled"


export default class  extends PureComponent {
    // this.props.hotRecommend
    render() {
       
        return (
            <SwiperWrap>
                <div className="swiper-container " id={this.props.id}>
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>
                </div>
            </SwiperWrap>
        )
    }
    componentDidMount() {
        this.pageInit.bind(this)();
    }
    pageInit() {
        new SwiperN(`#${this.props.id}`, this.props.swiperconfig);
    }
}
