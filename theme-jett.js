ace.define("ace/theme/jett",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-jett";
exports.cssText = ".ace-jett .ace_gutter {\
background: #1c1d21;\
color: #686b78;\
}\
.ace-jett .ace_print-margin {\
width: 0px;\
}\
.ace-jett {\
background-color: #1c1d21;\
color: #cbcdd2;\
}\
.ace-jett .ace_cursor {\
color: #cbcdd2;\
}\
.ace-jett .ace_marker-layer .ace_selection {\
background: #2f3137;\
}\
.ace-jett.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #1c1d21;\
border-radius: 2px;\
}\
.ace-jett .ace_marker-layer .ace_step {\
background: #564d19;\
}\
.ace-jett .ace_marker-layer .ace_stack {\
background: #276526;\
}\
.ace-jett .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #65737e;\
}\
.ace-jett .ace_marker-layer .ace_active-line {\
background: #212227;\
}\
.ace-jett .ace_gutter-active-line {\
background-color: #212227;\
}\
.ace-jett .ace_marker-layer .ace_selected-word {\
border: 1px solid #4f5b66;\
}\
.ace-jett .ace_fold {\
background-color: #8fa1b3;\
border-color: #cbcdd2;\
}\
.ace-jett .ace_keyword {\
color: #78bd65;\
}\
.ace-jett .ace_keyword.ace_operator {\
color: #eb3d54;\
}\
.ace-jett .ace_keyword.ace_other.ace_unit {\
color: #ef7c2a;\
}\
.ace-jett .ace_constant {\
color: #ef7c2a;\
}\
.ace-jett .ace_constant.ace_numeric {\
color: #ef7c2a;\
}\
.ace-jett .ace_constant.ace_character.ace_escape {\
color: #ef7c2a;\
}\
.ace-jett .ace_support.ace_function {\
color: #eb3d54;\
}\
.ace-jett .ace_support.ace_class {\
color: #ffcb6b;\
}\
.ace-jett .ace_support.ace_type {\
color: #cbcdd2;\
}\
.ace-jett .ace_storage {\
color: #78bd65;\
}\
.ace-jett .ace_invalid.ace_illegal {\
color: #1c1d21;\
background-color: #bf616a;\
}\
.ace-jett .ace_string {\
color: #4fb4d8;\
}\
.ace-jett .ace_string.ace_regexp {\
color: #80cbc4;\
}\
.ace-jett .ace_comment {\
color: #686b78;\
}\
.ace-jett .ace_variable {\
color: #e5cd52;\
}\
.ace-jett .ace_meta.ace_tag {\
color: #eb3d54;\
}\
.ace-jett .ace_meta.ace_selector {\
color: #78bd65;\
}\
.ace-jett .ace_entity.ace_other.ace_attribute-name {\
color: #ffcb6b;\
}\
.ace-jett .ace_entity.ace_name.ace_function {\
color: #e5cd52;\
}\
.ace-jett .ace_entity.ace_name.ace_tag {\
color: #ff5370;\
}\
.ace-jett .ace_markup.ace_list {\
color: rgba(255, 83, 112, 1);\
}\
.ace-jett .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZGM6c3ViamVjdD4KICAgICAgICAgICAgPHJkZjpCYWcvPgogICAgICAgICA8L2RjOnN1YmplY3Q+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE2LTAyLTE3VDAwOjAyOjgwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5QaXhlbG1hdG9yIDMuNC4yPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoedQbwAAAAEklEQVQIHWMwsXGrZ2JgZGgAAAkvAbkhTCViAAAAAElFTkSuQmCC) right repeat-y;\
}\
.ace-jett .ace_diff, .ace-jett .ace_diff.insert, .ace-jett .ace_diff.delete {\
border-color: #4f5b66 !important;\
background-color: rgba(79, 91, 102, 0.5) !important;\
}\
.ace-jett .ace_diff-connector {\
stroke: #4f5b66;\
fill: rgba(79, 91, 102, 0.6);\
}\
.ace_diff-gutter.ace-jett {\
background-color: #1c1d21 !important;\
border-right: 1px solid #464e5e !important;\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);

});                (function() {
                    ace.require(["ace/theme/jett"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            