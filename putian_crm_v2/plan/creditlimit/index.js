'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control16_fTiXZX: function getData_control16_fTiXZX(elem) {
      if (!elem) {
        return;
      }
    },
    doAction_uiControl20_UTxTVW: function doAction_uiControl20_UTxTVW(data, elem) {
      if (data.eventType === 'back') {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "客户详情", "clientInfo");
      }
    },
    getTemplate_uiControl20_UTxTVW: function getTemplate_uiControl20_UTxTVW() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CustomHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:"\u4FE1\u7528\u989D\u5EA6",rightText:"\u7B5B\u9009"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info("header filter ...")}}/>\n       );\n   }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u4FE1\u7528\u989D\u5EA6", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control18_V28Fky: function (elem) {
      var data = { head: '', content: [], contentTable: [] };if ($(elem).length > 0) {
        data.head = $(elem).find(".linecredit-table").find(".usertitle").html();$(elem).find(".linecredit-span").each(function (i, d) {
          var obj = {};obj.money = $(d).find(".linecredit-money").html();obj.title = $(d).find(".linecredit-title").html();data.content.push(obj);
        });var dat = elem.querySelector("#credittable");var datatable = ysp.customHelper.getTableData(dat, ['销售订单', '信用额度类型', '支付金额']);data.contentTable.push(datatable);data.prev = false;data.next = false;var doc = elem.querySelector('#lineCreditPage1');if (doc.querySelector('.skip')) {
          data.numberTaotal = (doc.querySelector('.skip').querySelectorAll('span')[0] && doc.querySelector('.skip').querySelectorAll('span')[0].textContent).replace(/[^0-9]/g, '');
        }var lis = doc.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
          var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
            switch (as[j].getAttribute('title')) {case 'Go to previous page':
                data.prev = true;break;case 'Go to next page':
                data.next = true;;break;}
          }
        }var liss = doc.querySelectorAll('li');for (var k = 0; k < liss.length; k++) {
          var active = liss[k].className;if (active == 'active') {
            data.currentPage = liss[k].querySelector('a').textContent;
          }
        }data.page = doc.ownerDocument.querySelector('#credittable tbody').querySelectorAll('tr').length != 0 ? true : false;
      }return data;
    },
    doAction_uiControl22_Lm5hyQ: function (data, elem) {
      switch (data.eventType) {case 'prev':
          prevtitle(data.dataCustom);break;case 'next':
          prevtitle(data.dataCustom);break;case 'click':
          click(data.dataCustom);break;}function click(data) {
        var input = elem.ownerDocument.querySelector('.skip-num');input.value = data;input.blur();elem.ownerDocument.querySelector('#lineCreditPage1').querySelector('.skip_right_goto').querySelector('.skip-right-icon').click();
      }function prevtitle(data) {
        var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
          var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
            if (data == 'prev' && as[j].getAttribute('title') == 'Go to previous page') {
              as[j].click();
            } else if (data == 'next' && as[j].getAttribute('title') == 'Go to next page') {
              as[j].click();
            }
          }
        }
      }
    },
    getTemplate_uiControl22_Lm5hyQ: function getTemplate_uiControl22_Lm5hyQ() {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {Dialog} from \'ysp-custom-components\';\nimport { Pagination } from \'ysp-custom-components\';\nimport {CustomHeader} from \'ysp-custom-components\';\nimport {Page} from \'ysp-custom-components\';\nexport default class extends Component{\n \tconstructor(props){\n      super(props);\n      this.state = { \n        open: false,\n        prevState:props.customData && props.customData.prev,\n      \tpageState:props.customData && props.customData.page,\n      \tnextState:props.customData && props.customData.next\n      };\n  }\n  componentWillReceiveProps(nextProps){\n    this.setState({\n      prevState:nextProps.customData && nextProps.customData.prev,\n      pageState:nextProps.customData && nextProps.customData.page,\n      nextState:nextProps.customData && nextProps.customData.next\n    })\n  }\n  handlerClick = () =>{\n    this.setState({\n      open: !this.state.open\n   });\n  \tvar handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\'\n      })\n    }\n  }\n  \n  render = () =>{\n    var data = this.props.customData;\n    var datatable = this.props.customData.contentTable[0].content;\n    return (\n      <section className=\'credit\'>\n        <div className=\'ysp-creditlimit-head\'>\n         <div onClick={this.handlerClick.bind(this)} className=\'ysp-creditlimit-head-tip\'>\n           {data.head}&nbsp;&nbsp;></div>\n          <div className=\'ysp-creditlimit-head-content\'>\n            <div className=\'ysp-creditlimit-head-data\'>\n              <p className="ysp-creditlimit-head-data-money">{data.content[0].money}</p>\n              <p className="ysp-creditlimit-head-data-title">{data.content[0].title}</p>\n            </div>\n            <div className=\'ysp-creditlimit-head-data\'>\n              <p className="ysp-creditlimit-head-data-money">{data.content[1].money}</p>\n              <p className="ysp-creditlimit-head-data-title">{data.content[1].title}</p>\n            </div>\n          </div>\n        </div>\n      {this.state.open &&\n       <Dialog>\n          <header className="ysp-dialog-header">\n            <CustomHeader \n               data={{centerText:"\u989D\u5EA6\u4F7F\u7528\u660E\u7EC6",rightText:"\u7B5B\u9009"}} \n               backIsShow={true} \n               back={()=>{ \n                  this.setState({open: !this.state.open})\n               }} \n               filterIsShow={false} \n               filter={()=>{console.info("header filter ...")}}/>\n          </header>\n            {\n              datatable.length == 0 ? <div style={{textAlign:\'center\'}}>\u65E0\u6570\u636E\uFF01</div>:\n                <div className="ysp-dialog-body">\n                  {datatable.map((item,index)=>{\n                      return(\n                        <section className="ysp-dialog-body-list">\n                          <div>\n                            <i className=\'ysp-normal-font\'>\u9500\u552E\u8BA2\u5355\u53F7</i>\n                            <i className=\'ysp-important-font\'>{item[0]}</i>\n                          </div>\n                          <span>\n                            <i className=\'ysp-normal-font\'>\u4FE1\u7528\u989D\u5EA6\u7C7B\u578B</i>\n                            <i className=\'ysp-normal-font\'>{item[2]}</i>\n                          </span>\n                          <span>\n                            <i className=\'ysp-normal-font\'>\u652F\u4ED8\u91D1\u989D</i>\n                            <i className=\'ysp-normal-large-font\'>{item[1]}</i>\n                          </span>\n                        </section>\n                      )\n                  })}\n          \t\t\t</div>\n            \t}\n            {\n              <div>\n                <Page \n                  pageState = {this.state.pageState}\n                  prevState = {this.state.prevState}\n                  nextState = {this.state.nextState}\n                  prev={(e)=>{\n                  var handler = this.props.customHandler;\n                  if(handler){\n                    handler({\n                      data:"prev",\n                      eventType:\'prev\'\n                    })\n                  }\n                    e.target.parentElement.querySelector(\'.input-serch\').querySelector(\'input\').value = \'\';\n                }}\n                  currentPage = {this.props.customData && this.props.customData.currentPage}\n                  pageNumber={this.props.customData && this.props.customData.numberTaotal}\n                  next={(e)=>{\n                  var handler = this.props.customHandler;\n                  if(handler){\n                    handler({\n                      data:"next",\n                      eventType:"next"\n                    })\n                  }\n                    e.target.previousSibling.querySelector(\'input\').value = \'\';\n                }}\n                  Click={(e)=>{\n                    var handler = this.props.customHandler;\n                    var target = e.target;\n                    // target.value = target.value.replace(/[^0-9]/g,\'\')\n                    var value = target.parentElement.querySelector(\'input\').value;\n                    value = value.replace(/[^0-9]/g,\'\');\n                    if(handler){\n                      handler({\n                        data:value,\n                        eventType:\'click\'\n                      })\n                    }\n                  }}\n                  Change={(e)=>{\n                    var target = e.target;\n                    target.value = target.value.replace(/[^0-9]/g,\'\');\n                  }}\n              />\n            </div>\n          }\n       </Dialog>\n      }\n      </section>\n    )\n  }\n};';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.handlerClick = function () {\n      _this.setState({\n        open: !_this.state.open\n      });\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click\'\n        });\n      }\n    };\n\n    _this.render = function () {\n      var data = _this.props.customData;\n      var datatable = _this.props.customData.contentTable[0].content;\n      return React.createElement(\n        \'section\',\n        { className: \'credit\' },\n        React.createElement(\n          \'div\',\n          { className: \'ysp-creditlimit-head\' },\n          React.createElement(\n            \'div\',\n            { onClick: _this.handlerClick.bind(_this), className: \'ysp-creditlimit-head-tip\' },\n            data.head,\n            \'\\xA0\\xA0>\'\n          ),\n          React.createElement(\n            \'div\',\n            { className: \'ysp-creditlimit-head-content\' },\n            React.createElement(\n              \'div\',\n              { className: \'ysp-creditlimit-head-data\' },\n              React.createElement(\n                \'p\',\n                { className: \'ysp-creditlimit-head-data-money\' },\n                data.content[0].money\n              ),\n              React.createElement(\n                \'p\',\n                { className: \'ysp-creditlimit-head-data-title\' },\n                data.content[0].title\n              )\n            ),\n            React.createElement(\n              \'div\',\n              { className: \'ysp-creditlimit-head-data\' },\n              React.createElement(\n                \'p\',\n                { className: \'ysp-creditlimit-head-data-money\' },\n                data.content[1].money\n              ),\n              React.createElement(\n                \'p\',\n                { className: \'ysp-creditlimit-head-data-title\' },\n                data.content[1].title\n              )\n            )\n          )\n        ),\n        _this.state.open && React.createElement(\n          _yspCustomComponents.Dialog,\n          null,\n          React.createElement(\n            \'header\',\n            { className: \'ysp-dialog-header\' },\n            React.createElement(_yspCustomComponents.CustomHeader, {\n              data: { centerText: "\u989D\u5EA6\u4F7F\u7528\u660E\u7EC6", rightText: "\u7B5B\u9009" },\n              backIsShow: true,\n              back: function back() {\n                _this.setState({ open: !_this.state.open });\n              },\n              filterIsShow: false,\n              filter: function filter() {\n                console.info("header filter ...");\n              } })\n          ),\n          datatable.length == 0 ? React.createElement(\n            \'div\',\n            { style: { textAlign: \'center\' } },\n            \'\\u65E0\\u6570\\u636E\\uFF01\'\n          ) : React.createElement(\n            \'div\',\n            { className: \'ysp-dialog-body\' },\n            datatable.map(function (item, index) {\n              return React.createElement(\n                \'section\',\n                { className: \'ysp-dialog-body-list\' },\n                React.createElement(\n                  \'div\',\n                  null,\n                  React.createElement(\n                    \'i\',\n                    { className: \'ysp-normal-font\' },\n                    \'\\u9500\\u552E\\u8BA2\\u5355\\u53F7\'\n                  ),\n                  React.createElement(\n                    \'i\',\n                    { className: \'ysp-important-font\' },\n                    item[0]\n                  )\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  React.createElement(\n                    \'i\',\n                    { className: \'ysp-normal-font\' },\n                    \'\\u4FE1\\u7528\\u989D\\u5EA6\\u7C7B\\u578B\'\n                  ),\n                  React.createElement(\n                    \'i\',\n                    { className: \'ysp-normal-font\' },\n                    item[2]\n                  )\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  React.createElement(\n                    \'i\',\n                    { className: \'ysp-normal-font\' },\n                    \'\\u652F\\u4ED8\\u91D1\\u989D\'\n                  ),\n                  React.createElement(\n                    \'i\',\n                    { className: \'ysp-normal-large-font\' },\n                    item[1]\n                  )\n                )\n              );\n            })\n          ),\n          React.createElement(\n            \'div\',\n            null,\n            React.createElement(_yspCustomComponents.Page, {\n              pageState: _this.state.pageState,\n              prevState: _this.state.prevState,\n              nextState: _this.state.nextState,\n              prev: function prev(e) {\n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    data: "prev",\n                    eventType: \'prev\'\n                  });\n                }\n                e.target.parentElement.querySelector(\'.input-serch\').querySelector(\'input\').value = \'\';\n              },\n              currentPage: _this.props.customData && _this.props.customData.currentPage,\n              pageNumber: _this.props.customData && _this.props.customData.numberTaotal,\n              next: function next(e) {\n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    data: "next",\n                    eventType: "next"\n                  });\n                }\n                e.target.previousSibling.querySelector(\'input\').value = \'\';\n              },\n              Click: function Click(e) {\n                var handler = _this.props.customHandler;\n                var target = e.target;\n                // target.value = target.value.replace(/[^0-9]/g,\'\')\n                var value = target.parentElement.querySelector(\'input\').value;\n                value = value.replace(/[^0-9]/g, \'\');\n                if (handler) {\n                  handler({\n                    data: value,\n                    eventType: \'click\'\n                  });\n                }\n              },\n              Change: function Change(e) {\n                var target = e.target;\n                target.value = target.value.replace(/[^0-9]/g, \'\');\n              }\n            })\n          )\n        )\n      );\n    };\n\n    _this.state = {\n      open: false,\n      prevState: props.customData && props.customData.prev,\n      pageState: props.customData && props.customData.page,\n      nextState: props.customData && props.customData.next\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: \'componentWillReceiveProps\',\n    value: function componentWillReceiveProps(nextProps) {\n      this.setState({\n        prevState: nextProps.customData && nextProps.customData.prev,\n        pageState: nextProps.customData && nextProps.customData.page,\n        nextState: nextProps.customData && nextProps.customData.next\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;\n;';
    },
    getData_control23_w9ZF4e: function (elem) {
      if (!elem) {
        return [];
      } else {
        // var dd = $(elem).find(".linecredit-table").find("#detailtable");
        var dat = elem.querySelector("#detailtable");var data = ysp.customHelper.getTableData(dat, ['事业部', '固定期间账期', '固定期间占用', '固定期间可用']);return data;
      }return [];
    },
    doAction_uiControl26_pzTCke: function (data, elem) {},
    getTemplate_uiControl26_pzTCke: function getTemplate_uiControl26_pzTCke() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n     var content=this.props.customData.content||[];\n     if(content.length == 0){\n       return(<div className=\"ysp-no-data\">\n        \t\t\t\t<div></div>\n                <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>  \n        \t\t\t</div>);\n     }else{\n       return (\n         <section className=\"ysp-creditlimit-list\">\n         {content.map((item,i)=>{\n            return(\n              <article>\n                <header>\n                  <span>{item[3]}</span>\n                  <span>\n                      <span className='ysp-normal-font'>\u56FA\u5B9A\u671F\u95F4\u8D26\u671F</span>\n                      <span className='ysp-important-font'>{item[2]}</span>\n                  </span>\n                </header>\n                <ul>\n                  <li  className='ysp-normal-font'>\u56FA\u5B9A\u671F\u95F4\u5360\u7528&nbsp;</li>\n                  <li>{item[0]}</li>\n                </ul>\n                <ul>\n                  <li  className='ysp-normal-font'>\u56FA\u5B9A\u671F\u95F4\u53EF\u7528&nbsp;</li>\n                  <li>{item[1]}</li>\n                </ul>\n              </article>\n            );\n           })\n         }\n         </section>\n       ); \n     }\n   }\n}";
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var content = _this.props.customData.content || [];\n      if (content.length == 0) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-no-data\' },\n          React.createElement(\'div\', null),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n          )\n        );\n      } else {\n        return React.createElement(\n          \'section\',\n          { className: \'ysp-creditlimit-list\' },\n          content.map(function (item, i) {\n            return React.createElement(\n              \'article\',\n              null,\n              React.createElement(\n                \'header\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[3]\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  React.createElement(\n                    \'span\',\n                    { className: \'ysp-normal-font\' },\n                    \'\\u56FA\\u5B9A\\u671F\\u95F4\\u8D26\\u671F\'\n                  ),\n                  React.createElement(\n                    \'span\',\n                    { className: \'ysp-important-font\' },\n                    item[2]\n                  )\n                )\n              ),\n              React.createElement(\n                \'ul\',\n                null,\n                React.createElement(\n                  \'li\',\n                  { className: \'ysp-normal-font\' },\n                  \'\\u56FA\\u5B9A\\u671F\\u95F4\\u5360\\u7528\\xA0\'\n                ),\n                React.createElement(\n                  \'li\',\n                  null,\n                  item[0]\n                )\n              ),\n              React.createElement(\n                \'ul\',\n                null,\n                React.createElement(\n                  \'li\',\n                  { className: \'ysp-normal-font\' },\n                  \'\\u56FA\\u5B9A\\u671F\\u95F4\\u53EF\\u7528\\xA0\'\n                ),\n                React.createElement(\n                  \'li\',\n                  null,\n                  item[1]\n                )\n              )\n            );\n          })\n        );\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },

    getData_control109_ctT4sX: function (elem) {
      var doc = elem.querySelector('#lineCreditPage2');if (doc.querySelector('.skip')) {
        var data = {};var item = [];data.prev = false;data.next = false;data.numberTaotal = doc.querySelector('.skip').querySelectorAll('span')[0].textContent.replace(/[^0-9]/g, '');var lis = doc.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
          var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
            switch (as[j].getAttribute('title')) {case 'Go to previous page':
                data.prev = true;break;case 'Go to next page':
                data.next = true;break;}
          }
        }var liss = doc.querySelectorAll('li');for (var k = 0; k < liss.length; k++) {
          var active = liss[k].className;if (active == 'active') {
            data.currentPage = liss[k].querySelector('a').textContent;
          }
        }data.page = doc.ownerDocument.querySelector('#detailtable tbody').querySelectorAll('tr').length != 0 ? true : false;return data;
      } else {
        return null;
      }
    },
    doAction_uiControl112_7uZOZV: function (data, elem) {
      switch (data.eventType) {case 'prev':
          prevtitle(data.dataCustom);break;case 'next':
          prevtitle(data.dataCustom);break;case 'click':
          click(data.dataCustom);break;}function click(data) {
        var input = elem.ownerDocument.querySelector('.skip-num');input.value = data;input.blur();elem.ownerDocument.querySelector('#lineCreditPage2').querySelector('.skip_right_goto').querySelector('.skip-right-icon').click();
      }function prevtitle(data) {
        var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
          var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
            if (data == 'prev' && as[j].getAttribute('title') == 'Go to previous page') {
              as[j].click();
            } else if (data == 'next' && as[j].getAttribute('title') == 'Go to next page') {
              as[j].click();
            }
          }
        }
      }
    },
    getTemplate_uiControl112_7uZOZV: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  Page\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      prevState:props.customData != null? props.customData.prev:false,\n      pageState: props.customData != null? props.customData.page:false,\n      nextState:props.customData != null?props.customData.next:false\n    }\n  }\n  componentWillReceiveProps(props){\n    this.setState({\n      prevState: props.customData.prev,\n      pageState: props.customData.page,\n      nextState: props.customData.next\n    })\n  }\n  render() {\n    let _this = this;\n    if(this.props.customData !== null){\n        return (\n        \t<div>\n            <Page \n              pageState = {this.state.pageState}\n              prevState = {this.state.prevState}\n              nextState = {this.state.nextState}\n              prev={(e)=>{\n              var handler = _this.props.customHandler;\n              if(handler){\n                handler({\n                  data:"prev",\n                  eventType:\'prev\'\n                })\n              }\n                e.target.parentElement.querySelector(\'.input-serch\').querySelector(\'input\').value = \'\';\n            }}\n              currentPage = {this.props.customData && this.props.customData.currentPage}\n              pageNumber={this.props.customData && this.props.customData.numberTaotal}\n              next={(e)=>{\n              var handler = _this.props.customHandler;\n              if(handler){\n                handler({\n                  data:"next",\n                  eventType:"next"\n                })\n              }\n                e.target.previousSibling.querySelector(\'input\').value = \'\';\n            }}\n              Click={(e)=>{\n                var handler = this.props.customHandler;\n                var target = e.target;\n                // target.value = target.value.replace(/[^0-9]/g,\'\')\n                var value = target.parentElement.querySelector(\'input\').value;\n                value = value.replace(/[^0-9]/g,\'\');\n                if(handler){\n                  handler({\n                    data:value,\n                    eventType:\'click\'\n                  })\n                }\n              }}\n              Change={(e)=>{\n                var target = e.target;\n                target.value = target.value.replace(/[^0-9]/g,\'\');\n              }}\n          />\n    \t</div>\n      )\n    }else{\n      return(\n      \t<div></div>\n      )\n    }\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      prevState: props.customData != null ? props.customData.prev : false,\n      pageState: props.customData != null ? props.customData.page : false,\n      nextState: props.customData != null ? props.customData.next : false\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'componentWillReceiveProps\',\n    value: function componentWillReceiveProps(props) {\n      this.setState({\n        prevState: props.customData.prev,\n        pageState: props.customData.page,\n        nextState: props.customData.next\n      });\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      if (this.props.customData !== null) {\n        return React.createElement(\n          \'div\',\n          null,\n          React.createElement(_yspCustomComponents.Page, {\n            pageState: this.state.pageState,\n            prevState: this.state.prevState,\n            nextState: this.state.nextState,\n            prev: function prev(e) {\n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data: "prev",\n                  eventType: \'prev\'\n                });\n              }\n              e.target.parentElement.querySelector(\'.input-serch\').querySelector(\'input\').value = \'\';\n            },\n            currentPage: this.props.customData && this.props.customData.currentPage,\n            pageNumber: this.props.customData && this.props.customData.numberTaotal,\n            next: function next(e) {\n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data: "next",\n                  eventType: "next"\n                });\n              }\n              e.target.previousSibling.querySelector(\'input\').value = \'\';\n            },\n            Click: function Click(e) {\n              var handler = _this3.props.customHandler;\n              var target = e.target;\n              // target.value = target.value.replace(/[^0-9]/g,\'\')\n              var value = target.parentElement.querySelector(\'input\').value;\n              value = value.replace(/[^0-9]/g, \'\');\n              if (handler) {\n                handler({\n                  data: value,\n                  eventType: \'click\'\n                });\n              }\n            },\n            Change: function Change(e) {\n              var target = e.target;\n              target.value = target.value.replace(/[^0-9]/g, \'\');\n            }\n          })\n        );\n      } else {\n        return React.createElement(\'div\', null);\n      }\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  }, 'creditlimit');
})(window, ysp);