'use strict';

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control70_Lm9HTE: function getData_control70_Lm9HTE(elem) {
      if (!elem) {
        return;
      }var data = {};var tds = elem.querySelectorAll('td');[].forEach.call(tds, function (item, index) {
        if (item.querySelector('input')) {
          data.title = item.querySelector('input').value || [];
        }
      });return data;
    },
    doAction_uiControl66_PZscPM: function doAction_uiControl66_PZscPM(data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        elem.ownerDocument.defaultView.parent.document.querySelector('#toolbarmenudiv').querySelector('.btn_wfSave').click();
      }
    },
    getTemplate_uiControl66_PZscPM: function getTemplate_uiControl66_PZscPM() {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CommonHeader } from \'ysp-custom-components\';\nexport default class extends Component {\n    render() {\n        var data = this.props.customData;\n      \tvar title = data&&data.title;\n        return (\n            <CommonHeader\n                data={{ centerText: title && title }}\n                backIsShow={true}\n                editIsShow={true}\n                rightText=\'\u4FDD\u5B58\'\n                save={(e) => {\n                    var handler = this.props.customHandler;\n                    if (handler) {\n                        handler({\n                            eventType: \'save1\'\n                        })\n                    }\n                }}\n                back={(e) => {\n                    var handler = this.props.customHandler;\n                    if (handler) {\n                        handler({\n                            eventType: \'click\'\n                        })\n                    }\n                }}\n            />\n        )\n    }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n    _inherits(_class, _Component);\n\n    function _class() {\n        _classCallCheck(this, _class);\n\n        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n    }\n\n    _createClass(_class, [{\n        key: \'render\',\n        value: function render() {\n            var _this2 = this;\n\n            var data = this.props.customData;\n            var title = data && data.title;\n            return React.createElement(_yspCustomComponents.CommonHeader, {\n                data: { centerText: title && title },\n                backIsShow: true,\n                editIsShow: true,\n                rightText: \'\\u4FDD\\u5B58\',\n                save: function save(e) {\n                    var handler = _this2.props.customHandler;\n                    if (handler) {\n                        handler({\n                            eventType: \'save1\'\n                        });\n                    }\n                },\n                back: function back(e) {\n                    var handler = _this2.props.customHandler;\n                    if (handler) {\n                        handler({\n                            eventType: \'click\'\n                        });\n                    }\n                }\n            });\n        }\n    }]);\n\n    return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control73_6c0Euv: function getData_control73_6c0Euv(elem) {
      if (!elem) {
        return;
      }var doc = elem.ownerDocument;var data = [];var title = doc.querySelector('p.bt').textContent;var numbering = doc.querySelector('p.bh span').textContent;data[0] = title;data[1] = numbering;return data;
    },
    doAction_uiControl67_78HHZ2: function doAction_uiControl67_78HHZ2(data, elem) {},
    getTemplate_uiControl67_78HHZ2: function getTemplate_uiControl67_78HHZ2() {
      var selfTemplate = 'module.exports = React.createClass({\n    render: function () {\n        var data = this.props.customData||[];\n        return (\n            <div>\n                <div className="ysp-manager-audit-title">\n                    <div className="ysp-manager-audit-main-title">{data instanceof Array && data[0]}</div>\n                    <div className="ysp-manager-audit-subtitle">\n                        <span>\u7F16\u53F7\uFF1A</span>\n                        <span>{data instanceof Array && data[1]}</span>\n                    </div>\n                </div>\n            </div>\n        )\n    }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n    displayName: "exports",\n\n    render: function render() {\n        var data = this.props.customData || [];\n        return React.createElement(\n            "div",\n            null,\n            React.createElement(\n                "div",\n                { className: "ysp-manager-audit-title" },\n                React.createElement(\n                    "div",\n                    { className: "ysp-manager-audit-main-title" },\n                    data instanceof Array && data[0]\n                ),\n                React.createElement(\n                    "div",\n                    { className: "ysp-manager-audit-subtitle" },\n                    React.createElement(\n                        "span",\n                        null,\n                        "\\u7F16\\u53F7\\uFF1A"\n                    ),\n                    React.createElement(\n                        "span",\n                        null,\n                        data instanceof Array && data[1]\n                    )\n                )\n            )\n        );\n    }\n});';
    },
    getData_control74_U4mcfD: function getData_control74_U4mcfD(elem) {
      // if (!elem) {
      //   return;
      // }
      // if (elem) {
      //   var data = [];
      //   var trs = $(elem.querySelector('tbody')).children('tr');
      //   [].forEach.call(trs, function (trItem, trIndex) {
      //     var rows = [[], []];
      //     $(trItem).children("td:nth-child(odd)").each(function (idx, dt) {
      //       rows[0].push(dt.textContent.replace(/\s/g, "").trim());
      //     });
      //     $(trItem).children("td:nth-child(even)").each(function (idx, dt) {
      //       if (dt.querySelector("select")) {
      //         var optionIndex = dt.querySelector('select').selectedIndex;
      //         rows[1].push(dt.querySelector("select").querySelectorAll('option')[optionIndex].textContent.replace(/\s/g, "").trim());
      //       } else if (dt.querySelector("span") && dt.querySelector("input[type='hidden']") && rows[0][idx] !== '签字意见') {
      //         rows[1].push(dt.querySelector("span").textContent.replace(/\s/g, "").trim());
      //       } else {
      //         rows[1].push('暂无');
      //       }
      //     });
      //     data.push(rows);
      //   });
      //   return data;
      // }
      if (!elem) {
        return;
      }if (elem) {
        var data = {};var content = [];var titles = [];var fileSize = [];var trs = $(elem.querySelector('tbody')).children('tr');[].forEach.call(trs, function (trItem, trIndex) {
          var rows = [[], []];$(trItem).children("td:nth-child(odd)").each(function (idx, dt) {
            if (dt.textContent.indexOf('签字意见') == -1) {
              titles.push(dt.textContent.replace(/\s/g, "").trim());
            }
          });$(trItem).children("td:nth-child(even)").each(function (idx, dt) {
            if (dt.querySelector("select")) {
              var optionIndex = dt.querySelector('select').selectedIndex;content.push(dt.querySelector("select").querySelectorAll('option')[optionIndex].textContent.replace(/\s/g, "").trim());
            } else if (dt.querySelector("span") && dt.querySelector("input[type='hidden']")) {
              if (dt.querySelector("span").textContent.indexOf('编辑器工具') == -1) {
                if (trIndex == 5) {
                  var files = dt.querySelectorAll('a');var fileName = [];if (files.length > 0) {
                    [].forEach.call(files, function (fileItem, fileIndex) {
                      if (fileItem.parentElement.parentElement.querySelector('#selectDownload')) {
                        fileName.push(fileItem.textContent.trim());var tmpSizeData = fileItem.parentElement.parentElement.querySelector('#selectDownload').textContent.trim();fileSize.push(tmpSizeData.slice(tmpSizeData.lastIndexOf('(')));
                      }
                    });content.push(fileName);
                  }
                } else {
                  content.push(dt.querySelector("span").textContent.replace(/\s/g, "").trim());
                }
              }
            } else if (dt.querySelector("input[type='text']")) {
              content.push(dt.querySelector("input").value.replace(/\s/g, "").trim());
            } else if (dt.querySelector("textarea")) {
              content.push(dt.querySelector("textarea").value.replace(/\s/g, "").trim());
            } else {
              content.push('暂无数据');
            }
          });
        });data.titles = titles;data.content = content;data.fileSize = fileSize;return data;
      }
    },
    doAction_uiControl68_2Fx8KL: function doAction_uiControl68_2Fx8KL(data, elem) {},
    getTemplate_uiControl68_2Fx8KL: function getTemplate_uiControl68_2Fx8KL() {
      var selfTemplate = 'import {\n\tComponent\n} from \'react\';\nimport {\n\tCustomHeader, Dialog\n} from \'ysp-custom-components\';\nexport default class extends Component {\n\tconstructor(props) {\n    super(props);\n\t\tthis.state = {\n\t\t\tdisplayFlg: false\n\t\t}\n\t}\n\n\tbtnClick() {\n\t\tthis.setState((prevState, props) => ({\n\t\t\tdisplayFlg: !prevState.displayFlg\n\t\t}));\n\t}\n\n\tdownLoadClick(e) {\n\t\tlet handler = this.props.customHandler;\n\t\tvar target = e.target;\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\tdata: target.getAttribute(\'data-index\'),\n\t\t\t\teventType: "downLoad"\n\t\t\t})\n\t\t}\n\t}\n\n\trender() {\n\t\tvar _this = this;\n\t\tvar data = this.props.data.customData || {};\n\t\tvar titles = data.titles || [];\n\t\tvar content = data.content || [];\n\t\tvar fileSize = data.fileSize || [];\n\t\t\n\t\treturn (\n\t\t\t<div className="ysp-manager-audit-wrapper">\n\t\t\t\t<span className="left-border"></span><span>\u57FA\u672C\u4FE1\u606F</span>\n\t\t\t\t{titles ? titles.map((item, index) => {\n\t\t\t\t\tif (!this.state.displayFlg && index > 4) {\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t}\n\t\t\t\t\tif (item === \'\u6B63\u6587\') {\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t}\n\t\t\t\t\treturn (\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t{item===\'\u9644\u4EF6\' &&\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div className="title">{item}</div>\n\t\t\t\t\t\t\t\t\t{content[index] instanceof Array&&content[index].length > 0 ?\n\t\t\t\t\t\t\t\t\t\tcontent[index].map((fileItem, fileIndex) => {\n\t\t\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t\t\t<div className="annex-download">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{fileItem}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span className="download-log" data-index={fileIndex} onClick={_this.downLoadClick.bind(_this)}></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{fileSize[fileIndex]}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t:\'\u6682\u65E0\u6570\u636E\'}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t{item !== \'\u9644\u4EF6\' &&\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div className="title">{item}</div>\n\t\t\t\t\t\t\t\t\t<div className="content">{content[index]}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t);\n\t\t\t\t}) : \'\u65E0\u6570\u636E\'}\n\t\t\t\t<div className={_this.state.displayFlg ? "load-up-arrow" : "load-more-arrow"} onClick={_this.btnClick.bind(_this)}>\n\t\t\t\t\t{_this.state.displayFlg ? \'\u6536\u8D77\u5168\u90E8\u5185\u5BB9\' : \'\u663E\u793A\u66F4\u591A\'}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t);\n\t}\n\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n\t\t_this2.state = {\n\t\t\tdisplayFlg: false\n\t\t};\n\t\treturn _this2;\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'btnClick\',\n\t\tvalue: function btnClick() {\n\t\t\tthis.setState(function (prevState, props) {\n\t\t\t\treturn {\n\t\t\t\t\tdisplayFlg: !prevState.displayFlg\n\t\t\t\t};\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: \'downLoadClick\',\n\t\tvalue: function downLoadClick(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tvar target = e.target;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: target.getAttribute(\'data-index\'),\n\t\t\t\t\teventType: "downLoad"\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this3 = this;\n\n\t\t\tvar _this = this;\n\t\t\tvar data = this.props.data.customData || {};\n\t\t\tvar titles = data.titles || [];\n\t\t\tvar content = data.content || [];\n\t\t\tvar fileSize = data.fileSize || [];\n\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'ysp-manager-audit-wrapper\' },\n\t\t\t\tReact.createElement(\'span\', { className: \'left-border\' }),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'span\',\n\t\t\t\t\tnull,\n\t\t\t\t\t\'\\u57FA\\u672C\\u4FE1\\u606F\'\n\t\t\t\t),\n\t\t\t\ttitles ? titles.map(function (item, index) {\n\t\t\t\t\tif (!_this3.state.displayFlg && index > 4) {\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t}\n\t\t\t\t\tif (item === \'\u6B63\u6587\') {\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t}\n\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\titem === \'\u9644\u4EF6\' && React.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ className: \'title\' },\n\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tcontent[index] instanceof Array && content[index].length > 0 ? content[index].map(function (fileItem, fileIndex) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\t{ className: \'annex-download\' },\n\t\t\t\t\t\t\t\t\tfileItem,\n\t\t\t\t\t\t\t\t\tReact.createElement(\'span\', { className: \'download-log\', \'data-index\': fileIndex, onClick: _this.downLoadClick.bind(_this) }),\n\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\tfileSize[fileIndex]\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t}) : \'\u6682\u65E0\u6570\u636E\'\n\t\t\t\t\t\t),\n\t\t\t\t\t\titem !== \'\u9644\u4EF6\' && React.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ className: \'title\' },\n\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ className: \'content\' },\n\t\t\t\t\t\t\t\tcontent[index]\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t}) : \'\u65E0\u6570\u636E\',\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ className: _this.state.displayFlg ? "load-up-arrow" : "load-more-arrow", onClick: _this.btnClick.bind(_this) },\n\t\t\t\t\t_this.state.displayFlg ? \'\u6536\u8D77\u5168\u90E8\u5185\u5BB9\' : \'\u663E\u793A\u66F4\u591A\'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control83_eX9RZZ: function getData_control83_eX9RZZ(elem) {},
    doAction_uiControl69_Q02nTc: function doAction_uiControl69_Q02nTc(data, elem) {
      var eventType = data.eventType;if (eventType == 'dataChange') {
        var p = document.createElement('p');elem.contentDocument.querySelector('body').innerHTML = "";elem.contentDocument.querySelector('body').appendChild(p).textContent = data.dataCustom;
      }
    },
    getTemplate_uiControl69_Q02nTc: function getTemplate_uiControl69_Q02nTc() {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  constructor(){\n    super();\n  }\n\n  onChange=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:e.target.value,\n        eventType:\'dataChange\'\n      })\n    }\n  }\n\n  render(){\n    var _this = this;\n    return (\n      <div className="ysp-manager-audit-sign">\n        <span>\u7B7E\u5B57\u610F\u89C1</span>\n        <div><textarea onBlur={_this.onChange.bind(_this)}></textarea></div>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.onChange = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.value,\n          eventType: \'dataChange\'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manager-audit-sign\' },\n        React.createElement(\n          \'span\',\n          null,\n          \'\\u7B7E\\u5B57\\u610F\\u89C1\'\n        ),\n        React.createElement(\n          \'div\',\n          null,\n          React.createElement(\'textarea\', { onBlur: _this.onChange.bind(_this) })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control84_WLPGeH: function getData_control84_WLPGeH(elem) {
      if (!elem) {
        return;
      }var data = {};var tds = elem.querySelectorAll('td');if (tds.length < 1) {
        return;
      }[].forEach.call(tds, function (item, index) {
        if (index == 0) {
          data.title = item.textContent.trim();
        }
      });return data;
    },
    doAction_uiControl70_cTSkQ7: function doAction_uiControl70_cTSkQ7(data, elem) {
      var clickType = data.eventType;if (clickType === 'docClick') {
        // elem.querySelector('.Browser').click();
        elem.ownerDocument.defaultView.eval(elem.querySelector('.Browser').onclick());elem.querySelector('.Browser').onclick();
      }
    },
    getTemplate_uiControl70_cTSkQ7: function getTemplate_uiControl70_cTSkQ7() {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  CommonHeader,Dialog\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  btnClick(e){//\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n    let handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        eventType:"docClick"\n      })\n    }\n  }\n  render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    return (\n      <div className="ysp-manageraudit-relate-doc">\n        <span>{data&&data.title}</span>\n        <div className="border-bottom"><span onClick={_this.btnClick.bind(_this)} className="ysp-search-icon"></span></div>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \'btnClick\',\n    value: function btnClick(e) {\n      //\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          eventType: "docClick"\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.data.customData;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manageraudit-relate-doc\' },\n        React.createElement(\n          \'span\',\n          null,\n          data && data.title\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'border-bottom\' },\n          React.createElement(\'span\', { onClick: _this.btnClick.bind(_this), className: \'ysp-search-icon\' })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control85_iBDsJk: function getData_control85_iBDsJk(elem) {
      if (!elem) {
        return;
      }var data = {};var tds = elem.querySelectorAll('td');if (tds.length < 1) {
        return;
      }[].forEach.call(tds, function (item, index) {
        if (index == 0) {
          data.title = item.textContent.trim();
        }
      });return data;
    },
    doAction_uiControl73_3XmTyc: function doAction_uiControl73_3XmTyc(data, elem) {
      var clickType = data.eventType;if (clickType === 'docClick') {
        elem.querySelector('.Browser').click();
      }
    },
    getTemplate_uiControl73_3XmTyc: function getTemplate_uiControl73_3XmTyc() {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n    CustomHeader,Dialog,Alert\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  btnClick(e){//\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n    let handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        eventType:"docClick"\n      })\n    }\n  }\n  render() {\n    var _this = this;\n    var data = this.props.data.customData;\n    return (\n      <div className="ysp-manageraudit-relate-doc">\n        <span>{data&&data.title}</span>\n        <span><span onClick={_this.btnClick.bind(_this)} className="ysp-search-icon"></span></span>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \'btnClick\',\n    value: function btnClick(e) {\n      //\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          eventType: "docClick"\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.data.customData;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manageraudit-relate-doc\' },\n        React.createElement(\n          \'span\',\n          null,\n          data && data.title\n        ),\n        React.createElement(\n          \'span\',\n          null,\n          React.createElement(\'span\', { onClick: _this.btnClick.bind(_this), className: \'ysp-search-icon\' })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control86_7XG76m: function getData_control86_7XG76m(elem) {
      if (!elem) {
        return;
      }var data = {};var leftData = [];var rightData = [];var title = [];var content = [];if (!elem.querySelector('#requestlogappednDiv')) {
        data.leftData = leftData;data.rightData = rightData;return data;
      }var divData = elem.querySelector('#requestlogappednDiv');var tableData = $(divData).children('table');var tbody = $(tableData).children('tbody');var trs = $(tbody).children('tr');if (trs.length > 1) {
        for (var i = 0; i < trs.length; i++) {
          if (i == 0) {
            var ths = trs[0].querySelectorAll('th');[].forEach.call(ths, function (item, index) {
              if (index !== 1) {
                title.push(item.textContent.trim());
              }
            });
          } else {
            var tds = $(trs[i]).children('td');var trContent = [];[].forEach.call(tds, function (item, index) {
              if (item.querySelector('table')) {// trContent.push(item.querySelector('p').textContent);意见
              } else {
                if (item.querySelector('script')) {
                  trContent.push(item.childNodes[2].textContent.replace(/\s/g, "").trim());
                } else {
                  trContent.push(item.textContent.replace(/\s/g, "").trim());
                }
              }
            });content.push(trContent);
          }
        }
      }for (var i = 0; i < content.length; i++) {
        var innerContent = content[i];var lSingleData = [];var rSingleData = [];for (var j = 0; j < title.length; j++) {
          if (j == 0) {
            lSingleData.push(title[j]);lSingleData.push(innerContent[j]);
          } else {
            if (j == title.length - 1) {
              rSingleData.push(innerContent[j]);
            } else {
              rSingleData.push(title[j] + "：" + innerContent[j]);
            }
          }
        }leftData.push(lSingleData);rightData.push(rSingleData);
      }data['leftData'] = leftData;data['rightData'] = rightData;return data;
    },
    doAction_uiControl74_PW1aWC: function doAction_uiControl74_PW1aWC(data, elem) {
      var eventType = data.eventType;var index = parseInt(data.dataCustom.index) + 1;var tbody = elem.querySelector('#requestlogappednDiv').querySelector('table').querySelector('tbody');if (eventType == 'showReceiver') {
        var tr = $(tbody).children('tr')[index];$(tr).children('td').eq(5).find('span').click();
      }
    },
    getTemplate_uiControl74_PW1aWC: function getTemplate_uiControl74_PW1aWC() {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  \n\tshowReceiver(e) {\n\t\tvar handler = this.props.customHandler;\n\t\tvar dataIndex = e.target.getAttribute(\'data-index\');\n\t\tif (handler) {\n\t\t\thandler({\n\t\t\t\tdata: { index: dataIndex },\n\t\t\t\teventType: "showReceiver"\n\t\t\t})\n\t\t}\n\t}\n  \n  render(){\n    var data = this.props.customData||{};\n    var leftData = data.leftData||[];\n    var rightData = data.rightData||[];\n    var _this = this;\n      return (\n      <div className="ysp-main-leader-sign-wrapper">\n\t{leftData ? leftData.map((litem, lindex) => {\n\t\treturn (\n\t\t\t<div className="approval-node-info">\n\t\t\t\t<div className="approval-node-info-left-div">\n\t\t\t\t\t{litem.map((innerLitem) => {\n\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t{innerLitem}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t);\n\t\t\t\t\t})}\n\t\t\t\t</div>\n\t\t\t\t<div className="approval-node-info-right-div">\n\t\t\t\t\t{rightData[lindex].map((ritem, rindex) => {\n\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t{rightData[lindex].length == (parseInt(rindex) + 1) ? <span>\u63A5\u6536\u4EBA:<span data-index={lindex} onClick={_this.showReceiver.bind(_this)}>{ritem.indexOf(\'\u663E\u793A\') >= 0 ? \'\u663E\u793A\' : ritem}</span></span> : ritem}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t);\n\t\t\t\t\t})}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t);\n\t}) : <div></div>}\n</div>\n\n      );\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'showReceiver\',\n\t\tvalue: function showReceiver(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tvar dataIndex = e.target.getAttribute(\'data-index\');\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: { index: dataIndex },\n\t\t\t\t\teventType: "showReceiver"\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar data = this.props.customData || {};\n\t\t\tvar leftData = data.leftData || [];\n\t\t\tvar rightData = data.rightData || [];\n\t\t\tvar _this = this;\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'ysp-main-leader-sign-wrapper\' },\n\t\t\t\tleftData ? leftData.map(function (litem, lindex) {\n\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t{ className: \'approval-node-info\' },\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t{ className: \'approval-node-info-left-div\' },\n\t\t\t\t\t\t\tlitem.map(function (innerLitem) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\tinnerLitem\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t),\n\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t{ className: \'approval-node-info-right-div\' },\n\t\t\t\t\t\t\trightData[lindex].map(function (ritem, rindex) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\trightData[lindex].length == parseInt(rindex) + 1 ? React.createElement(\n\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\t\t\'\\u63A5\\u6536\\u4EBA:\',\n\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\t\t{ \'data-index\': lindex, onClick: _this.showReceiver.bind(_this) },\n\t\t\t\t\t\t\t\t\t\t\tritem.indexOf(\'\u663E\u793A\') >= 0 ? \'\u663E\u793A\' : ritem\n\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t) : ritem\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t}) : React.createElement(\'div\', null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control93_uSqtZQ: function getData_control93_uSqtZQ(elem) {},
    doAction_uiControl77_5LxAdz: function doAction_uiControl77_5LxAdz(data, elem) {},
    getTemplate_uiControl77_5LxAdz: function getTemplate_uiControl77_5LxAdz() {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className=\"background-gray\"></div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\"div\", { className: \"background-gray\" });\n  }\n});";
    }
  });
})(window, ysp);