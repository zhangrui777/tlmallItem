(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control64_IDGL0K: function (elem) {
      if (!elem) {
        return;
      }var data = {};if (elem.querySelector('#Tree_treeView_0') && elem.querySelector('#Tree_treeView_0').querySelector('div')) {
        var firstLevel = $(elem.querySelector('#Tree_treeView_0')).children('div');var levelId = 'Tree_treeView_0';var currLevel = [];var currLevelStatus = [];var nextLevel = [];for (var i = 0; i < firstLevel.length; i++) {
          var tds = firstLevel[i].querySelector('table').querySelectorAll('td');var tdLength = tds.length;currLevel.push(tds[tdLength - 1].textContent.trim()); //遍历一级数据
          if (firstLevel[i].querySelector('div')) {
            //存在下级
            if (firstLevel[i].querySelector('div').style.display !== 'none') {
              currLevelStatus.push('open'); //遍历二级数据
              var secondLevel = $(firstLevel[i].querySelector('div')).children('div');var secondLevelSngle = {};var secondLevelContent = [];var secondLevelStatus = [];var secNextLevel = [];for (var j = 0; j < secondLevel.length; j++) {
                var secondTds = secondLevel[j].querySelector('table').querySelectorAll('td');var secondLength = secondTds.length;secondLevelContent.push(secondTds[secondLength - 1].textContent.trim());if (secondLevel[j].querySelector('div')) {
                  //存在下级
                  if (secondLevel[j].querySelector('div').style.display !== 'none') {
                    secondLevelStatus.push('open'); // 遍历三级数据
                    var thirdLevel = $(secondLevel[j].querySelector('div')).children('div');var thirdLevelSngle = {};var thirdLevelContent = [];var thirdLevelStatus = [];var thirdNextLevel = [];for (var k = 0; k < thirdLevel.length; k++) {
                      var thirdTds = thirdLevel[k].querySelector('table').querySelectorAll('td');var thirdLength = thirdTds.length;thirdLevelContent.push(thirdTds[thirdLength - 1].textContent.trim());if (thirdLevel[k].querySelector('div')) {
                        //存在下级
                        if (thirdLevel[k].querySelector('div').style.display !== 'none') {
                          thirdLevelStatus.push('open');
                        } else {
                          thirdLevelStatus.push('close');
                        }thirdLevelSngle.nextLevel = [];
                      }
                    }thirdLevelSngle.levelId = secondLevel[j].querySelector('div').getAttribute('id');thirdLevelSngle.currLevel = thirdLevelContent;thirdLevelSngle.currLevelStatus = thirdLevelStatus;secNextLevel.push(thirdLevelSngle);
                  } else {
                    secondLevelStatus.push('close');secNextLevel.push(null);
                  }secondLevelSngle.nextLevel = secNextLevel;
                }
              }secondLevelSngle.levelId = firstLevel[i].querySelector('div').getAttribute('id');secondLevelSngle.currLevel = secondLevelContent;
              secondLevelSngle.currLevelStatus = secondLevelStatus;nextLevel.push(secondLevelSngle);
            } else {
              currLevelStatus.push('colse');nextLevel.push(null);
            }data.nextLevel = nextLevel;
          }
        }data.levelId = levelId;data.currLevel = currLevel;data.currLevelStatus = currLevelStatus;
      }return data;
    }, doAction_uiControl41_VEx2r6: function (data, elem) {
      var eventType = data.eventType;var level = data.dataCustom.level;var index = data.dataCustom.index;var parentId = data.dataCustom.parentId;if (eventType == 'expand') {
        $(elem.querySelector('#' + parentId)).children('div')[index].querySelector('table').querySelectorAll('td')[level].click();
      }
    }, getTemplate_uiControl41_VEx2r6: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\t}\n  \n  expandData=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data: {\n          index: e.target.dataset.index,\n          parentId: e.target.dataset.parentId,\n          level: e.target.dataset.level\n        },\n        eventType:\'expand\'\n      })\n    }\n  }\n\n\n\trender() {\n\t\tvar data = this.props.customData||[];\n    var _this = this;\n    var currLevel = data.currLevel||[];\n    var nextLevel = data.nextLevel||[];\n    var currLevelStatus = data.currLevelStatus||[];\n\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t<div style={{\'padding\':\'10px 15px\',\'background\':\'#fff\'}}>\n          \n\t\t\t\t\t{currLevel.map((item, index) => {\n\t\t\t\t\t\tlet secondData = nextLevel[index];\n\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t<div  data-status={currLevelStatus[index]}>\n\t\t\t\t\t\t\t\t<span onClick={_this.expandData.bind(_this)} data-level=\'0\' data-parent-id={data.levelId}  data-index={index}>{item}</span>\n\t\t\t\t\t\t\t\t{currLevelStatus[index] === \'open\' && secondData !== undefined && secondData.currLevel.map((secItem, secIndex) => {\n\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t<div style={{\'padding\':\'0 15px\'}}>\n\t\t\t\t\t\t\t\t\t\t\t<span onClick={_this.expandData.bind(_this)} style={{\'color\':\'green\'}} data-level=\'1\' data-parent-id={secondData.levelId} data-index={secIndex}>{secItem}</span>\n\t\t\t\t\t\t\t\t\t\t\t{secondData.currLevelStatus[secIndex] === \'open\' && secondData.nextLevel[secIndex] !== undefined && secondData.nextLevel[secIndex].currLevel.map((thirdItem, thirdIndex) => {\n\t\t\t\t\t\t\t\t\t\t\t\treturn (\n                        \t<div style={{\'padding\':\'0 15px\'}}>\n                            <span onClick={_this.expandData.bind(_this)} style={{\'color\':\'red\'}} data-parent-id={secondData.nextLevel[secIndex].levelId}  data-index={thirdIndex}>{thirdItem}</span>\n                          </div>\n                        );\n\t\t\t\t\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t})}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t)\n\t\t\t\t\t})}\n\t\t\t\t</div>\n\t\t\t</div>);\n\t}\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\tvar _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n\t\t_this2.expandData = function (e) {\n\t\t\tvar handler = _this2.props.customHandler;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: {\n\t\t\t\t\t\tindex: e.target.dataset.index,\n\t\t\t\t\t\tparentId: e.target.dataset.parentId,\n\t\t\t\t\t\tlevel: e.target.dataset.level\n\t\t\t\t\t},\n\t\t\t\t\teventType: \'expand\'\n\t\t\t\t});\n\t\t\t}\n\t\t};\n\n\t\treturn _this2;\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar data = this.props.customData || [];\n\t\t\tvar _this = this;\n\t\t\tvar currLevel = data.currLevel || [];\n\t\t\tvar nextLevel = data.nextLevel || [];\n\t\t\tvar currLevelStatus = data.currLevelStatus || [];\n\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\t{ style: { \'padding\': \'10px 15px\', \'background\': \'#fff\' } },\n\t\t\t\t\tcurrLevel.map(function (item, index) {\n\t\t\t\t\t\tvar secondData = nextLevel[index];\n\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t{ \'data-status\': currLevelStatus[index] },\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t{ onClick: _this.expandData.bind(_this), \'data-level\': \'0\', \'data-parent-id\': data.levelId, \'data-index\': index },\n\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tcurrLevelStatus[index] === \'open\' && secondData !== undefined && secondData.currLevel.map(function (secItem, secIndex) {\n\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\t{ style: { \'padding\': \'0 15px\' } },\n\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\t{ onClick: _this.expandData.bind(_this), style: { \'color\': \'green\' }, \'data-level\': \'1\', \'data-parent-id\': secondData.levelId, \'data-index\': secIndex },\n\t\t\t\t\t\t\t\t\t\tsecItem\n\t\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t\tsecondData.currLevelStatus[secIndex] === \'open\' && secondData.nextLevel[secIndex] !== undefined && secondData.nextLevel[secIndex].currLevel.map(function (thirdItem, thirdIndex) {\n\t\t\t\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t\t\t\t{ style: { \'padding\': \'0 15px\' } },\n\t\t\t\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\t\t\t\'span\',\n\t\t\t\t\t\t\t\t\t\t\t\t{ onClick: _this.expandData.bind(_this), style: { \'color\': \'red\' }, \'data-parent-id\': secondData.nextLevel[secIndex].levelId, \'data-index\': thirdIndex },\n\t\t\t\t\t\t\t\t\t\t\t\tthirdItem\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t);\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control43_eGh0dX: function (elem) {},
    doAction_uiControl60_wpDSQE: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }
    },
    getTemplate_uiControl60_wpDSQE: function () {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CommonHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n  render(){\n    return (\n    \t<CommonHeader \n       data={{centerText:"\u5B50\u76EE\u5F55"}} \n       backIsShow = {true}\n        editIsShow={false}\n        rightText = \'\u4FDD\u5B58\'\n        back={(e)=>{\n          var handler = this.props.customHandler;\n          if(handler){\n            handler({\n              eventType:\'click\'\n            })\n          }\n        }}\n        />\n    )\t\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(_yspCustomComponents.CommonHeader, {\n        data: { centerText: "\u5B50\u76EE\u5F55" },\n        backIsShow: true,\n        editIsShow: false,\n        rightText: \'\\u4FDD\\u5B58\',\n        back: function back(e) {\n          var handler = _this2.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'click\'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);