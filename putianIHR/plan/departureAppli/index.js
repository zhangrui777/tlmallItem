(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control53_pX9XxM: function (elem) {
      //提示弹框
      if (elem && elem.getAttribute("role") == "alertdialog") {
        return ysp.customHelper.alert(elem);
      } else {
        return;
      }
    },
    doAction_uiControl52_pCcFLg: function (data, elem) {
      if (data.eventType == "btnClick") {
        if (data.dataCustom == "sure") {
          elem.querySelector("input[value='确定']").click();
        } else {
          elem.querySelector("input[value='取消']").click();
        }
      }
    },
    getTemplate_uiControl52_pCcFLg: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomAlert} from 'ysp-custom-components';\nexport default class extends Component{\n  btnClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"btnClick\",\n        data:target.className\n      })\n    }\n  }\n  render () {\n    var _this=this;\n    var data=this.props.customData;\n    return(\n      <div>\n      \t{data? <CustomAlert\n           data={data}\n          btnClick={_this.btnClick.bind(_this)}\n        />:<div></div>}\n      </div>\n      )\n    }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'btnClick',\n    value: function btnClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"btnClick\",\n          data: target.className\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        data ? React.createElement(_yspCustomComponents.CustomAlert, {\n          data: data,\n          btnClick: _this.btnClick.bind(_this)\n        }) : React.createElement('div', null)\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control54_oz2eOe: function (elem) {},
    doAction_uiControl53_Fd2omZ: function (data, elem) {
      var type = data.eventType;if (type == "back") {
        ysp.appMain.back(); //elem.ownerDocument.defaultView.close();
        //ysp.runtime.Model.setForceMatchModels(['checkMyInfo']);
      }
    },
    getTemplate_uiControl53_Fd2omZ: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render () {\n    var _this=this;\n    return(\n      <div>\n      \t<CustomHeader \n           data={{centerText:\"\u79BB\u804C\u7533\u8BF7\uFF08\u8F9E\u804C\uFF09\",rightText:\"\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false}\n        \t />\n      \t<div style={{height:\"2.7rem\"}}></div>\n      </div>\n      )\n    }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.CustomHeader, {\n          data: { centerText: \"\u79BB\u804C\u7533\u8BF7\uFF08\u8F9E\u804C\uFF09\", rightText: \"\" },\n          backIsShow: true,\n          back: function back() {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                eventType: 'back'\n              });\n            }\n          },\n          filterIsShow: false\n        }),\n        React.createElement('div', { style: { height: \"2.7rem\" } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control55_siNglM: function (elem) {
      if (!elem) {
        return;
      }var data = [];var td = elem.querySelectorAll("td");[].forEach.call(td, function (item, index) {
        data.push(item.textContent.trim());
      });return data;
    },
    doAction_uiControl54_QAyTRk: function (data, elem) {},
    getTemplate_uiControl54_QAyTRk: function () {
      var selfTemplate = "import {Component} from 'react'; \nexport default class extends Component{\n  render(){\n    var data = this.props.customData;\n    var _this=this;\n    return(\n    \t<div>\n      {data && data.length>0?\n      <div className=\"ysp-con-box\">\n      \t<div className=\"ysp-lists\">\n          <div className=\"ysp-l\">{data[1]}</div>\n          <div className=\"ysp-r\">{data[3]}</div>\n        </div>\n        <div className=\"ysp-lists\">\n          <div className=\"ysp-l\">{data[4]}</div>\n          <div className=\"ysp-r\">{data[6]}</div>\n        </div>\n        <div className=\"ysp-lists\">\n          <div className=\"ysp-l\">{data[7]}</div>\n          <div className=\"ysp-r\">{data[9]}</div>\n        </div>\n      </div>\n      \t:\n      <div style={{display:\"none\"}}></div>\n      }\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        null,\n        data && data.length > 0 ? React.createElement(\n          \"div\",\n          { className: \"ysp-con-box\" },\n          React.createElement(\n            \"div\",\n            { className: \"ysp-lists\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp-l\" },\n              data[1]\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp-r\" },\n              data[3]\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp-lists\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp-l\" },\n              data[4]\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp-r\" },\n              data[6]\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp-lists\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp-l\" },\n              data[7]\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp-r\" },\n              data[9]\n            )\n          )\n        ) : React.createElement(\"div\", { style: { display: \"none\" } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control57_GW0LGz: function (elem) {
      if (!elem) {
        return;
      }var data = [];var td1 = elem.querySelector("#win3divHPS_AWE018_HDR_TERMINATION_DTlbl");data.push(td1.textContent.trim());var td2 = td1.parentElement.nextElementSibling;data.push(td2.textContent.trim());var td3 = elem.querySelector("#win3divHPS_AWE018_HDR_HPS_TER_REASONlbl");data.push(td3.textContent.trim());var td4 = td3.parentElement.nextElementSibling;data.push(td4.textContent.trim());return data;
    },
    doAction_uiControl56_ZGbLp2: function (data, elem) {},
    getTemplate_uiControl56_ZGbLp2: function () {
      var selfTemplate = "import {Component} from 'react'; \nexport default class extends Component{\n  handlerClick(e) {\n   var handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        data:target.selectedIndex,\n        eventType:\"click\"\n      })\n    }\n  }\n  render(){\n    var data = this.props.customData;\n    var _this=this;\n    return(\n    \t<div>\n        {data && data.length>0?\n        <div className=\"ysp-con-box\">\n          <div className=\"ysp-lists\">\n            <div className=\"ysp-l\"><em className=\"star\">*</em>{data[0]}</div>\n            <div className=\"ysp-r\">{data[1]}<i className=\"icon arrow-r\"></i></div>\n          </div>\n          <div className=\"ysp-lists\">\n            <div className=\"ysp-l\"><em className=\"star\">*</em>{data[2]}</div>\n            <div className=\"ysp-r\">{data[3]}<i className=\"icon arrow-r\"></i></div>\n          </div>\n        </div>\n          :\n        <div style={{display:\"none\"}}></div>\n        }</div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"handlerClick\",\n    value: function handlerClick(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          data: target.selectedIndex,\n          eventType: \"click\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        null,\n        data && data.length > 0 ? React.createElement(\n          \"div\",\n          { className: \"ysp-con-box\" },\n          React.createElement(\n            \"div\",\n            { className: \"ysp-lists\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp-l\" },\n              React.createElement(\n                \"em\",\n                { className: \"star\" },\n                \"*\"\n              ),\n              data[0]\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp-r\" },\n              data[1],\n              React.createElement(\"i\", { className: \"icon arrow-r\" })\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"ysp-lists\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp-l\" },\n              React.createElement(\n                \"em\",\n                { className: \"star\" },\n                \"*\"\n              ),\n              data[2]\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp-r\" },\n              data[3],\n              React.createElement(\"i\", { className: \"icon arrow-r\" })\n            )\n          )\n        ) : React.createElement(\"div\", { style: { display: \"none\" } })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control58_MQBuZf: function (elem) {
      if (!elem) {
        return;
      }var data = "请输入请假事由";data = elem.value;return data;
    },
    doAction_uiControl57_bQey1L: function (data, elem) {
      if (data.eventType == 'change') {
        var data = data.dataCustom;elem.value = data;elem.dispatchEvent(new Event('change'));
      }
    },
    getTemplate_uiControl57_bQey1L: function () {
      var selfTemplate = "\nimport {Component} from 'react';\n\nexport default class extends React.Component{\n\n  render(){\n    var data = this.props.customData;\n    return (\n\n          <div className=\"ysp-con-box ysp-reason\">\n            <div className=\"ysp-big-tit\"><em className=\"star\">*</em>\u8BF7\u5047\u539F\u56E0</div>\n           <ATextarea className=\"reason\" placeholder=\"\u8BF7\u8F93\u5165\u8BF7\u5047\u4E8B\u7531\" value={data} onBlur={(e)=>{\n            var handler=this.props.customHandler;\n            if(handler){\n              handler({\n                data:e.target.value,\n            \teventType:\"change\"\n              })\n            }\n           }} ></ATextarea>\n        </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp-con-box ysp-reason\" },\n        React.createElement(\n          \"div\",\n          { className: \"ysp-big-tit\" },\n          React.createElement(\n            \"em\",\n            { className: \"star\" },\n            \"*\"\n          ),\n          \"\\u8BF7\\u5047\\u539F\\u56E0\"\n        ),\n        React.createElement(ATextarea, { className: \"reason\", placeholder: \"\\u8BF7\\u8F93\\u5165\\u8BF7\\u5047\\u4E8B\\u7531\", value: data, onBlur: function onBlur(e) {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n              handler({\n                data: e.target.value,\n                eventType: \"change\"\n              });\n            }\n          } })\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control59_5bgpNW: function (elem) {
      if (!elem) {
        return;
      }var data = [];var save = elem.querySelector("#HPS_AWE_WRK_SAVE_BTN");if (save) {
        data.push(save.value);
      }var sub = elem.querySelector("#HPS_AWE_WRK_SUBMIT_BTN");if (sub) {
        data.push(sub.value);
      }return data;
    },
    doAction_uiControl58_up1yxm: function (data, elem) {
      if (data.eventType == "click1") {
        var data = data.customData;elem.querySelector("#HPS_AWE_WRK_SUBMIT_BTN").click();
      } else if (data.eventType == "click2") {
        elem.querySelector("#HPS_AWE_WRK_SAVE_BTN").click();
      }
    },
    getTemplate_uiControl58_up1yxm: function () {
      var selfTemplate = "\nimport {Component} from 'react';\n\nexport default class extends React.Component{\n  handlerClick1(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:[e.target.className,e.target.value],\n        eventType:\"click1\"\n      })\n    }\n  }\n    handlerClick2(e) {\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:[e.target.className,e.target.value],\n        eventType:\"click2\"\n      })\n    }\n  }\n\n  render(){\n    var data = this.props.customData;\n    return (\n      <div>\n        {data && data.length>0?\n        <div className=\"ysp-btn-box\">\n            <button className=\"ysp-sel-btn\" onClick={this.handlerClick1.bind(this)}>{data[1]}</button>\n        <button className=\"ysp-save-btn\" onClick={this.handlerClick2.bind(this)}>{data[0]}</button>\n        </div>\n          :\n        <div style={{display:\"none\"}}></div>\n        }\n      \n        </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"handlerClick1\",\n    value: function handlerClick1(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: [e.target.className, e.target.value],\n          eventType: \"click1\"\n        });\n      }\n    }\n  }, {\n    key: \"handlerClick2\",\n    value: function handlerClick2(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: [e.target.className, e.target.value],\n          eventType: \"click2\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        null,\n        data && data.length > 0 ? React.createElement(\n          \"div\",\n          { className: \"ysp-btn-box\" },\n          React.createElement(\n            \"button\",\n            { className: \"ysp-sel-btn\", onClick: this.handlerClick1.bind(this) },\n            data[1]\n          ),\n          React.createElement(\n            \"button\",\n            { className: \"ysp-save-btn\", onClick: this.handlerClick2.bind(this) },\n            data[0]\n          )\n        ) : React.createElement(\"div\", { style: { display: \"none\" } })\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    }
  }, "departureAppli");
})(window, ysp);