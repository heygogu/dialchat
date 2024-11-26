module.exports = {

"[next]/internal/font/google/rubik_f324d9b6.module.css [app-rsc] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "className": "rubik_f324d9b6-module__CzX6SG__className",
});

})()),
"[next]/internal/font/google/rubik_f324d9b6.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$rubik_f324d9b6$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/rubik_f324d9b6.module.css [app-rsc] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$rubik_f324d9b6$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'__Rubik_f324d9', '__Rubik_Fallback_f324d9'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$rubik_f324d9b6$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$rubik_f324d9b6$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;

})()),
"[project]/auth.config.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@auth/core/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next-auth/providers/github.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@auth/core/providers/github.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const authConfig = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? ''
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            credentials: {
                email: {
                    type: 'email'
                },
                password: {
                    type: 'password'
                }
            },
            async authorize (credentials, req) {
                const user = {
                    id: '1',
                    name: 'John',
                    email: credentials?.email
                };
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user;
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    pages: {
        signIn: '/' //sigin page
    }
};
const __TURBOPACK__default__export__ = authConfig;

})()),
"[project]/auth.ts [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "auth": ()=>auth,
    "handlers": ()=>handlers,
    "signIn": ()=>signIn,
    "signOut": ()=>signOut
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/auth.config.ts [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const { auth, handlers, signOut, signIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);

})()),
"[project]/components/providers/Provider.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "GlobalProvider": ()=>GlobalProvider,
    "default": ()=>__TURBOPACK__default__export__,
    "useGlobalContext": ()=>useGlobalContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const GlobalProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GlobalProvider() from the server but GlobalProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/providers/Provider.tsx", "GlobalProvider");
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/providers/Provider.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/providers/Provider.tsx", "default");
const useGlobalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useGlobalContext() from the server but useGlobalContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/providers/Provider.tsx", "useGlobalContext");

})()),
"[project]/components/providers/Provider.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$Provider$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/components/providers/Provider.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$Provider$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/utils/henceforthApi.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// import { workload } from '@/assets/images/workload.png';
__turbopack_esm__({
    "API_ROOT": ()=>API_ROOT,
    "BUCKET_ROOT": ()=>BUCKET_ROOT,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superagent$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/superagent/lib/node/index.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const SuperagentPromise = __turbopack_require__("[project]/node_modules/superagent-promise/index.js [app-rsc] (ecmascript)");
const superagent = SuperagentPromise(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superagent$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], global.Promise);
const API_ROOT = "https://dial-ai.henceforthsolutions.com:3001/";
const BUCKET_ROOT = "https://raizestag.blob.core.windows.net";
// export const API_ROOT = "https://production.techraize.com:3000/";
// export const BUCKET_ROOT = "https://raizeprod.blob.core.windows.net";
const API_FILE_ROOT_MEDIUM = `${BUCKET_ROOT}/medium/`;
const API_FILE_ROOT_ORIGINAL = `${BUCKET_ROOT}/original/`;
const API_FILE_ROOT_SMALL = `${BUCKET_ROOT}/small/`;
const API_FILE_ROOT_AUDIO = `${BUCKET_ROOT}/audio/`;
const API_FILE_ROOT_VIDEO = `${BUCKET_ROOT}/video/`;
const API_FILE_ROOT_DOCUMENTS = `${BUCKET_ROOT}/documents/`;
const API_FILE_ROOT_DB_BACKUP = `${BUCKET_ROOT}/backup/`;
const API_FILE_ROOT_DOCS = `${BUCKET_ROOT}/docs/`;
const encode = encodeURIComponent;
const responseBody = (res)=>res.body;
let token = null;
const tokenPlugin = (req)=>{
    if (token) {
        req.set("Authorization", `Bearer ${token}`);
    }
};
const requests = {
    del: (url)=>superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    delMultiple: (url, body)=>superagent.del(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    get: (url)=>superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body)=>superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    patch: (url, body)=>superagent.patch(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body)=>superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    file: (url, key, file)=>superagent.post(`${API_ROOT}${url}`).attach(key, file).use(tokenPlugin).then(responseBody)
};
const Department = {
    add: (info)=>requests.post("departments", info),
    delete: (id)=>requests.del(`departments/${id}`),
    edit: (info, id)=>requests.patch(`departments/${id}`, info),
    request: (info)=>requests.post("departments/request", info),
    listing: (type)=>requests.get(type ? `departments?${type}` : `departments`),
    signUp: (info)=>requests.post("user/signUp", info),
    selectCompanyDepartment: (id, info)=>requests.patch(`departments/company-admin-department/${id}`, info),
    requestpatch: (id, info)=>requests.patch(`departments/request/${id}`, info)
};
const Alert_Activity = {
    add: (info)=>requests.post("departments", info),
    request: (info)=>requests.post("departments/request", info),
    listing: (type)=>requests.get(type ? `alert-activity?${type}` : `alert-activity`),
    markread: (id, info)=>requests.patch(`notification/read`, info),
    deleteAlert: (id, info)=>requests.patch(`alert/${id}`, info)
};
const Comment = {
    add: (id, info)=>requests.post(`process/comment/${id}`, info),
    listing: (id)=>requests.get(`process/comment/${id}`),
    update: (id, info)=>requests.patch(`process/comment/${id}`, info),
    doNothing: (id, info)=>requests.patch(`process/comment/do-nothing/${id}`, info),
    delete: (id)=>requests.del(`process/comment/${id}`)
};
const page = {
    add: (info)=>requests.post(`admin/pages`, info),
    listing: (q)=>requests.get(`admin/pages?type=${q}`),
    update: (id, info)=>requests.patch(`admin/pages/${id}`, info),
    doNothing: (id, info)=>requests.patch(`process/comment/do-nothing/${id}`, info),
    delete: (id)=>requests.del(`process/comment/${id}`)
};
const SuperAdmin = {
    login: (info)=>requests.post("admin/login", info),
    setupCompProfile: (info)=>requests.post("admin/company", info),
    getSystems: (search)=>requests.get(search ? `system?search=${search}` : "system?limit=200"),
    changePassword: (info)=>requests.put("admin/password", info),
    profile: (type)=>requests.get(type ? `admin/profile?${type}` : `admin/profile`),
    updateProfile: (info)=>requests.put("admin/profile", info),
    callListing: (q)=>requests.get(`admin/call${q ? `?${q}` : ""}`),
    dashboardCards: (type)=>requests.get(type ? `admin/dashboard?type=${type}` : "admin/dashboard"),
    getTranscription: (id)=>requests.get(`admin/call/${id}/transcript`),
    callDetail: (id)=>requests.get(`admin/call/${id}`),
    submitPhoneNumber: (info)=>requests.post(`twilio/send-call-admin`, info)
};
const Company = {
    add: (info)=>requests.post("admin/company", info),
    profile: ()=>requests.get("admin/company"),
    updateCompany: (id, info)=>requests.patch(`admin/company/${id}`, info),
    addmember: (id, info)=>requests.post(`admin/company/${id}/admins`, info)
};
const Team = {
    addTeamMates: (info)=>requests.post("user/teammates", info),
    deleteDeactivate: (info)=>requests.patch(`user/teammates/delete/deactivate`, info),
    add: (info)=>requests.post("admin/team", info),
    profile: ()=>requests.get("admin/company"),
    updateCompany: (id, info)=>requests.patch(`admin/company/${id}`, info),
    addTeamMember: (info)=>requests.post(`user/team-admin`, info),
    editTeamMember: (info, id)=>requests.patch(`user/teammates/access/profile/${id}`, info),
    teammatesList: (q)=>requests.get(`user/teammates${q ? `?${q}` : ""}`),
    teamMateDetails: (id)=>requests.get(`user/teammates/${id}`),
    deleteArchiev: (id, info)=>requests.patch(`user/teammate/process/${id}`, info)
};
const Systems = {
    get: (q)=>requests.get(`system${q ? `?${q}` : ""}`),
    create: (info)=>requests.post("system", info),
    update: (id, info)=>requests.patch(`system/${id}`, info),
    delete: (id)=>requests.del(`system/${id}`),
    getOne: (id)=>requests.get(`system/${id}`)
};
const Auth = {
    login: (info)=>requests.post("user/login", info),
    signUp: (info)=>requests.post("user/signUp", info),
    socialLogin: (info)=>requests.post("login", info),
    addDoc: (info)=>requests.post("user/ids", info),
    editDoc: (id, info)=>requests.put(`user/ids/${id}`, info),
    getDoc: ()=>requests.get(`user/ids`),
    checkEmail: (value)=>requests.get(`user/email/exist?email=${value}`),
    delDoc: (id)=>requests.del(`user/ids/${id}`),
    logout: ()=>requests.put("user/logout", {}),
    changePassword: (info)=>requests.put("admin/change-password", info),
    profile: ()=>requests.get(`user/profile`),
    forgotPassword: (value)=>requests.put("user/forget/password", value),
    resendOtp: (value)=>requests.post("user/resend/email/otp", value),
    resendOtpPhone: (value)=>requests.put("user/resend/phone/otp", value),
    verifyOtp: (info)=>requests.post("user/otp/verify", info),
    verifyEmail: (info)=>requests.post("user/verify/email", info),
    verifyPhone: (info)=>requests.post("user/verify/phone", info),
    resetPassword: (info)=>requests.put("user/reset/password", info),
    edit: (info)=>requests.put("user/profile", info)
};
const Common = {
    uploadFile: (key, file)=>requests.file(`uploads/file`, key, file),
    uploadFileMultiple: (key, file)=>requests.file(`Upload/do_spaces_file_upload_multiple`, key, file),
    dbBackup: ()=>requests.post(`admin/dbbackup/v1`, {}),
    listing: (q)=>requests.get(`user/homepage${q ? "?" + q : ""}`)
};
const Chat = {
    question: (info)=>requests.post("chat", info),
    list: (q)=>requests.get(`chat${q ? `?${q}` : ""}`),
    del: (id)=>requests.del(`chat/${id}`),
    delMultiple: (q)=>requests.del(`chat${q ? `?${q}` : ""}`)
};
const User = {
    dashboard: (q)=>requests.get(`user/dashbord${q ? `?${q}` : ""}`),
    workload: (q)=>requests.get(`user/work-load?type=${q}`),
    organization: (type)=>requests.get(`user/organization?type=${type}`),
    teammatesDetails: (id)=>requests.get(`user/teammates/${id}`),
    notificationList: (type)=>requests.get(`admin/notifications/settings?type=${type}`),
    notificationListUpdate: (info)=>requests.patch("admin/notifications/settings", info),
    previlege: (info)=>requests.get(`user/previlege?${info}`),
    update: (id, info)=>requests.patch(`user/teammates/access/profile/${id}`, info),
    alertAccept: (id, info)=>requests.patch(`user/alert/accept/reject/${id}`, info),
    scheduleUpdate: (id, info)=>requests.patch(`user/schedule/accept-reject/${id}`, info)
};
const Demo = {
    createProcess: (info)=>requests.post("defaut/process", info),
    createContent: (info)=>requests.post("defaut/image", info),
    updateContent: (id, info)=>requests.put(`defaut/process/${id}`, info),
    processList: ()=>requests.get(`defaut/process`),
    getContent: (id)=>requests.get(`defaut/image?_id=${id}`),
    getContentAll: (id)=>requests.get(`defaut/process/${id}`),
    updateVideoContent: (id, info)=>requests.patch(`defaut/process/${id}`, info)
};
const Process = {
    generateAI: (id, info)=>requests.post(`process/genrate-description/${id}`, info),
    create: (info)=>requests.post("process", info),
    getById: (id)=>requests.get(`process/${id}`),
    delete: (id)=>requests.del(`process/delete/${id}`),
    deleteMultiple: (items)=>requests.patch(`process/bulk/delete/archive`, items),
    flowChartUpdate: (id, payload)=>requests.patch(`process/update_flowchart/${id}`, payload),
    updateProcessAfterCreate: (id, info)=>requests.patch(`process/${id}`, info),
    processUpdate: (id, info)=>requests.patch(`process/details/${id}`, info),
    editProcess: (id, info)=>requests.patch(`process/${id}`, info),
    archieved: (id, info)=>requests.patch(`process/archive/${id}`, info),
    assign: (info)=>requests.patch(`process/assign`, info),
    assignProcess: (id, info)=>requests.post(`user/teammates/assign/processess/${id}`, info),
    processComplete: (id, info)=>requests.patch(`process/complete/${id}`, info),
    processUploadVideo: (id, info)=>requests.patch(`process/add-video-audio/${id}`, info),
    createContent: (info)=>requests.post("defaut/image", info),
    download: (info)=>requests.post("process/download", info),
    updateContent: (id, info)=>requests.put(`defaut/process/${id}`, info),
    userList: (type)=>requests.get(`user/teammates?filter=${type}`),
    userListSearch: (q)=>requests.get(`user/teammates${q ? `?${q}` : ""}`),
    processList: (q)=>requests.get(`process${q ? `?${q}` : ""}`),
    getContent: (id)=>requests.get(`defaut/image?_id=${id}`),
    getContentAll: (id)=>requests.get(`defaut/process/${id}`),
    activity: (id)=>requests.get(`process/activities
/${id}`),
    updateVideoContent: (id, info)=>requests.patch(`defaut/process/${id}`, info),
    importexport: (q)=>requests.get(`process/import-export?${q}`),
    getTriggers: ()=>requests.get(`user/processes/names`),
    shareInternalUsers: ()=>requests.get(`user/internal-external?type=INTERNAL`),
    shareExternalUsers: ()=>requests.get(`user/internal-external?type=EXTERNAL`)
};
const FILES = {
    audio: (filename)=>filename?.startsWith("http") ? filename : `${API_FILE_ROOT_AUDIO}${filename}`,
    video: (filename)=>filename?.startsWith("http") ? filename : `${API_FILE_ROOT_VIDEO}${filename}`,
    imageOriginal: (filename, alt)=>filename ? filename?.startsWith("http") ? filename : `${API_FILE_ROOT_ORIGINAL}${filename}` : alt,
    imageMedium: (filename, alt)=>filename ? filename?.startsWith("http") ? filename : `${API_FILE_ROOT_MEDIUM}${filename}` : alt,
    imageSmall: (filename, alt)=>filename ? filename?.startsWith("http") ? filename : `${API_FILE_ROOT_SMALL}${filename}` : alt,
    document: (filename, alt)=>filename ? filename?.startsWith("http") ? filename : `${API_FILE_ROOT_DOCUMENTS}${filename}` : alt
};
const henceforthApi = {
    Auth,
    Demo,
    Process,
    Company,
    Comment,
    Alert_Activity,
    page,
    User,
    Team,
    Chat,
    Department,
    API_ROOT,
    API_FILE_ROOT_DB_BACKUP,
    API_FILE_ROOT_SMALL,
    API_FILE_ROOT_MEDIUM,
    API_FILE_ROOT_DOCS,
    API_FILE_ROOT_ORIGINAL,
    API_FILE_ROOT_VIDEO,
    API_FILE_ROOT_DOCUMENTS,
    SuperAdmin,
    Common,
    BUCKET_ROOT,
    FILES,
    token,
    Systems,
    encode,
    setToken: (_token)=>{
        token = _token;
    }
};
const __TURBOPACK__default__export__ = henceforthApi;

})()),
"[project]/app/layout.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// app/layout.tsx
__turbopack_esm__({
    "default": ()=>RootLayout,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$rubik_f324d9b6$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/rubik_f324d9b6.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextjs$2d$toploader$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/nextjs-toploader/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$Provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/providers/Provider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$henceforthApi$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/henceforthApi.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hot-toast/dist/index.mjs [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
const metadata = {
    title: 'DIAL AI',
    description: 'Basic dashboard with Next.js and Shadcn'
};
async function RootLayout({ children }) {
    const cookieStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const accessToken = cookieStore.get("COOKIES_ADMIN_ACCESS_TOKEN")?.value;
    let userInfo = null;
    if (accessToken) {
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$henceforthApi$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].setToken(accessToken);
            const apiRes = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$henceforthApi$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].SuperAdmin.profile();
            userInfo = {
                ...apiRes.data,
                access_token: accessToken
            };
        } catch (error) {
            console.error('Error fetching user info:', error);
        // Consider redirecting to login or handling the error appropriately
        }
    }
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$rubik_f324d9b6$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].className,
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nextjs$2d$toploader$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    showSpinner: false
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$providers$2f$Provider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlobalProvider"], {
                    userInfo: userInfo,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                    fileName: "[project]/app/layout.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/app/layout.tsx [app-rsc] (ecmascript)"),
});

})()),
"[project]/app/not-found.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/not-found.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/not-found.tsx", "default");

})()),
"[project]/app/not-found.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$not$2d$found$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/app/not-found.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$not$2d$found$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/app/not-found.tsx [app-rsc] (ecmascript)"),
});

})()),
"[project]/app/profile/page.tsx (client proxy)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/profile/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/profile/page.tsx", "default");

})()),
"[project]/app/profile/page.tsx [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$page$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/app/profile/page.tsx (client proxy)");
"__TURBOPACK__ecmascript__hoisting__location__";
"TURBOPACK { transition: next-ecmascript-client-reference }";
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$profile$2f$page$2e$tsx__$28$client__proxy$29$__);

})()),
"[project]/app/profile/page.tsx [app-rsc] (ecmascript, Next.js server component)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    default: () => __turbopack_import__("[project]/app/profile/page.tsx [app-rsc] (ecmascript)"),
});

})()),
"[project]/.next-internal/server/app/profile/page/actions.js [app-rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

__turbopack_export_value__({});

}.call(this) }),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__3a6917._.js.map