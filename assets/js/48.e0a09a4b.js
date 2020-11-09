(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{434:function(t,e,a){"use strict";a.r(e);var o=a(8),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"child-workflows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#child-workflows"}},[t._v("#")]),t._v(" Child workflows")]),t._v(" "),a("p",[a("code",[t._v("workflow.ExecuteChildWorkflow")]),t._v(" enables the scheduling of other "),a("Term",{attrs:{term:"workflow",show:"workflows"}}),t._v(" from within a "),a("Term",{attrs:{term:"workflow",show:"workflow"}}),t._v("'s\nimplementation. The parent "),a("Term",{attrs:{term:"workflow"}}),t._v(" has the ability to monitor and impact the lifecycle of the child\n"),a("Term",{attrs:{term:"workflow"}}),t._v(", similar to the way it does for an "),a("Term",{attrs:{term:"activity"}}),t._v(" that it invoked.")],1),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("cwo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ChildWorkflowOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do not specify WorkflowID if you want Cadence to generate a unique ID for the child execution.")]),t._v("\n    WorkflowID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BID-SIMPLE-CHILD-WORKFLOW"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ExecutionStartToCloseTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Minute "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nctx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithChildWorkflowOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\nfuture "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteChildWorkflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SimpleChildWorkflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" future"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    workflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SimpleChildWorkflow failed."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Let's take a look at each component of this call.")]),t._v(" "),a("p",[t._v("Before calling "),a("code",[t._v("workflow.ExecuteChildworkflow()")]),t._v(", you must configure "),a("code",[t._v("ChildWorkflowOptions")]),t._v(" for the\ninvocation. These options customize various execution timeouts, and are passed in by creating a child\ncontext from the initial context and overwriting the desired values. The child context is then passed\ninto the "),a("code",[t._v("workflow.ExecuteChildWorkflow()")]),t._v(" call. If multiple "),a("Term",{attrs:{term:"activity",show:"activities"}}),t._v(" are sharing the same option\nvalues, then the same context instance can be used when calling "),a("code",[t._v("workflow.ExecuteChildworkflow()")]),t._v(".")],1),t._v(" "),a("p",[t._v("The first parameter in the call is the required "),a("code",[t._v("cadence.Context")]),t._v(" object. This type is a copy of\n"),a("code",[t._v("context.Context")]),t._v(" with the "),a("code",[t._v("Done()")]),t._v(" method returning "),a("code",[t._v("cadence.Channel")]),t._v(" instead of the native Go "),a("code",[t._v("chan")]),t._v(".")]),t._v(" "),a("p",[t._v("The second parameter is the function that we registered as a "),a("Term",{attrs:{term:"workflow"}}),t._v(" function. This parameter can\nalso be a string representing the fully qualified name of the "),a("Term",{attrs:{term:"workflow"}}),t._v(" function. The benefit of this\nis that when you pass in the actual function object, the framework can validate "),a("Term",{attrs:{term:"workflow"}}),t._v(" parameters.")],1),t._v(" "),a("p",[t._v("The remaining parameters are passed to the "),a("Term",{attrs:{term:"workflow"}}),t._v(" as part of the call. In our example, we have a\nsingle parameter: "),a("code",[t._v("value")]),t._v(". This list of parameters must match the list of parameters declared by\nthe "),a("Term",{attrs:{term:"workflow"}}),t._v(" function.")],1),t._v(" "),a("p",[t._v("The method call returns immediately and returns a "),a("code",[t._v("cadence.Future")]),t._v(". This allows you to execute more\ncode without having to wait for the scheduled "),a("Term",{attrs:{term:"workflow"}}),t._v(" to complete.")],1),t._v(" "),a("p",[t._v("When you are ready to process the results of the "),a("Term",{attrs:{term:"workflow"}}),t._v(", call the "),a("code",[t._v("Get()")]),t._v(" method on the returned future\nobject. The parameters to this method is the "),a("code",[t._v("ctx")]),t._v(" object we passed to the\n"),a("code",[t._v("workflow.ExecuteChildWorkflow()")]),t._v(" call and an output parameter that will receive the output of the\n"),a("Term",{attrs:{term:"workflow"}}),t._v(". The type of the output parameter must match the type of the return value declared by the\n"),a("Term",{attrs:{term:"workflow"}}),t._v(" function. The "),a("code",[t._v("Get()")]),t._v(" method will block until the "),a("Term",{attrs:{term:"workflow"}}),t._v(" completes and results are\navailable.")],1),t._v(" "),a("p",[t._v("The "),a("code",[t._v("workflow.ExecuteChildWorkflow()")]),t._v(" function is similar to "),a("code",[t._v("workflow.ExecuteActivity()")]),t._v(". All of the\npatterns described for using "),a("code",[t._v("workflow.ExecuteActivity()")]),t._v(" apply to the "),a("code",[t._v("workflow.ExecuteChildWorkflow()")]),t._v("\nfunction as well.")]),t._v(" "),a("p",[t._v("When a parent "),a("Term",{attrs:{term:"workflow"}}),t._v(" is cancelled by the user, the child "),a("Term",{attrs:{term:"workflow"}}),t._v(" can be cancelled or abandoned\nbased on a configurable child policy.")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);