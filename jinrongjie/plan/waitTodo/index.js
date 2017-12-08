"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control9_Ks2mo3: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        return elem.textContent;
      }
    },
    doAction_uiControl9_TJh8bp: function (data, elem) {
      if (data.eventType == 'click') {
        // ysp.customHelper.back();
        ysp.appMain.reloadPage("http://192.168.200.63/wui/main.jsp?templateId=1");
      }
    },
    getTemplate_uiControl9_TJh8bp: function getTemplate_uiControl9_TJh8bp() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CommonHeader} from 'ysp-custom-components';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:this.props.customData}} \n       backIsShow = {true}\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:'click'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: this.props.customData },\n        backIsShow: true,\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'click'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control24_It6bP6: function (elem) {
      if (!elem) {
        return;
      }var data = {};var title = ["日常工作", "公文管理", "合同管理", "固定资产", "人事考勤", "财务管理", '人力资源费用管理', "三会文件"];var listBox = '';var header = [];var content, imgFlag;var href, Thref;var newList = {};var contents = [];if (elem.querySelectorAll('.listbox2').length > 0) {
        listBox = elem.querySelectorAll('.listbox2');
      } else if (elem.querySelectorAll('.listbox').length > 0) {
        listBox = elem.querySelectorAll('.listbox');
      }[].forEach.call(listBox, function (item, index) {
        var Titles;var Title = ysp.customHelper.trim(item.querySelector('table').querySelector('.title_1').textContent);Titles = Title.substring(0, 4);for (var i = 0; i < title.length; i++) {
          if (title[i].indexOf(Titles) != -1) {
            newList.index = index;content = [];href = [];Thref = [];imgFlag = [];if (item.querySelector('table').querySelector('.title_1').querySelector('a')) {
              Thref.push(item.querySelector('table').querySelector('.title_1').querySelector('a').href);
            } //var lists = item.querySelector('ul').querySelectorAll('a'); 
            var lists = item.querySelector('ul').querySelectorAll('li');newList.title = Title;header.push(Title);for (var k = 0; k < lists.length; k++) {
              //console.log(lists[k])
              //var string = ysp.customHelper.trim(lists[k].textContent); 
              var string = lists[k].textContent.trim().replace(/\s*/g, '');if (string.length > 3) {
                //content.push(ysp.customHelper.trim(lists[k].textContent));
                content.push(lists[k].textContent.trim().replace(/\s*/g, '')); //href.push(lists[k].href); 
                href.push(lists[k].querySelector('a').href);
              }newList.context = content;newList.href = href; //new图片标识
              if (lists[k].querySelector('img') == null) {
                imgFlag.push('noImgpicture');
              } else {
                imgFlag.push('yesImgpicture');
              }newList.imgFlag = imgFlag;
            }contents.push({ title: newList.title, titleHref: Thref, content: newList.context, href: newList.href, index: newList.index, //new图片标识
              imgpicture: newList.imgFlag });break;
          }
        }
      });data.contents = contents;return data;
    },
    doAction_uiControl24_E03y0k: function (data, elem) {
      if (data.eventType == 'click') {
        var num = data.dataCustom.aEls;num++;var index = data.dataCustom.divs;var title = data.dataCustom.title;title = ysp.customHelper.trim(title);if (elem.querySelectorAll('.listbox2').length > 0) {
          var aEls = elem.querySelectorAll('.listbox2')[index].querySelector('ul').querySelectorAll('a');
        } else if (elem.querySelectorAll('.listbox').length > 0) {
          var aEls = elem.querySelectorAll('.listbox')[index].querySelector('ul').querySelectorAll('a');
        }for (var i = 0, k = 0; i < aEls.length; i++) {
          var string = ysp.customHelper.trim(aEls[i].textContent);if (string.length > 3) {
            k++;if (title.indexOf(string) !== -1) {
              aEls[i].click();
            }
          }
        }
      }if (data.eventType == 'serchModel') {
        var href = data.dataCustom.href;var title = data.dataCustom.title;var index = data.dataCustom.index;ysp.customHelper.openWin(href, title);
      }
    },
    getTemplate_uiControl24_E03y0k: function getTemplate_uiControl24_E03y0k() {
      var selfTemplate = "import {Component} from 'react';\nimport {SerchDialog,CommonHeader} from 'ysp-custom-components'\nexport default class extends Component{\n  constructor(props){\n    super(props);\n    this.state={\n      show:true,\n      index:0,\n      open:false,\n      serch:false,\n      content:'',\n     \tarray:['01\u5185\u90E8\u6C9F\u901A','02\u81EA\u7531\u6D41\u7A0B','02\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u8463\u4E8B\u957F\u7B7E\u6838','03\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u4E3B\u7BA1\u9886\u5BFC\u7B7E\u6838','06\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u62A5\u544A\u9605\u77E5\u7C7B\uFF08\u540C\u9001\u603B\u7ECF\u7406\u8463\u4E8B\u957F\uFF09','\u672A\u8003\u52E4\u7533\u62A5\u5BA1\u6279\u6D41\u7A0B\uFF08\u65B0\uFF09','01\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u603B\u7ECF\u7406\u7B7E\u6838','\u8BF7\u5047/\u516C\u51FA\u6D41\u7A0B(\u65B0)','01\u5408\u540C\u4F1A\u7B7E\u6D41\u7A0B','05\u91D1\u878D\u8857\u96C6\u56E2\u6240\u5C5E\u516C\u53F8\u516C\u6587\u5BA1\u6279\u5355','\u9664IT\u7C7B\u56FA\u5B9A\u8D44\u4EA7\u7533\u8D2D\u5BA1\u6279\u6D41\u7A0B','\u673A\u5173\u5DE5\u4F1A\u652F\u51FA\u5BA1\u6279\u6D41\u7A0B','\u8D44\u91D1\u652F\u51FA\u5BA1\u6279\u6D41\u7A0B','\u91D1\u878D\u8857\u96C6\u56E2\u53D1\u85AA\u5BA1\u6279\u5355','\u5185\u90E8\u8D44\u91D1\u8C03\u62E8\u5BA1\u6279\u6D41\u7A0B','\u96C6\u56E2\u4EBA\u529B\u8D44\u6E90\u90E8\u5370\u7AE0\u4F7F\u7528\u5BA1\u6279\u6D41\u7A0B','1-\u8D44\u91D1\u8C03\u62E8\u5BA1\u6279\u6D41\u7A0B','\u96C6\u56E2\u515A\u53E3\u53D1\u6587\u6D41\u7A0B\uFF08\u6700\u65B0\uFF09','\u529E\u516C\u7528\u54C1\u7533\u9886\u5BA1\u6279\u6D41\u7A0B','\u4E09\u4F1A\u6587\u4EF6\u5BA1\u6279\u6D41\u7A0B',\"\u4E09\u4F1A\u6587\u4EF6\u5BA1\u6279\u6D41\u7A0B\",\"\u529E\u516C\u7528\u54C1\u7533\u9886\u5BA1\u6279\u6D41\u7A0B\",'IT\u7C7B\u529E\u516C\u8BBE\u5907\u548C\u56FA\u5B9A\u8D44\u4EA7\u7533\u8D2D\u5BA1\u6279\u6D41\u7A0B']\n    }\n    window.addEventListener('ysp-list-serch-head',this.serchValue.bind(this),false);\n  }\n  componentDidMount(){\n    var outer=this.refs.list.ownerDocument.querySelector('.view-wrapper') \n    setTimeout(function(){\n      outer.scrollTop=0\n    },500)\n  }\n  serchValue(string){\n    this.setState({\n      serch:true\n    })\n    var serchContents = [];\n    string = event.value;\n    var data = this.props.customData.contents;\n    [].forEach.call(data,function(item,index){\n      var contents = item.content;\n      var hrefs = item.href;\n      \t[].map.call(contents,function(d,i){\n          \tvar ch = {};\n        \t if(d.indexOf(string) !== -1){\n             ch.content = d;\n             ch.href = item.href[i];\n           }\n          if(JSON.stringify(ch) !== '{}'){\n            serchContents.push(ch);\n          }\n        }) \n    })\n    this.state.content = serchContents;\n    console.log(this.state.content)\n  }\n  shouldComponentUpdate(nextProps, nextState) {\n    return true;\n  }\n  onClick=(e)=>{\n    debugger\n    // this.serchValue()\n    if(e.target.nodeName != 'DIV'){\n      e.target = e.target.parentElement;\n    }\n    var num = e.target.dataset.index;\n    this.setState({\n      index:num,\n      open:!this.state.open\n    })\n    if(e.target.dataset.flag == 'false'){\n      e.target.dataset.flag = 'true';\n      this.setState({\n      \tshow:true\n    \t})\n    }else if(e.target.dataset.flag == 'true'){\n      e.target.dataset.flag = 'false';\n      this.setState({\n      \tshow:false\n    \t})\n    }\n  }\n  handlerClick=(e)=>{\n    if(e.target.nodeName != 'LI'){\n      e.target = e.target.parentElement;\n    }\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{aEls:e.target.dataset.index,divs:e.target.parentElement.previousSibling.dataset.num,title:e.target.dataset.title},\n        eventType:'click'\n      })\n    }\n  }\n  serchModel=(e)=>{\n    if(e.target.nodeName == 'A'){\n      e.target = e.target.parentElement;\n    }else if(e.target.nodeName == 'UL'){\n      e.target = e.target.children;\n    }\n      var handler = this.props.customHandler;\n      if(handler){\n        handler({\n          data:{title:e.target.dataset.title,index:e.target.dataset.index,href:e.target.dataset.href},\n          eventType:'serchModel'\n        })\n      }\n  }\n  render(){\n    var _this = this;\n    var  array = this.state.array;\n    var data = this.props.customData.contents || false;\n    [].forEach.call(data,function(item,index){\n      var alist = [];\n      [].forEach.call(item.content,function(content,index){\n        var so = function(value,k,arr){\n          for(var i = 0;i<array.length;i++){\n            if(content.indexOf('01\u5408\u540C\u4F1A\u7B7E\u6D41\u7A0B\uFF08') == -1 && content.indexOf(array[i]) !== -1){\n            \treturn true;\n          \t}\n          }\n        }\n        var flag = item.content.some(so);\n        if(flag){\n          alist.push(content);\n        }\n      })\n      item.content = alist;\n    })\n    return (\n    \t<div className='ysp-list-content' ref=\"list\">\n        {this.state.serch && <div className='serchDialog'> <SerchDialog >\n    \t<CommonHeader \n       data={{centerText:'\u641C\u7D22'}} \n       backIsShow = {true}\n       back={(e)=>{\n          this.setState({\n            serch:false\n          })\n        }}\n        />\n        \t{this.state.content.length>0? <ul className='list-serch-ul'> {this.state.content.map((d,i)=>{\n              return (\n              \t<li data-title = {d.content} data-index={i} className='ysp-list-serch-card' onClick={_this.serchModel.bind(_this)} data-href={d.href}><a className='serch-list'>{d.content}</a></li>\n              )\n            })}</ul> : <div style={{color:'red',textAlign:'center',margin:'20px'}}>* \u627E\u4E0D\u5230\u8BE5\u6D41\u7A0B *</div>}\n        </SerchDialog></div>}\n        {data && data.map((item,index)=>{\n          return( \n          \t<div className='ysp-list-card'>\n            \t<div data-index={index} data-num={item.index} data-flag = 'false' onClick={_this.onClick.bind(_this)} className='ysp-list-card-Title'><span>{item.title}</span><i className='unactive'></i></div>{\n                 <ul className='ysp-list-card-ul'> \n              \t{item.content.map((d,i)=>{ \n                    if(item.imgpicture[i]=='noImgpicture'){\n\t\t\t\t\t\t\t\t\t\t\treturn (\n                       <li data-title = {d}data-index={i} className='ysp-list-card-lis' onClick={_this.handlerClick.bind(_this)}><a data-href={item.href[i]} className='ysp-list-card-content '>{d}</a></li>\n                     )\n                  }else if(item.imgpicture[i]=='yesImgpicture'){\n                      return (\n                       <li data-title = {d} data-index={i} className='ysp-list-card-lis ' onClick={_this.handlerClick.bind(_this)}><a data-href={item.href[i]} className='ysp-list-card-content '>{d}</a><i className='ysp-list-card-content-img'></i></li>\n                     )     \n                \t}  \n                 })\n                }</ul>\n              }\n            </div>\n          )\n        })}\n        \n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      debugger;\n      // this.serchValue()\n      if (e.target.nodeName != 'DIV') {\n        e.target = e.target.parentElement;\n      }\n      var num = e.target.dataset.index;\n      _this2.setState({\n        index: num,\n        open: !_this2.state.open\n      });\n      if (e.target.dataset.flag == 'false') {\n        e.target.dataset.flag = 'true';\n        _this2.setState({\n          show: true\n        });\n      } else if (e.target.dataset.flag == 'true') {\n        e.target.dataset.flag = 'false';\n        _this2.setState({\n          show: false\n        });\n      }\n    };\n\n    _this2.handlerClick = function (e) {\n      if (e.target.nodeName != 'LI') {\n        e.target = e.target.parentElement;\n      }\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: { aEls: e.target.dataset.index, divs: e.target.parentElement.previousSibling.dataset.num, title: e.target.dataset.title },\n          eventType: 'click'\n        });\n      }\n    };\n\n    _this2.serchModel = function (e) {\n      if (e.target.nodeName == 'A') {\n        e.target = e.target.parentElement;\n      } else if (e.target.nodeName == 'UL') {\n        e.target = e.target.children;\n      }\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: { title: e.target.dataset.title, index: e.target.dataset.index, href: e.target.dataset.href },\n          eventType: 'serchModel'\n        });\n      }\n    };\n\n    _this2.state = {\n      show: true,\n      index: 0,\n      open: false,\n      serch: false,\n      content: '',\n      array: ['01\u5185\u90E8\u6C9F\u901A', '02\u81EA\u7531\u6D41\u7A0B', '02\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u8463\u4E8B\u957F\u7B7E\u6838', '03\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u4E3B\u7BA1\u9886\u5BFC\u7B7E\u6838', '06\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u62A5\u544A\u9605\u77E5\u7C7B\uFF08\u540C\u9001\u603B\u7ECF\u7406\u8463\u4E8B\u957F\uFF09', '\u672A\u8003\u52E4\u7533\u62A5\u5BA1\u6279\u6D41\u7A0B\uFF08\u65B0\uFF09', '01\u516C\u6587\u5BA1\u6279\u6D41\u7A0B-\u603B\u7ECF\u7406\u7B7E\u6838', '\u8BF7\u5047/\u516C\u51FA\u6D41\u7A0B(\u65B0)', '01\u5408\u540C\u4F1A\u7B7E\u6D41\u7A0B', '05\u91D1\u878D\u8857\u96C6\u56E2\u6240\u5C5E\u516C\u53F8\u516C\u6587\u5BA1\u6279\u5355', '\u9664IT\u7C7B\u56FA\u5B9A\u8D44\u4EA7\u7533\u8D2D\u5BA1\u6279\u6D41\u7A0B', '\u673A\u5173\u5DE5\u4F1A\u652F\u51FA\u5BA1\u6279\u6D41\u7A0B', '\u8D44\u91D1\u652F\u51FA\u5BA1\u6279\u6D41\u7A0B', '\u91D1\u878D\u8857\u96C6\u56E2\u53D1\u85AA\u5BA1\u6279\u5355', '\u5185\u90E8\u8D44\u91D1\u8C03\u62E8\u5BA1\u6279\u6D41\u7A0B', '\u96C6\u56E2\u4EBA\u529B\u8D44\u6E90\u90E8\u5370\u7AE0\u4F7F\u7528\u5BA1\u6279\u6D41\u7A0B', '1-\u8D44\u91D1\u8C03\u62E8\u5BA1\u6279\u6D41\u7A0B', '\u96C6\u56E2\u515A\u53E3\u53D1\u6587\u6D41\u7A0B\uFF08\u6700\u65B0\uFF09', '\u529E\u516C\u7528\u54C1\u7533\u9886\u5BA1\u6279\u6D41\u7A0B', '\u4E09\u4F1A\u6587\u4EF6\u5BA1\u6279\u6D41\u7A0B', \"\u4E09\u4F1A\u6587\u4EF6\u5BA1\u6279\u6D41\u7A0B\", \"\u529E\u516C\u7528\u54C1\u7533\u9886\u5BA1\u6279\u6D41\u7A0B\", 'IT\u7C7B\u529E\u516C\u8BBE\u5907\u548C\u56FA\u5B9A\u8D44\u4EA7\u7533\u8D2D\u5BA1\u6279\u6D41\u7A0B']\n    };\n    window.addEventListener('ysp-list-serch-head', _this2.serchValue.bind(_this2), false);\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var outer = this.refs.list.ownerDocument.querySelector('.view-wrapper');\n      setTimeout(function () {\n        outer.scrollTop = 0;\n      }, 500);\n    }\n  }, {\n    key: 'serchValue',\n    value: function serchValue(string) {\n      this.setState({\n        serch: true\n      });\n      var serchContents = [];\n      string = event.value;\n      var data = this.props.customData.contents;\n      [].forEach.call(data, function (item, index) {\n        var contents = item.content;\n        var hrefs = item.href;\n        [].map.call(contents, function (d, i) {\n          var ch = {};\n          if (d.indexOf(string) !== -1) {\n            ch.content = d;\n            ch.href = item.href[i];\n          }\n          if (JSON.stringify(ch) !== '{}') {\n            serchContents.push(ch);\n          }\n        });\n      });\n      this.state.content = serchContents;\n      console.log(this.state.content);\n    }\n  }, {\n    key: 'shouldComponentUpdate',\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      return true;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      var array = this.state.array;\n      var data = this.props.customData.contents || false;\n      [].forEach.call(data, function (item, index) {\n        var alist = [];\n        [].forEach.call(item.content, function (content, index) {\n          var so = function so(value, k, arr) {\n            for (var i = 0; i < array.length; i++) {\n              if (content.indexOf('01\u5408\u540C\u4F1A\u7B7E\u6D41\u7A0B\uFF08') == -1 && content.indexOf(array[i]) !== -1) {\n                return true;\n              }\n            }\n          };\n          var flag = item.content.some(so);\n          if (flag) {\n            alist.push(content);\n          }\n        });\n        item.content = alist;\n      });\n      return React.createElement(\n        'div',\n        { className: 'ysp-list-content', ref: 'list' },\n        this.state.serch && React.createElement(\n          'div',\n          { className: 'serchDialog' },\n          ' ',\n          React.createElement(\n            _yspCustomComponents.SerchDialog,\n            null,\n            React.createElement(_yspCustomComponents.CommonHeader, {\n              data: { centerText: '\u641C\u7D22' },\n              backIsShow: true,\n              back: function back(e) {\n                _this3.setState({\n                  serch: false\n                });\n              }\n            }),\n            this.state.content.length > 0 ? React.createElement(\n              'ul',\n              { className: 'list-serch-ul' },\n              ' ',\n              this.state.content.map(function (d, i) {\n                return React.createElement(\n                  'li',\n                  { 'data-title': d.content, 'data-index': i, className: 'ysp-list-serch-card', onClick: _this.serchModel.bind(_this), 'data-href': d.href },\n                  React.createElement(\n                    'a',\n                    { className: 'serch-list' },\n                    d.content\n                  )\n                );\n              })\n            ) : React.createElement(\n              'div',\n              { style: { color: 'red', textAlign: 'center', margin: '20px' } },\n              '* \\u627E\\u4E0D\\u5230\\u8BE5\\u6D41\\u7A0B *'\n            )\n          )\n        ),\n        data && data.map(function (item, index) {\n          return React.createElement(\n            'div',\n            { className: 'ysp-list-card' },\n            React.createElement(\n              'div',\n              { 'data-index': index, 'data-num': item.index, 'data-flag': 'false', onClick: _this.onClick.bind(_this), className: 'ysp-list-card-Title' },\n              React.createElement(\n                'span',\n                null,\n                item.title\n              ),\n              React.createElement('i', { className: 'unactive' })\n            ),\n            React.createElement(\n              'ul',\n              { className: 'ysp-list-card-ul' },\n              item.content.map(function (d, i) {\n                if (item.imgpicture[i] == 'noImgpicture') {\n                  return React.createElement(\n                    'li',\n                    { 'data-title': d, 'data-index': i, className: 'ysp-list-card-lis', onClick: _this.handlerClick.bind(_this) },\n                    React.createElement(\n                      'a',\n                      { 'data-href': item.href[i], className: 'ysp-list-card-content ' },\n                      d\n                    )\n                  );\n                } else if (item.imgpicture[i] == 'yesImgpicture') {\n                  return React.createElement(\n                    'li',\n                    { 'data-title': d, 'data-index': i, className: 'ysp-list-card-lis ', onClick: _this.handlerClick.bind(_this) },\n                    React.createElement(\n                      'a',\n                      { 'data-href': item.href[i], className: 'ysp-list-card-content ' },\n                      d\n                    ),\n                    React.createElement('i', { className: 'ysp-list-card-content-img' })\n                  );\n                }\n              })\n            )\n          );\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control12_vQC1zM: function getData_control12_vQC1zM(elem) {},

    getData_control13_A4MAN5: function getData_control13_A4MAN5(elem) {},
    doAction_uiControl13_2inZqR: function doAction_uiControl13_2inZqR(data, elem) {},
    getTemplate_uiControl13_2inZqR: function getTemplate_uiControl13_2inZqR() {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div className='background-gray'>\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement('div', { className: 'background-gray' });\n  }\n});";
    },
    getData_control18_uCPsfD: function (elem) {},
    doAction_uiControl12_DFr8z9: function (data, elem) {},
    getTemplate_uiControl12_DFr8z9: function getTemplate_uiControl12_DFr8z9() {
      var selfTemplate = "import {Component} from 'react';\nexport default class extends Component{              \n  render(){\n    return(\n      <div>\n        <div className='ysp-list-search'>\n          <input type='text' placeholder='\u8BF7\u8F93\u5165\u5173\u952E\u5B57'/>\n          <i className='ysp-list-search-icon' onClick={(e)=>{                var evt1 = new Event('ysp-list-serch-head');\n                 evt1.value = e.target.previousElementSibling.value;\n                window.dispatchEvent(evt1);\n               e.target.previousElementSibling.value = '';                       \n               }}></i>\n        </div>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          { className: 'ysp-list-search' },\n          React.createElement('input', { type: 'text', placeholder: '\\u8BF7\\u8F93\\u5165\\u5173\\u952E\\u5B57' }),\n          React.createElement('i', { className: 'ysp-list-search-icon', onClick: function onClick(e) {\n              var evt1 = new Event('ysp-list-serch-head');\n              evt1.value = e.target.previousElementSibling.value;\n              window.dispatchEvent(evt1);\n              e.target.previousElementSibling.value = '';\n            } })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control348_TUOkLt: function (elem) {},
    doAction_uiControl349_FMToHf: function (data, elem) {},
    getTemplate_uiControl349_FMToHf: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  componentDidMount(props){\n // \u6CE8\u610F\uFF1A\u5982\u679C\u6D41\u7A0B\u91CC\u9762\u539FPC\u5E76\u6CA1\u6709#loading\u8FD9\u4E2A\u5143\u7D20\uFF0C\u90A3\u4E48\u5C31\u89E3\u5F00\u8FD9\u4E2A\u751F\u547D\u5468\u671F\uFF0C\u4E0D\u8981\u6570\u636E\u91C7\u96C6\n    var _this=this;\n    setTimeout(function(){\n     _this.refs.load.style.display=\"none\"\n    },1000)\n    \n  }\n  render(){\n    return(\n    \t\n      <div ref=\"load\" className=\"ysp_roatLoading\"><span className=\"roatImg\"></span></div>\n      \n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount(props) {\n      // \u6CE8\u610F\uFF1A\u5982\u679C\u6D41\u7A0B\u91CC\u9762\u539FPC\u5E76\u6CA1\u6709#loading\u8FD9\u4E2A\u5143\u7D20\uFF0C\u90A3\u4E48\u5C31\u89E3\u5F00\u8FD9\u4E2A\u751F\u547D\u5468\u671F\uFF0C\u4E0D\u8981\u6570\u636E\u91C7\u96C6\n      var _this = this;\n      setTimeout(function () {\n        _this.refs.load.style.display = \"none\";\n      }, 1000);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"div\",\n        { ref: \"load\", className: \"ysp_roatLoading\" },\n        React.createElement(\"span\", { className: \"roatImg\" })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);