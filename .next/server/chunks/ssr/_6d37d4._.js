module.exports = {

"[project]/utils/henceforthApi.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// import { workload } from '@/assets/images/workload.png';
__turbopack_esm__({
    "API_ROOT": ()=>API_ROOT,
    "BUCKET_ROOT": ()=>BUCKET_ROOT,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superagent$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/superagent/lib/node/index.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const SuperagentPromise = __turbopack_require__("[project]/node_modules/superagent-promise/index.js [app-ssr] (ecmascript)");
const superagent = SuperagentPromise(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superagent$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], global.Promise);
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
    submitPhoneNumber: (info)=>requests.post(`twilio/send-call-admin`, info),
    sendMessage: (info)=>requests.post(`chat`, info),
    submitChatProfile: (id, info)=>requests.put(`chat/${id}/user-detail`, info)
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
"[project]/components/providers/Provider.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// components/providers/Provider.tsx
__turbopack_esm__({
    "GlobalProvider": ()=>GlobalProvider,
    "default": ()=>__TURBOPACK__default__export__,
    "useGlobalContext": ()=>useGlobalContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/nookies/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$henceforthApi$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/henceforthApi.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
const GlobalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function GlobalProvider({ children, userInfo: initialUserInfo }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userInfo, setUserInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialUserInfo || null);
    console.log(initialUserInfo, "initialUserInfo");
    if (userInfo?.access_token) {
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$henceforthApi$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].setToken(userInfo.access_token);
    }
    const stopSpaceEnter = (event)=>{
        if (event.target instanceof HTMLInputElement) {
            if (event.target.value.length === 0 && event.key === " ") {
                event.preventDefault();
                return false;
            }
            // Allow only letters and space
            if (!/^[a-zA-Z ]$/.test(event.key) && !event.ctrlKey && !event.metaKey) {
                event.preventDefault();
                return false;
            }
        }
        return true;
    };
    const formatDuration = (seconds)=>{
        // Handle invalid or negative inputs
        if (seconds < 0 || isNaN(seconds)) return '0 s';
        // Define time units
        const units = [
            {
                name: 'd',
                seconds: 86400
            },
            {
                name: 'h',
                seconds: 3600
            },
            {
                name: 'm',
                seconds: 60
            },
            {
                name: 's',
                seconds: 1
            }
        ];
        // Find the appropriate unit and calculate
        for (const unit of units){
            if (seconds >= unit.seconds) {
                const value = Math.floor(seconds / unit.seconds);
                const remainder = seconds % unit.seconds;
                // Construct the primary unit part
                let result = `${value} ${unit.name}`;
                // Add secondary unit if there's a significant remainder
                if (unit.name !== 's' && remainder > 0) {
                    const nextUnit = units[units.indexOf(unit) + 1];
                    const nextValue = Math.floor(remainder / nextUnit.seconds);
                    if (nextValue > 0) {
                        result += ` ${nextValue} ${nextUnit.name}`;
                    }
                }
                return result;
            }
        }
        return '0 s';
    };
    const success = (message)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success(message, {
            duration: 2000,
            style: {
                fontSize: "13px",
                backgroundColor: "#fff"
            }
        });
    };
    // Error toast
    const error = (err)=>{
        const errorBody = err?.response?.body;
        const message = typeof err === "string" ? err : errorBody?.message || "An error occurred";
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error(message, {
            duration: 2000,
            style: {
                fontSize: "13px",
                backgroundColor: "#fff"
            }
        });
    };
    // Toast object
    const Toast = {
        success,
        error
    };
    const logout = async ()=>{
        console.log("fgjfvjdvjjhvcjhdsksj");
        setUserInfo(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nookies$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["destroyCookie"])(null, "COOKIES_ADMIN_ACCESS_TOKEN", {
            path: "/"
        });
        router.replace("/");
    };
    const getProfile = async ()=>{
        try {
            const apiRes = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$henceforthApi$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].SuperAdmin.profile();
            setUserInfo(apiRes?.data);
        } catch (error) {
            console.error('Profile fetch error:', error);
        }
    };
    const contextValue = {
        logout,
        setUserInfo,
        userInfo,
        stopSpaceEnter,
        getProfile,
        formatDuration,
        Toast
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/providers/Provider.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function useGlobalContext() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
}
const __TURBOPACK__default__export__ = GlobalProvider;

})()),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=_6d37d4._.js.map