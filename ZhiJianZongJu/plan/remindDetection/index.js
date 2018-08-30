(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control51_6Jq70B: function (elem) {
      if (!elem) return;return elem.textContent.trim();
    },
    doAction_uiControl50_yKAdBW: function (data, elem) {},
    getTemplate_uiControl50_yKAdBW: function () {
      var selfTemplate = "import { HeaderLeftbtn } from 'ysp-custom-components';\nmodule.exports = React.createClass({\n  render: function() {\n    return (\n      <HeaderLeftbtn title={this.props.customData} />\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(_yspCustomComponents.HeaderLeftbtn, { title: this.props.customData });\n  }\n});";
    },
    getData_control52_wSGG0f: function (elem) {
      if (!elem) return;var data = {};data.title = elem.querySelector('div').textContent.trim();data.querybtn = { text: elem.querySelector('button').textContent, id: elem.querySelector('button').id };data.delbtn = { text: elem.querySelectorAll('button')[1].textContent.trim(), id: elem.querySelectorAll('button')[1].id };data.content = [];var div = elem.querySelector("#queryDiv");var ipts = elem.querySelectorAll('label');for (var i = 0; i < ipts.length; i++) {
        var obj = {};if (i < 4) {
          obj.left = ipts[i].textContent;obj.val = ipts[i].nextElementSibling.nextElementSibling.querySelector('input[type="text"]').value;obj.flat = 'ipt';obj.index = i;data.content.push(obj);;
        } else if (i == ipts.length - 1) {
          obj.left = ipts[i].textContent;obj.opts = [];obj.index = i;obj.flat = 'select';var opts = elem.ownerDocument.querySelector(".panel.combo-p").nextElementSibling.querySelector('div').querySelectorAll('div');obj.selected = [];for (var k = 0; k < opts.length; k++) {
            obj.opts.push(opts[k].textContent);if (opts[k].className.indexOf('combobox-item-selected') != -1) {
              obj.selected.push(true);
            } else {
              obj.selected.push(false);
            }
          }data.content.push(obj);
        } else {
          obj.left = ipts[i].textContent;obj.opts = [];obj.index = i;obj.flat = 'select';var opts = elem.ownerDocument.querySelector(".panel.combo-p").querySelector('div').querySelectorAll('div');obj.selected = [];for (var k = 0; k < opts.length; k++) {
            obj.opts.push(opts[k].textContent);if (opts[k].className.indexOf('combobox-item-selected') != -1) {
              obj.selected.push(true);
            } else {
              obj.selected.push(false);
            }
          }data.content.push(obj);
        }
      }return data;
    },
    doAction_uiControl51_KT81Tf: function (data, elem) {
      var type = data.eventType,
          data = data.customData,
          index = +data.index;if (type == 'querclick') {
        elem.querySelector("#" + data.id).click();
      }if (type == 'click') {
        elem.querySelectorAll('button')[1].click();
      }var labels = elem.querySelectorAll('label');if (type == 'blur') {
        if (index < 4) {
          labels[index].nextElementSibling.value = data.value;labels[index].nextElementSibling.nextElementSibling.querySelectorAll('input')[0].value = data.value;labels[index].nextElementSibling.nextElementSibling.querySelectorAll('input')[1].value = data.value;
        }
      }if (type == 'dateipt') {
        if (data.id_index == 0) {
          labels[index].nextElementSibling.value = data.value;labels[index].nextElementSibling.nextElementSibling.querySelectorAll('input')[0].value = data.value;labels[index].nextElementSibling.nextElementSibling.querySelectorAll('input')[1].value = data.value;
        } else {
          labels[index].nextElementSibling.value = data.value;labels[index].nextElementSibling.nextElementSibling.nextSibling.nextElementSibling.value = data.value;labels[index].nextElementSibling.nextElementSibling.nextSibling.nextElementSibling.nextElementSibling.querySelectorAll('input')[1].value = data.value;
        }
      }if (type == 'selectchange') {
        elem.ownerDocument.querySelector(".panel.combo-p").querySelector('div').querySelectorAll('div')[+data.selectedIndex].click();
      }if (type == 'selectedchange') {
        elem.ownerDocument.querySelector(".panel.combo-p").nextElementSibling.querySelector('div').querySelectorAll('div')[+data.selectedIndex].click();
      }
    },
    getTemplate_uiControl51_KT81Tf: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onblur:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType:'blur',\n        data:{\n          value:target.value,\n          index:target.getAttribute('data-index')\n        }\n      })\n    }\n  },\n  dateblur:function(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    if(handler){\n      handler({\n        eventType:'dateipt',\n        data:{\n          value:target.value,\n          index:target.getAttribute('data-index'),\n          id_index:target.getAttribute('data-id')\n        }\n      })\n    }\n  },\n  onChange:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        index = target.dataset.index,\n        selectedindex = target.selectedIndex,\n        type;\n    if(index == '4'){\n      type = 'selectchange';\n    }else {\n      type = 'selectedchange' \n    }\n    if(handler){\n      handler({\n        eventType:type,\n        data:{\n          index:target.getAttribute('data-index'),\n          selectedIndex:selectedindex\n        }\n      })\n    }\n  },\n  querybtn:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        id = target.id;\n    if(handler){\n      handler({\n        eventType:'querclick',\n        data:{\n          id:id\n        }\n      })\n    }\n  },\n  delbtn:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        id = target.id;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:{\n          \n        }\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    if(!data){\n      return '';\n    }\n    var lis = data.content.map(function(ele,index){\n\t\t\t\t\t\t\tif(ele.flat == 'ipt'){\n                return(\n                  <div>\n                  \t<div>{ele.left}</div>\n                    <div><AInput placeholder='\u8BF7\u8F93\u5165' onBlur={_this.onblur.bind(_this)} type='text' data-index={ele.index} value={ele.val} /></div>\n                  </div>\n                )\n              }else if(ele.flat == 'date'){\n                return(\n                \t<div>\n                  \t<div>{ele.left}</div>\n                    <div><AInput onBlur={_this.dateblur.bind(_this)} type='date' data-id={index==4?0:1} data-index={ele.index} value={ele.val} /></div>\n                  </div>\n                )\n              } else if(ele.flat == 'select'){\n                return(\n                \t<div>\n                  \t<div>{ele.left}</div>\n                    <div>\n                      <select data-index={ele.index} onChange={_this.onChange.bind(_this)}>\n                        {\n                        ele.opts.map(function(d,i){\n                          return(\n                          \t<option data-index={i} selected={ele.selected[i]}>{d}</option>\n                          )\n                        })\n                      }\n                      </select>\n                    </div>\n                  </div>\n                )\n              }\n            })\n    return (\n      <div className='queryCondition'>\n        <div className='conditionTitle'>{data.title}</div>\n        <div className='conditionContent'>\n        \t{\n            lis\n          }\n        </div>\n        <div className='querybtn'>\n        \t<button onClick={_this.querybtn.bind(_this)} id={data.querybtn.id}>{data.querybtn.text}</button>\n          <button onClick={_this.delbtn.bind(_this)}>{data.delbtn.text}</button>\n        </div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onblur: function onblur(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'blur',\n        data: {\n          value: target.value,\n          index: target.getAttribute('data-index')\n        }\n      });\n    }\n  },\n  dateblur: function dateblur(e) {\n    var handler = this.props.customHandler,\n        target = e.target;\n    if (handler) {\n      handler({\n        eventType: 'dateipt',\n        data: {\n          value: target.value,\n          index: target.getAttribute('data-index'),\n          id_index: target.getAttribute('data-id')\n        }\n      });\n    }\n  },\n  onChange: function onChange(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        index = target.dataset.index,\n        selectedindex = target.selectedIndex,\n        type;\n    if (index == '4') {\n      type = 'selectchange';\n    } else {\n      type = 'selectedchange';\n    }\n    if (handler) {\n      handler({\n        eventType: type,\n        data: {\n          index: target.getAttribute('data-index'),\n          selectedIndex: selectedindex\n        }\n      });\n    }\n  },\n  querybtn: function querybtn(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        id = target.id;\n    if (handler) {\n      handler({\n        eventType: 'querclick',\n        data: {\n          id: id\n        }\n      });\n    }\n  },\n  delbtn: function delbtn(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        id = target.id;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: {}\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (!data) {\n      return '';\n    }\n    var lis = data.content.map(function (ele, index) {\n      if (ele.flat == 'ipt') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            null,\n            ele.left\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(AInput, { placeholder: '\\u8BF7\\u8F93\\u5165', onBlur: _this.onblur.bind(_this), type: 'text', 'data-index': ele.index, value: ele.val })\n          )\n        );\n      } else if (ele.flat == 'date') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            null,\n            ele.left\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(AInput, { onBlur: _this.dateblur.bind(_this), type: 'date', 'data-id': index == 4 ? 0 : 1, 'data-index': ele.index, value: ele.val })\n          )\n        );\n      } else if (ele.flat == 'select') {\n        return React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'div',\n            null,\n            ele.left\n          ),\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'select',\n              { 'data-index': ele.index, onChange: _this.onChange.bind(_this) },\n              ele.opts.map(function (d, i) {\n                return React.createElement(\n                  'option',\n                  { 'data-index': i, selected: ele.selected[i] },\n                  d\n                );\n              })\n            )\n          )\n        );\n      }\n    });\n    return React.createElement(\n      'div',\n      { className: 'queryCondition' },\n      React.createElement(\n        'div',\n        { className: 'conditionTitle' },\n        data.title\n      ),\n      React.createElement(\n        'div',\n        { className: 'conditionContent' },\n        lis\n      ),\n      React.createElement(\n        'div',\n        { className: 'querybtn' },\n        React.createElement(\n          'button',\n          { onClick: _this.querybtn.bind(_this), id: data.querybtn.id },\n          data.querybtn.text\n        ),\n        React.createElement(\n          'button',\n          { onClick: _this.delbtn.bind(_this) },\n          data.delbtn.text\n        )\n      )\n    );\n  }\n});";
    },
    getData_control53_NJnUAP: function (elem) {
      if (!elem) return;var data = {};data.titles = [];data.content = [];var tds = elem.querySelector('table').querySelector('tr').querySelectorAll('td');for (var i = 1; i < tds.length; i++) {
        if (tds[i].style.display != 'none') {
          data.titles.push(tds[i].textContent.trim());
        }
      }var trs = elem.querySelectorAll('table')[1].querySelectorAll('tr');for (var i = 0; i < trs.length; i++) {
        if (trs[i].style.display != 'none') {
          var tds = trs[i].querySelectorAll('td');var arr = [];for (var k = 1; k < tds.length; k++) {
            if (tds[k].style.display != 'none') {
              arr.push(tds[k].textContent.trim());
            }
          }arr.push(trs[i].className.indexOf('datagrid-row-checked') != -1 ? true : false);data.content.push(arr);
        }
      }return data;
    },
    doAction_uiControl52_4ZF8F2: function (data, elem) {
      var type = data.eventType,
          data = +data.customData;if (type == 'click') {
        elem.querySelectorAll('table')[1].querySelectorAll('tr')[data].click();
      }
    },
    getTemplate_uiControl52_4ZF8F2: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click:function(e){\n    var target = e.target;\n    if(target.parentElement.nextElementSibling.style.display=='none'){\n      // target.style.backgroundImage = 'url(./img/top.png)';\n      target.className = 'top';\n      target.parentElement.style.borderBottom = '1px solid #ccc';\n      target.parentElement.nextElementSibling.style.display = 'block';\n    }else{\n      // target.style.backgroundImage = 'url(./img/xia.png)';\n      target.className = 'xia';\n      target.parentElement.style.borderBottom = '0';\n      target.parentElement.nextElementSibling.style.display = 'none';\n    }\n  },\n  onClick:function(e){\n    var handler = this.props.customHandler,\n        target = e.target,\n        index = target.dataset.index;\n    if(handler){\n      handler({\n        eventType:'click',\n        data:index\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData,\n        _this = this;\n    if(!data){\n      return '';\n    }\n    var lis = data.content.map(function(ele,index){\n      if(!ele[0]){return ''}\n      return(\n      \t<div className='deilitem deilQuery'>\n          <div data-index={index} onClick={_this.onClick.bind(_this)} className={ele[ele.length-1]?'seledradio':''}></div>\n          <div className='deilTitle'>\n          \t<p>{ele[2]}</p>\n            <p className='xia' onClick={_this.click.bind(_this)}>{ele[1]}</p>\n          </div>\n          <div className='deilContent' style={{'display':'none'}} >\n          \t<p>{data.titles[0]}:&nbsp;&nbsp;&nbsp;{ele[0]}</p>\n          \t<p>{data.titles[3]}:&nbsp;&nbsp;&nbsp;{ele[3]}</p>\n          \t<p>{data.titles[4]}:&nbsp;&nbsp;&nbsp;{ele[4]}</p>\n          \t<p>{data.titles[5]}:&nbsp;&nbsp;&nbsp;{ele[5]}</p>\n          \t<p>{data.titles[6]}:&nbsp;&nbsp;&nbsp;{ele[6]}</p>\n          </div>\n        </div>\n      )\n    })\n    return (\n      <div className='deilTable'>\n        {\n          lis\n        }\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  click: function click(e) {\n    var target = e.target;\n    if (target.parentElement.nextElementSibling.style.display == 'none') {\n      // target.style.backgroundImage = 'url(./img/top.png)';\n      target.className = 'top';\n      target.parentElement.style.borderBottom = '1px solid #ccc';\n      target.parentElement.nextElementSibling.style.display = 'block';\n    } else {\n      // target.style.backgroundImage = 'url(./img/xia.png)';\n      target.className = 'xia';\n      target.parentElement.style.borderBottom = '0';\n      target.parentElement.nextElementSibling.style.display = 'none';\n    }\n  },\n  onClick: function onClick(e) {\n    var handler = this.props.customHandler,\n        target = e.target,\n        index = target.dataset.index;\n    if (handler) {\n      handler({\n        eventType: 'click',\n        data: index\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData,\n        _this = this;\n    if (!data) {\n      return '';\n    }\n    var lis = data.content.map(function (ele, index) {\n      if (!ele[0]) {\n        return '';\n      }\n      return React.createElement(\n        'div',\n        { className: 'deilitem deilQuery' },\n        React.createElement('div', { 'data-index': index, onClick: _this.onClick.bind(_this), className: ele[ele.length - 1] ? 'seledradio' : '' }),\n        React.createElement(\n          'div',\n          { className: 'deilTitle' },\n          React.createElement(\n            'p',\n            null,\n            ele[2]\n          ),\n          React.createElement(\n            'p',\n            { className: 'xia', onClick: _this.click.bind(_this) },\n            ele[1]\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'deilContent', style: { 'display': 'none' } },\n          React.createElement(\n            'p',\n            null,\n            data.titles[0],\n            ':\\xA0\\xA0\\xA0',\n            ele[0]\n          ),\n          React.createElement(\n            'p',\n            null,\n            data.titles[3],\n            ':\\xA0\\xA0\\xA0',\n            ele[3]\n          ),\n          React.createElement(\n            'p',\n            null,\n            data.titles[4],\n            ':\\xA0\\xA0\\xA0',\n            ele[4]\n          ),\n          React.createElement(\n            'p',\n            null,\n            data.titles[5],\n            ':\\xA0\\xA0\\xA0',\n            ele[5]\n          ),\n          React.createElement(\n            'p',\n            null,\n            data.titles[6],\n            ':\\xA0\\xA0\\xA0',\n            ele[6]\n          )\n        )\n      );\n    });\n    return React.createElement(\n      'div',\n      { className: 'deilTable' },\n      lis\n    );\n  }\n});";
    },
    getData_control54_y7AEQp: function (elem) {
      if (!elem) return;var data = { page: [], sumPage: [] }; // var pageEl = elem.parentElement.parentElement.nextElementSibling;
      var page = elem.querySelector("tbody").querySelectorAll("td")[6].querySelector("input").value;data.page.push(page);var sumPage = elem.querySelector("tbody").querySelectorAll("td")[7].textContent;data.sumPage.push(sumPage);return data;
    },
    doAction_uiControl53_J0FZZx: function (data, elem) {
      var type = data.eventType;var data = data.customData;if ('page' == type) {
        if ('first' == data) {
          elem.querySelector("tbody").querySelectorAll("td")[2].querySelector("a").click();
        }if ("up" == data) {
          elem.querySelector("tbody").querySelectorAll("td")[3].querySelector("a").click();
        }if ("down" == data) {
          elem.querySelector("tbody").querySelectorAll("td")[9].querySelector("a").click();
        }if ("last" == data) {
          elem.querySelector("tbody").querySelectorAll("td")[10].querySelector("a").click();
        }
      }
    },
    getTemplate_uiControl53_J0FZZx: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerPage:function(e){\n    var target = e.target;\n    var handler = this.props.customHandler;\n    var type = target.dataset.type;\n    if(handler){\n      handler({\n        eventType:'page',\n        data:type\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customdata,\n    \t\tfirst = \"|<\",up=\"<\",down=\">\",last=\">|\";\n    var sumPage = this.props.customData && this.props.customData.sumPage || [];\n    var page = this.props.customData && this.props.customData.page || [];\n    return (\n      <div>\n        <div className=\"dovedteskPage\">\n          <span className=\"dovedteskPageFirst\">\n            <span onClick={this.handlerPage.bind(this)} data-type=\"first\">{first}</span>\n            <span onClick={this.handlerPage.bind(this)} data-type=\"up\">{up}</span>\n          </span>\n          <span className=\"dovedteskPageCenter\">\n            <span>\n              <span>\u7B2C</span>\n              <span>{page}</span>\n            </span>\n            <span>{sumPage}</span>\n          </span>\n          <span className=\"dovedteskPageLast\">\n            <span onClick={this.handlerPage.bind(this)} data-type=\"down\">{down}</span>\n            <span onClick={this.handlerPage.bind(this)} data-type=\"last\">{last}</span>\n          </span>\n        </div>\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  handlerPage: function handlerPage(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    var type = target.dataset.type;\n    if (handler) {\n      handler({\n        eventType: 'page',\n        data: type\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customdata,\n        first = \"|<\",\n        up = \"<\",\n        down = \">\",\n        last = \">|\";\n    var sumPage = this.props.customData && this.props.customData.sumPage || [];\n    var page = this.props.customData && this.props.customData.page || [];\n    return React.createElement(\n      \"div\",\n      null,\n      React.createElement(\n        \"div\",\n        { className: \"dovedteskPage\" },\n        React.createElement(\n          \"span\",\n          { className: \"dovedteskPageFirst\" },\n          React.createElement(\n            \"span\",\n            { onClick: this.handlerPage.bind(this), \"data-type\": \"first\" },\n            first\n          ),\n          React.createElement(\n            \"span\",\n            { onClick: this.handlerPage.bind(this), \"data-type\": \"up\" },\n            up\n          )\n        ),\n        React.createElement(\n          \"span\",\n          { className: \"dovedteskPageCenter\" },\n          React.createElement(\n            \"span\",\n            null,\n            React.createElement(\n              \"span\",\n              null,\n              \"\\u7B2C\"\n            ),\n            React.createElement(\n              \"span\",\n              null,\n              page\n            )\n          ),\n          React.createElement(\n            \"span\",\n            null,\n            sumPage\n          )\n        ),\n        React.createElement(\n          \"span\",\n          { className: \"dovedteskPageLast\" },\n          React.createElement(\n            \"span\",\n            { onClick: this.handlerPage.bind(this), \"data-type\": \"down\" },\n            down\n          ),\n          React.createElement(\n            \"span\",\n            { onClick: this.handlerPage.bind(this), \"data-type\": \"last\" },\n            last\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control55_BeV9pA: function (elem) {
      if (!elem) return;var data = { btn: elem.textContent.trim(), content: [], delbtn: elem.ownerDocument.querySelector("#show-dialog").querySelector('button').textContent.trim(), flat: elem.ownerDocument.querySelector("#show-dialog").parentElement.style.display == 'block' ? true : false };var showbox = elem.ownerDocument.querySelector("#show-dialog");data.title = showbox.querySelector('lable').textContent.trim();var labels = showbox.querySelector('table').querySelectorAll('label');for (var i = 0; i < labels.length; i++) {
        var obj = {};obj.left = labels[i].textContent.trim();obj.text = labels[i].parentElement.nextElementSibling.querySelector('input') ? labels[i].parentElement.nextElementSibling.querySelector('input').value : labels[i].parentElement.nextElementSibling.textContent.trim();data.content.push(obj);
      }return data;
    },
    doAction_uiControl54_KVI7Nl: function (data, elem) {
      var type = data.eventType,
          data = data.customData;if (type == 'click') {
        elem.querySelector('button').click();
      }if (type == 'delclick') {
        elem.ownerDocument.querySelector("#show-dialog").querySelector('button').click();
      }
    },
    getTemplate_uiControl54_KVI7Nl: function () {
      var selfTemplate = "import { Component } from 'react';\nimport { Header } from 'ysp-interior-components';\nexport default class extends Component{\n  constructor(props){\n    super(props)\n    this.state = {\n      open:false\n    }\n  }\n  onClick(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    this.setState({\n      open:true\n    })\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  }\n  delopen(e){\n    var handler = this.props.customHandler,\n        target = e.target;\n    this.setState({\n      open:false\n    })\n    if(handler){\n      handler({\n        eventType:'delclick'\n      })\n    }\n  }\n  render(){\n    var data = this.props.customData;\n    return(\n      <div>\n        <div className='deilbtn'>\n      \t\t<button onClick={this.onClick.bind(this)}>{data.btn}</button>\n        </div>\n        \t{\n            this.state.open&&data.flat?\n              <div className='deilCatalog'>\n                <div className='HeaderTitle'>\n                  <Header title={data.title}></Header>\n                  <div className='deil_title'>{data.title}</div>\n                  <div>\n                    {\n                      data.content.map(function(ele,index){\n                        return(\n                          <div>\n                            <div>{ele.left}</div>\n                            <div>{ele.text}</div>\n                          </div>\n                        )\n                      })\n                    }\n                    <button onClick={this.delopen.bind(this)}>{data.delbtn}</button>\n                  </div>\n                </div>\n              </div>\n              :''\n          }\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this.state = {\n      open: false\n    };\n    return _this;\n  }\n\n  _createClass(_class, [{\n    key: 'onClick',\n    value: function onClick(e) {\n      var handler = this.props.customHandler,\n          target = e.target;\n      this.setState({\n        open: true\n      });\n      if (handler) {\n        handler({\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'delopen',\n    value: function delopen(e) {\n      var handler = this.props.customHandler,\n          target = e.target;\n      this.setState({\n        open: false\n      });\n      if (handler) {\n        handler({\n          eventType: 'delclick'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'div',\n          { className: 'deilbtn' },\n          React.createElement(\n            'button',\n            { onClick: this.onClick.bind(this) },\n            data.btn\n          )\n        ),\n        this.state.open && data.flat ? React.createElement(\n          'div',\n          { className: 'deilCatalog' },\n          React.createElement(\n            'div',\n            { className: 'HeaderTitle' },\n            React.createElement(_yspInteriorComponents.Header, { title: data.title }),\n            React.createElement(\n              'div',\n              { className: 'deil_title' },\n              data.title\n            ),\n            React.createElement(\n              'div',\n              null,\n              data.content.map(function (ele, index) {\n                return React.createElement(\n                  'div',\n                  null,\n                  React.createElement(\n                    'div',\n                    null,\n                    ele.left\n                  ),\n                  React.createElement(\n                    'div',\n                    null,\n                    ele.text\n                  )\n                );\n              }),\n              React.createElement(\n                'button',\n                { onClick: this.delopen.bind(this) },\n                data.delbtn\n              )\n            )\n          )\n        ) : ''\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control65_3e9rWT: function (elem) {
      if (!elem) return;return elem.textContent.trim();
    },
    doAction_uiControl64_tsgpe6: function (data, elem) {},
    getTemplate_uiControl64_tsgpe6: function () {
      var selfTemplate = "module.exports = React.createClass({\n  render: function() {\n    return (\n      <div>\n        {\n          alert(this.props.customData)\n        }\n      </div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  render: function render() {\n    return React.createElement(\n      \"div\",\n      null,\n      alert(this.props.customData)\n    );\n  }\n});";
    }
  });
})(window, ysp);