(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{437:function(t,e,n){"use strict";n.r(e);var a=n(8),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"continue-as-new"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#continue-as-new"}},[t._v("#")]),t._v(" Continue as new")]),t._v(" "),n("p",[n("Term",{attrs:{term:"workflow",show:"Workflows"}}),t._v(" that need to rerun periodically could naively be implemented as a big "),n("strong",[t._v("for")]),t._v(" loop with\na sleep where the entire logic of the "),n("Term",{attrs:{term:"workflow"}}),t._v(" is inside the body of the "),n("strong",[t._v("for")]),t._v(" loop. The problem\nwith this approach is that the history for that "),n("Term",{attrs:{term:"workflow"}}),t._v(" will keep growing to a point where it\nreaches the maximum size enforced by the service.")],1),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.javadoc.io/static/com.uber.cadence/cadence-client/2.7.9-alpha/com/uber/cadence/workflow/Workflow.html#continueAsNew-java.lang.Object...-",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("ContinueAsNew")]),n("OutboundLink")],1),t._v("\nis the low level construct that enables implementing such "),n("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" without the\nrisk of failures down the road. The operation atomically completes the current execution and starts\na new execution of the "),n("Term",{attrs:{term:"workflow"}}),t._v(" with the same "),n("strong",[n("Term",{attrs:{term:"workflow_ID"}})],1),t._v(". The new execution will not carry\nover any history from the old execution.")],1),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  activities"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello "')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Workflow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("continueAsNew")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);