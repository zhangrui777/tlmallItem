(function (win, ysp) {

  var utils = ysp.utils;
  ysp.customTemplateHelper = {};
  utils.extend(ysp.customTemplateHelper, {
    HeaderLeftbtn: function () {
      var selfTemplate = "// HeaderLeftbtn customTemplate \n// customTemplate.js \u662F\u53EF\u590D\u7528\u7684 React \u6A21\u677F\u7EC4\u4EF6\n// \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6A21\u677F\u4E2D\u8FDB\u884C\u8C03\u7528\n// \u8C03\u7528\u65B9\u5F0F\uFF1A\u5982\u7EC4\u4EF6\u540D\u79F0\u4E3ATest\uFF0Cvar Test = require('ysp-custom-components').Test;\nimport { Header, HeaderLeft } from 'ysp-interior-components';\nimport { back } from 'appRenderer';\nmodule.exports = React.createClass({\n  render: function() {\n    return (\n      <div className='HeaderTitle'>\n        <Header amStyle=\"primary\" title={this.props.title}>\n          <HeaderLeft>\n            <button amStyle=\"primary\" onClick={back}>\u8FD4\u56DE</button>\n          </HeaderLeft>\n        </Header>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nvar _appRenderer = require('appRenderer');\n\n// HeaderLeftbtn customTemplate \n// customTemplate.js \u662F\u53EF\u590D\u7528\u7684 React \u6A21\u677F\u7EC4\u4EF6\n// \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6A21\u677F\u4E2D\u8FDB\u884C\u8C03\u7528\n// \u8C03\u7528\u65B9\u5F0F\uFF1A\u5982\u7EC4\u4EF6\u540D\u79F0\u4E3ATest\uFF0Cvar Test = require('ysp-custom-components').Test;\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'HeaderTitle' },\n      React.createElement(\n        _yspInteriorComponents.Header,\n        { amStyle: 'primary', title: this.props.title },\n        React.createElement(\n          _yspInteriorComponents.HeaderLeft,\n          null,\n          React.createElement(\n            'button',\n            { amStyle: 'primary', onClick: _appRenderer.back },\n            '\\u8FD4\\u56DE'\n          )\n        )\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);