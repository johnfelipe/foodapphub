(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{212:function(e,t,a){"use strict";var r=a(3),l=a(4),n=a(7),o=a(6),c=a(8),s=a(0),m=a.n(s),i=a(18),u=a.n(i),g=a(221),d=a.n(g),p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(a=Object(n.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={shareButton:!1},a.shareLink=function(e){navigator.share&&navigator.share({url:e.link}).then(function(){return console.log("Successful share")}).catch(function(e){return console.log("Error sharing",e)})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){navigator.share&&this.setState({shareButton:!0})}},{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,this.state.shareButton&&m.a.createElement("button",{type:"button",className:"btn search-navs-btns nav-home-btn",style:{position:"relative"},onClick:function(){return e.shareLink(e.props)}},m.a.createElement("i",{className:"si si-share"}),m.a.createElement(u.a,{duration:"500"})))}}]),t}(s.Component),y=function(e){function t(){return Object(r.a)(this,t),Object(n.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"col-12 p-0 fixed",style:{zIndex:"9"}},m.a.createElement("div",{className:"block m-0"},m.a.createElement("div",{className:"block-content p-0 ".concat(this.props.dark&&"nav-dark")},m.a.createElement("div",{className:"input-group ".concat(this.props.boxshadow&&"search-box")},!this.props.disable_back_button&&m.a.createElement("div",{className:"input-group-prepend"},this.props.back_to_home&&m.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/")},200)}},m.a.createElement("i",{className:"si si-arrow-left"}),m.a.createElement(u.a,{duration:"500"})),this.props.goto_orders_page&&m.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/my-orders")},200)}},m.a.createElement("i",{className:"si si-arrow-left"}),m.a.createElement(u.a,{duration:"500"})),this.props.goto_accounts_page&&m.a.createElement("button",{type:"button",className:"btn search-navs-btns",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/my-account")},200)}},m.a.createElement("i",{className:"si si-arrow-left"}),m.a.createElement(u.a,{duration:"500"})),!this.props.back_to_home&&!this.props.goto_orders_page&&!this.props.goto_accounts_page&&m.a.createElement("button",{type:"button",className:"btn search-navs-btns ".concat(this.props.dark&&"nav-dark"),style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.goBack()},200)}},m.a.createElement("i",{className:"si si-arrow-left"}),m.a.createElement(u.a,{duration:"500"}))),m.a.createElement("p",{className:"form-control search-input d-flex align-items-center ".concat(this.props.dark&&"nav-dark")},this.props.logo&&m.a.createElement("img",{src:"/assets/img/logos/logo.png",alt:localStorage.getItem("storeName"),width:"120"}),this.props.has_title?m.a.createElement(m.a.Fragment,null,this.props.from_checkout?m.a.createElement("span",{className:"nav-page-title"},localStorage.getItem("cartToPayText")," ",m.a.createElement("span",{style:{color:localStorage.getItem("storeColor")}},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),this.props.title,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))):m.a.createElement("span",{className:"nav-page-title"},this.props.title)):null,this.props.has_delivery_icon&&m.a.createElement(d.a,{left:!0},m.a.createElement("img",{src:"/assets/img/various/delivery-bike.png",alt:this.props.title,className:"nav-page-title"}))),this.props.has_restaurant_info?m.a.createElement("div",{className:"fixed-restaurant-info hidden",ref:function(t){e.heading=t}},m.a.createElement("span",{className:"font-w700 fixedRestaurantName"},this.props.restaurant.name),m.a.createElement("br",null),m.a.createElement("span",{className:"font-w400 fixedRestaurantTime"},m.a.createElement("i",{className:"si si-clock"})," ",this.props.restaurant.delivery_time," ",localStorage.getItem("homePageMinsText"))):null,m.a.createElement("div",{className:"input-group-append"},!this.props.disable_search&&m.a.createElement("button",{type:"submit",className:"btn search-navs-btns",style:{position:"relative"}},m.a.createElement("i",{className:"si si-magnifier"}),m.a.createElement(u.a,{duration:"500"})),this.props.homeButton&&m.a.createElement("button",{type:"button",className:"btn search-navs-btns nav-home-btn",style:{position:"relative"},onClick:function(){setTimeout(function(){e.context.router.history.push("/")},200)}},m.a.createElement("i",{className:"si si-home"}),m.a.createElement(u.a,{duration:"500"})),this.props.shareButton&&m.a.createElement(p,{link:window.location.href})))))))}}]),t}(s.Component);y.contextTypes={router:function(){return null}};t.a=y},221:function(e,t,a){"use strict";function r(e,t){var a=t.left,r=t.right,l=t.mirror,n=t.opposite,o=(a?1:0)|(r?2:0)|(l?16:0)|(n?32:0)|(e?64:0);if(u.hasOwnProperty(o))return u[o];if(!l!=!(e&&n)){var c=[r,a];a=c[0],r=c[1]}var s=a?"-100%":r?"100%":"0",i=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+s+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+s+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return u[o]=(0,m.animation)(i),u[o]}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.defaults,t=e.children,a=(e.out,e.forever),l=e.timeout,n=e.duration,o=void 0===n?m.defaults.duration:n,s=e.delay,i=void 0===s?m.defaults.delay:s,u=e.count,g=void 0===u?m.defaults.count:u,d=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["children","out","forever","timeout","duration","delay","count"]),p={make:r,duration:void 0===l?o:l,delay:i,forever:a,count:g,style:{animationFillMode:"both"}};return d.left,d.right,d.mirror,d.opposite,(0,c.default)(d,p,p,t)}Object.defineProperty(t,"__esModule",{value:!0});var n,o=a(76),c=(n=o)&&n.__esModule?n:{default:n},s=a(2),m=a(57),i={out:s.bool,left:s.bool,right:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},u={};l.propTypes=i,t.default=l,e.exports=t.default},222:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r=function(e){if(e){var t=parseFloat(e);return t=t.toFixed(2)}return 0}},342:function(e,t,a){"use strict";a.r(t);var r=a(3),l=a(4),n=a(7),o=a(6),c=a(8),s=a(0),m=a.n(s),i=a(88),u=a(9),g=a(5),d=a.n(g),p=a(212),y=a(42),h=a(49),f=a(18),b=a.n(f),E=a(223),v=a.n(E),S=a(222),x=a(213),N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(a=Object(n.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={open:!1},a.handlePopupOpen=function(){a.setState({open:!0})},a.handlePopupClose=function(){a.setState({open:!1})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.order,a=e.user,r=e.cancelOrder;return m.a.createElement(m.a.Fragment,null,m.a.createElement("button",{className:"btn btn-square btn-sm btn-outline-danger mb-0 mt-15",style:{position:"relative",fontSize:"0.8rem"},onClick:this.handlePopupOpen},localStorage.getItem("cancelOrderMainButton"),m.a.createElement(b.a,{duration:"500"})),m.a.createElement(x.a,{open:this.state.open,onClose:this.handlePopupClose,closeIconSize:32},m.a.createElement("div",{className:"text-center mt-100"},m.a.createElement("div",{style:{fontSize:"1.2rem",fontWeight:"500"}},m.a.createElement("i",{className:"si si-info",style:{fontSize:"4rem",opacity:"0.3",color:"#FF9800"}}),m.a.createElement("p",null,t.unique_order_id),m.a.createElement("p",null,localStorage.getItem("orderCancellationConfirmationText")),1===t.orderstatus_id?m.a.createElement(m.a.Fragment,null,"COD"!==t.payment_mode&&m.a.createElement("p",{className:"text-muted font-w400"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),t.total," ","right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),localStorage.getItem("willBeRefundedText")),"COD"===t.payment_mode&&t.total-t.payable!==0&&m.a.createElement("p",{className:"text-muted font-w400"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),Object(S.a)(t.total-t.payable)," ","right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),localStorage.getItem("willBeRefundedText"))):m.a.createElement("p",{className:"text-muted font-w400"},localStorage.getItem("willNotBeRefundedText"))),m.a.createElement("div",null,m.a.createElement("button",{className:"btn btn-lg btn-danger mr-3",onClick:function(){return r(a.data.auth_token,a.data.id,t.id)},style:{border:"0",borderRadius:"0",backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("yesCancelOrderBtn")),m.a.createElement("button",{onClick:this.handlePopupClose,className:"btn btn-lg",style:{border:"0",borderRadius:"0"}},localStorage.getItem("cancelGoBackBtn"))))))}}]),t}(s.Component),I=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(a=Object(n.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).__getOrderStatus=function(e){return 1===e?localStorage.getItem("orderPlacedStatusText"):2===e?localStorage.getItem("preparingOrderStatusText"):3===e?localStorage.getItem("deliveryGuyAssignedStatusText"):4===e?localStorage.getItem("orderPickedUpStatusText"):5===e?localStorage.getItem("deliveredStatusText"):6===e?localStorage.getItem("canceledStatusText"):7===e?localStorage.getItem("readyForPickupStatusText"):8===e?localStorage.getItem("awaitingPaymentStatusText"):9===e?localStorage.getItem("paymentFailedStatusText"):void 0},a._getTotalItemCost=function(e){var t=parseFloat(e.price)*e.quantity;return e.order_item_addons.length&&e.order_item_addons.map(function(a){return t+=parseFloat(a.addon_price)*e.quantity}),Object(S.a)(t)},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.getElementsByTagName("body")[0].classList.add("bg-grey")}},{key:"componentWillUnmount",value:function(){document.getElementsByTagName("body")[0].classList.remove("bg-grey")}},{key:"render",value:function(){var e=this,t=this.props,a=t.order,r=t.user,l=t.cancelOrder;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"bill-details mb-2 bg-white"},m.a.createElement("div",{className:"p-3",style:{borderRadius:"0.275rem"}},m.a.createElement("div",{className:"pull-right"},(1===a.orderstatus_id||2===a.orderstatus_id||3===a.orderstatus_id||4===a.orderstatus_id||7===a.orderstatus_id||8===a.orderstatus_id)&&m.a.createElement(h.a,{to:"/running-order/".concat(a.unique_order_id),className:"btn btn-square btn-outline-secondary mb-10 order-track-button",delay:250,style:{position:"relative"}},localStorage.getItem("trackOrderText"),m.a.createElement("span",{className:"pulse ml-2"}),m.a.createElement(b.a,{duration:"500"}))),m.a.createElement("div",{className:"pull-right"},a.is_ratable&&m.a.createElement(h.a,{to:"/rate-order/".concat(a.id),className:"btn btn-square btn-outline-secondary mb-10 order-track-button",delay:250,style:{position:"relative"}},localStorage.getItem("orderRateOrderButton"),m.a.createElement(b.a,{duration:"500"}))),m.a.createElement("div",{className:"display-flex"},m.a.createElement("div",{className:"flex-auto"},m.a.createElement("button",{className:"mr-5 btn btn-square btn-outline-secondary min-width-125 mb-10 order-status-button text-muted ".concat(6===a.orderstatus_id&&"text-danger"," ")},this.__getOrderStatus(a.orderstatus_id)))),m.a.createElement("span",{className:"text-muted pull-right",style:{fontSize:"0.9rem"}},"true"===localStorage.getItem("showFromNowDate")?m.a.createElement(v.a,{fromNow:!0},a.created_at):m.a.createElement(v.a,{format:"DD/MM/YYYY hh:mma"},a.created_at)),m.a.createElement("div",{className:"flex-auto"},m.a.createElement("h6",{className:"font-w700 mb-2",style:{color:localStorage.getItem("storeColor")}},a.unique_order_id),a.restaurant&&m.a.createElement(h.a,{to:"/stores/".concat(a.restaurant.slug),delay:100},m.a.createElement("h6",{className:"font-w600"},a.restaurant.name))),m.a.createElement("hr",null),a.orderitems.map(function(t){return m.a.createElement("div",{className:"mb-2",key:t.id},m.a.createElement("div",{className:"display-flex pb-5"},m.a.createElement("span",{className:"order-item-quantity mr-10"},"x",t.quantity),m.a.createElement("div",{className:"flex-auto text-left font-w600"},t.name),m.a.createElement("div",{className:"flex-auto text-right font-w600"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),e._getTotalItemCost(t),"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))),t.order_item_addons.map(function(e){return m.a.createElement("div",{className:"display-flex pb-5",key:e.id},m.a.createElement("div",{className:"flex-auto text-left"},m.a.createElement("small",null,e.addon_name)),m.a.createElement("div",{className:"flex-auto text-right"},m.a.createElement("small",null,"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),e.addon_price,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))))}))}),m.a.createElement("hr",null),m.a.createElement(m.a.Fragment,null,a.coupon_name&&m.a.createElement("div",{className:"display-flex mt-10"},m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex-auto"},m.a.createElement("small",null,"Coupon: ")),m.a.createElement("div",{className:"flex-auto text-right"},m.a.createElement("small",null,a.coupon_name," ")," ",a.coupon_amount&&m.a.createElement("small",null,"(-","left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),a.coupon_amount,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),")")))),m.a.createElement("div",{className:"display-flex mt-10"},m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex-auto"},m.a.createElement("small",null,localStorage.getItem("cartRestaurantCharges"),":")," "),m.a.createElement("div",{className:"flex-auto text-right"},m.a.createElement("small",null,"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),a.restaurant_charge,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))))),m.a.createElement("div",{className:"display-flex mt-10"},m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex-auto"},m.a.createElement("small",null,localStorage.getItem("cartDeliveryCharges"),":")," "),m.a.createElement("div",{className:"flex-auto text-right"},m.a.createElement("small",null,"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),a.delivery_charge,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))))),null!==a.tip_amount&&m.a.createElement(m.a.Fragment,null,a.tip_amount>0&&m.a.createElement("div",{className:"display-flex mt-10"},m.a.createElement("div",{className:"flex-auto"},m.a.createElement("small",null,localStorage.getItem("tipText"),": ")),m.a.createElement("div",{className:"flex-auto text-right text-danger"},m.a.createElement("small",null,"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),a.tip_amount,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))))),a.tax&&m.a.createElement("div",{className:"display-flex mt-10"},m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex-auto"},m.a.createElement("small",null,localStorage.getItem("taxText"),": ")),m.a.createElement("div",{className:"flex-auto text-right text-danger"},m.a.createElement("small",null,a.tax,"%"," ",a.tax_amount&&m.a.createElement(m.a.Fragment,null,"(+","left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),a.tax_amount,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),")"))))),m.a.createElement("div",{className:"display-flex mt-10 font-w700"},m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex-auto"},localStorage.getItem("orderTextTotal")),m.a.createElement("div",{className:"flex-auto text-right"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),a.total,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat")))),a.wallet_amount&&m.a.createElement("div",{className:"display-flex mt-10"},m.a.createElement("div",{className:"flex-auto"},localStorage.getItem("orderAmountPaidWithWallet"),":"),m.a.createElement("div",{className:"flex-auto text-right"},"-","left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),a.wallet_amount,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))),5!==a.orderstatus_id&&m.a.createElement(m.a.Fragment,null,"COD"===a.payment_mode&&m.a.createElement(m.a.Fragment,null,(null!==a.payable||"0.00"!==a.payable)&&m.a.createElement("div",{className:"display-flex mt-10"},m.a.createElement("div",{className:"flex-auto"},localStorage.getItem("orderAmountRemainingToPay"),":"," "),m.a.createElement("div",{className:"flex-auto text-right"},"left"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"),a.payable,"right"===localStorage.getItem("currencySymbolAlign")&&localStorage.getItem("currencyFormat"))))),m.a.createElement("div",{className:"display-flex mt-10 font-w700"},m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"flex-auto"},localStorage.getItem("orderDetailsPaymentMode")),m.a.createElement("div",{className:"flex-auto text-right"},a.payment_mode)))),1===a.orderstatus_id&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"pull-right"},m.a.createElement(N,{order:a,user:r,cancelOrder:l})),m.a.createElement("div",{className:"clearfix"})))))}}]),t}(s.Component),_=a(356),w=a(16),k=function(e){function t(){var e,a;Object(r.a)(this,t);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(a=Object(n.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={no_orders:!1,cancelSuccess:!1},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.user;e.success&&this.props.getOrders(e.data.auth_token,e.data.id)}},{key:"componentWillReceiveProps",value:function(e){if(0===e.orders.length&&this.setState({no_orders:!0}),this.props.cancel!==e.cancel&&e.cancel.success){this.setState({cancelSuccess:!0});var t=this.props.user;t.success&&this.props.getOrders(t.data.auth_token,t.data.id)}}},{key:"render",value:function(){var e=this;if(window.innerWidth>768)return m.a.createElement(_.a,{to:"/"});var t=this.props,a=t.user,r=t.orders;return null===localStorage.getItem("storeColor")?m.a.createElement(_.a,{to:"/"}):a.success?m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{boxshadow:!0,has_title:!0,title:localStorage.getItem("accountMyOrders"),disable_search:!0,goto_accounts_page:!0,homeButton:!0}),this.state.cancelSuccess&&m.a.createElement("div",{className:"auth-error cancel-success"},m.a.createElement("div",{className:""},localStorage.getItem("orderCancelledText"))),m.a.createElement("div",{className:"block-content block-content-full pt-80 pb-80 height-100-percent px-15"},0===r.length&&!this.state.no_orders&&m.a.createElement(y.a,{height:600,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},m.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"75",height:"22"}),m.a.createElement("rect",{x:"0",y:"30",rx:"0",ry:"0",width:"350",height:"18"}),m.a.createElement("rect",{x:"0",y:"60",rx:"0",ry:"0",width:"300",height:"18"}),m.a.createElement("rect",{x:"0",y:"90",rx:"0",ry:"0",width:"100",height:"18"}),m.a.createElement("rect",{x:"0",y:170,rx:"0",ry:"0",width:"75",height:"22"}),m.a.createElement("rect",{x:"0",y:200,rx:"0",ry:"0",width:"350",height:"18"}),m.a.createElement("rect",{x:"0",y:230,rx:"0",ry:"0",width:"300",height:"18"}),m.a.createElement("rect",{x:"0",y:260,rx:"0",ry:"0",width:"100",height:"18"}),m.a.createElement("rect",{x:"0",y:340,rx:"0",ry:"0",width:"75",height:"22"}),m.a.createElement("rect",{x:"0",y:370,rx:"0",ry:"0",width:"350",height:"18"}),m.a.createElement("rect",{x:"0",y:400,rx:"0",ry:"0",width:"300",height:"18"}),m.a.createElement("rect",{x:"0",y:430,rx:"0",ry:"0",width:"100",height:"18"})),0===r.length&&m.a.createElement("div",{className:"text-center mt-50 font-w600 text-muted"},localStorage.getItem("noOrdersText")),r.map(function(t){return m.a.createElement(I,{key:t.id,order:t,user:a,cancelOrder:e.props.cancelOrder,cancel:e.props.cancel})}))):m.a.createElement(_.a,{to:"/login"})}}]),t}(s.Component);t.default=Object(w.b)(function(e){return{user:e.user.user,orders:e.orders.orders,cancel:e.orders.cancel}},{getOrders:function(e,t){return function(a){d.a.post(u.w,{token:e,user_id:t}).then(function(e){var t=e.data;return a({type:i.b,payload:t})}).catch(function(e){console.log(e)})}},cancelOrder:function(e,t,a){return function(r){d.a.post(u.x,{token:e,user_id:t,order_id:a}).then(function(e){var t=e.data;return r({type:i.a,payload:t})}).catch(function(e){console.log(e)})}}})(k)}}]);