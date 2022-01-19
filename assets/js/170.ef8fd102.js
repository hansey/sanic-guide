(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{622:function(v,t,_){"use strict";_.r(t);var e=_(19),r=Object(e.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"策略-policies"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#策略-policies"}},[v._v("#")]),v._v(" 策略(Policies)")]),v._v(" "),_("h2",{attrs:{id:"版本号-versioning"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#版本号-versioning"}},[v._v("#")]),v._v(" 版本号(Versioning)")]),v._v(" "),_("p",[v._v("Sanic 使用 "),_("a",{attrs:{href:"https://calver.org/",target:"_blank",rel:"noopener noreferrer"}},[v._v("calendar versioning"),_("OutboundLink")],1),v._v('，别名 "calver"。具体使用如下格式：')]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("YY.MM.MICRO\n")])])]),_("p",[v._v("通常来说，版本号是以 "),_("code",[v._v("YY.MM")]),v._v(" 的格式来进行编排的，小版本号表示从 "),_("code",[v._v("0")]),v._v(" 开始的增量补丁。")]),v._v(" "),_("h2",{attrs:{id:"发行安排-release-schedule"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#发行安排-release-schedule"}},[v._v("#")]),v._v(" 发行安排(Release Schedule)")]),v._v(" "),_("p",[v._v("每年有 4 次预定发布：3月，6月，9月，12月。因此，每年发布 4 个版本："),_("code",[v._v("YY.3")]),v._v(", "),_("code",[v._v("YY.6")]),v._v(", "),_("code",[v._v("YY.9")]),v._v(" 和 "),_("code",[v._v("YY.12")]),v._v("。")]),v._v(" "),_("p",[v._v("该发行安排提供:")]),v._v(" "),_("ul",[_("li",[v._v("可预测的发布节奏。")]),v._v(" "),_("li",[v._v("相对较短的开发期，允许定期发布功能。")]),v._v(" "),_("li",[v._v("受控制的 "),_("a",{attrs:{href:"#deprecation"}},[v._v("弃用")]),v._v(" 功能。")]),v._v(" "),_("li",[v._v("与年度 LTS 版保持一致的稳定性。")])]),v._v(" "),_("p",[v._v("我们还将年度发布周期与我们的治理模型结合使用，具体内容请查阅 "),_("RouterLink",{attrs:{to:"/zh/org/scope.html"}},[v._v("S.C.O.P.E.")]),v._v("。")],1),v._v(" "),_("h3",{attrs:{id:"长期支持版-v-临时版本-long-term-support-v-interim-releases"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#长期支持版-v-临时版本-long-term-support-v-interim-releases"}},[v._v("#")]),v._v(" 长期支持版 v 临时版本(Long term support v Interim releases)")]),v._v(" "),_("p",[v._v("Sanic 将在每年的 12 月发布一次长期支持版本（TLS 版本）TLS 版本会在 24个月内得到错误修复与安全更新。每年的 3 个临时发行版本每 3 个月发行一次，并且在后续版本发布之前一直受支持。")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("Version")]),v._v(" "),_("th",[v._v("LTS")]),v._v(" "),_("th",[v._v("Supported")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("21.9")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("✅")])]),v._v(" "),_("tr",[_("td",[v._v("21.6")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("21.3")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("20.12")]),v._v(" "),_("td",[v._v("2022-12 为止")]),v._v(" "),_("td",[v._v("✅")])]),v._v(" "),_("tr",[_("td",[v._v("20.9")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("20.6")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("20.3")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("19.12")]),v._v(" "),_("td",[v._v("2021-12 为止")]),v._v(" "),_("td",[v._v("☑️")])]),v._v(" "),_("tr",[_("td",[v._v("19.9")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("19.6")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("19.3")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("18.12")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("0.8.3")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("0.7.0")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("0.6.0")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("0.5.4")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("0.4.1")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("0.3.1")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("0.2.0")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])]),v._v(" "),_("tr",[_("td",[v._v("0.1.9")]),v._v(" "),_("td"),v._v(" "),_("td",[v._v("❌")])])])]),v._v(" "),_("p",[v._v("☑️ = 安全/错误 修复\n✅ = 长期支持")]),v._v(" "),_("h2",{attrs:{id:"弃用-deprecation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#弃用-deprecation"}},[v._v("#")]),v._v(" 弃用(Deprecation)")]),v._v(" "),_("p",[v._v("在一个特性被否决之前，或者在接口中引入突破性的变化之前，它应该被公开，并在两个发布周期中出现弃用警告。在LTS版本中不得有任何弃用行为。")]),v._v(" "),_("p",[v._v("绝对必要时，可能会在这些准则之外发生中断更新或功能删除的状况。这些情况应该很少见。例如，当没有替代方案来解决重大安全问题时，就可能发生这种情况。")])])}),[],!1,null,null,null);t.default=r.exports}}]);