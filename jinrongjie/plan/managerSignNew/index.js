(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control104_PuEuF8: function (elem) {},
    doAction_uiControl90_IPmdwU: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        $(elem).click();
      }
    },
    getTemplate_uiControl90_IPmdwU: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CommonHeader } from \'ysp-custom-components\';\nexport default class extends Component {\n\trender() {\n\t\tvar title = "\u516C\u6587\u5BA1\u6279\u5355";\n\t\treturn (\n\t\t\t<CommonHeader\n\t\t\t\tdata={{ centerText: title && title }}\n\t\t\t\tbackIsShow={true}\n\t\t\t\teditIsShow={true}\n\t\t\t\trightText=\'\u4FDD\u5B58\'\n\t\t\t\tsave={(e) => {\n\t\t\t\t\tvar handler = this.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: \'save1\'\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t}}\n\t\t\t\tback={(e) => {\n\t\t\t\t\tvar handler = this.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: \'click\'\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t}}\n\t\t\t/>\n\t\t)\n\t}\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class() {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar title = "\u516C\u6587\u5BA1\u6279\u5355";\n\t\t\treturn React.createElement(_yspCustomComponents.CommonHeader, {\n\t\t\t\tdata: { centerText: title && title },\n\t\t\t\tbackIsShow: true,\n\t\t\t\teditIsShow: true,\n\t\t\t\trightText: \'\\u4FDD\\u5B58\',\n\t\t\t\tsave: function save(e) {\n\t\t\t\t\tvar handler = _this2.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: \'save1\'\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tback: function back(e) {\n\t\t\t\t\tvar handler = _this2.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: \'click\'\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);