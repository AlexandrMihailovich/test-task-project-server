"use strict";(self.webpackChunktest_project=self.webpackChunktest_project||[]).push([[9497],{50166:(Q,w,t)=>{t.r(w),t.d(w,{default:()=>le});var e=t(67294),o=t(27821),r=t(68547),U=t(97132),L=t(80831),D=t(11700),A=t.n(D),v=t(23724),T=t(78718),f=t.n(T),m=t(15482),p=t(185),P=t(75515),y=t(41580),N=t(67838),B=t(49066),X=t(29728),M=t(11276),c=t(74571),g=t(7681),Y=t(14087),G=t(91216),O=t(82562),$=t(25752),V=t(16364),C=t(8934),x=t(94123),J=t(85018),k=t(50592),q=t(48474),_=t(57557),ee=t.n(_);const te=async()=>{const{get:i}=(0,r.getFetchClient)(),{data:h}=await i("/admin/users/me");return h.data},ae=async i=>{const h=ee()(i,["confirmPassword","currentTheme"]),{put:E}=(0,r.getFetchClient)(),{data:b}=await E("/admin/users/me",h);return{...b.data,currentTheme:i.currentTheme}};var se=t(53209),ne=t(17405);const re=se.Ry().shape(ne.Rw);var K=t(38683);const oe=o.default.a`
  color: ${({theme:i})=>i.colors.primary600};
`,I=(0,o.default)(V.o)`
  ::-ms-reveal {
    display: none;
  }
`,Z=(0,o.default)($.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:i})=>i.colors.neutral600};
    }
  }
`,le=()=>{const[i,h]=(0,e.useState)(!1),[E,b]=(0,e.useState)(!1),[F,ie]=(0,e.useState)(!1),{changeLocale:de,localeNames:j}=(0,k.Z)(),{setUserDisplayName:ce}=(0,r.useAppInfos)(),me=(0,v.useQueryClient)(),{formatMessage:a}=(0,U.useIntl)(),{trackUsage:ue}=(0,r.useTracking)(),R=(0,r.useNotification)(),{lockApp:fe,unlockApp:pe}=(0,r.useOverlayBlocker)(),{notifyStatus:ge}=(0,Y.G)(),{currentTheme:he,themes:z,onChangeTheme:Ee}=(0,q.M1)();(0,r.useFocusWhenNavigate)();const{status:we,data:S}=(0,v.useQuery)("user",()=>te(),{onSuccess(){ge(a({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError(){R({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ve=we!=="success",W=(0,v.useMutation)(s=>ae(s),{async onSuccess(s){await me.invalidateQueries("user"),r.auth.setUserInfo(f()(s,["email","firstname","lastname","username","preferedLanguage"]));const l=s.username||(0,K.Pp)(s.firstname,s.lastname);ce(l),de(s.preferedLanguage),Ee(s.currentTheme),ue("didChangeMode",{newMode:s.currentTheme}),R({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})},onSettled(){pe()},refetchActive:!0}),{isLoading:Pe}=W,ye=async(s,{setErrors:l})=>{fe();const d=s.username||null;W.mutate({...s,username:d},{onError(H){const n=H?.response?.data;return n?.data?l(n.data):R({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Me=["currentTheme","email","firstname","lastname","username","preferedLanguage"],Se=f()({...S,currentTheme:he},Me);if(ve)return e.createElement(p.o,{"aria-busy":"true"},e.createElement(m.Helmet,{title:a({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(N.T,{title:a({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),e.createElement(B.D,null,e.createElement(r.LoadingIndicatorPage,null)));const Le=Object.keys(z).filter(s=>z[s]);return e.createElement(p.o,{"aria-busy":Pe},e.createElement(m.Helmet,{title:a({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),e.createElement(L.Formik,{onSubmit:ye,initialValues:Se,validateOnChange:!1,validationSchema:re,enableReinitialize:!0},({errors:s,values:l,handleChange:d,isSubmitting:H})=>e.createElement(r.Form,null,e.createElement(N.T,{title:S.username||(0,K.Pp)(S.firstname,S.lastname),primaryAction:e.createElement(X.z,{startIcon:e.createElement(J.Z,null),loading:H,type:"submit"},a({id:"global.save",defaultMessage:"Save"}))}),e.createElement(y.x,{paddingBottom:10},e.createElement(B.D,null,e.createElement(g.K,{spacing:6},e.createElement(y.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(g.K,{spacing:4},e.createElement(P.Z,{variant:"delta",as:"h2"},a({id:"global.profile",defaultMessage:"Profile"})),e.createElement(M.r,{gap:5},e.createElement(c.P,{s:12,col:6},e.createElement(r.GenericInput,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:s.firstname,onChange:d,value:l.firstname||"",type:"text",name:"firstname",required:!0})),e.createElement(c.P,{s:12,col:6},e.createElement(r.GenericInput,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:s.lastname,onChange:d,value:l.lastname||"",type:"text",name:"lastname"})),e.createElement(c.P,{s:12,col:6},e.createElement(r.GenericInput,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:s.email,onChange:d,value:l.email||"",type:"email",name:"email",required:!0})),e.createElement(c.P,{s:12,col:6},e.createElement(r.GenericInput,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:s.username,onChange:d,value:l.username||"",type:"text",name:"username"}))))),e.createElement(y.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(g.K,{spacing:4},e.createElement(P.Z,{variant:"delta",as:"h2"},a({id:"global.change-password",defaultMessage:"Change password"})),e.createElement(M.r,{gap:5},e.createElement(c.P,{s:12,col:6},e.createElement(I,{error:s.currentPassword?a({id:s.currentPassword,defaultMessage:s.currentPassword}):"",onChange:d,value:l.currentPassword||"",label:a({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:F?"text":"password",endAction:e.createElement(Z,{onClick:n=>{n.stopPropagation(),ie(u=>!u)},label:a(F?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},F?e.createElement(C.default,null):e.createElement(x.default,null))}))),e.createElement(M.r,{gap:5},e.createElement(c.P,{s:12,col:6},e.createElement(I,{error:s.password?a({id:s.password,defaultMessage:s.password}):"",onChange:d,value:l.password||"",label:a({id:"global.password",defaultMessage:"Password"}),name:"password",type:i?"text":"password",autoComplete:"new-password",endAction:e.createElement(Z,{onClick:n=>{n.stopPropagation(),h(u=>!u)},label:a(i?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},i?e.createElement(C.default,null):e.createElement(x.default,null))})),e.createElement(c.P,{s:12,col:6},e.createElement(I,{error:s.confirmPassword?a({id:s.confirmPassword,defaultMessage:s.confirmPassword}):"",onChange:d,value:l.confirmPassword||"",label:a({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:E?"text":"password",autoComplete:"new-password",endAction:e.createElement(Z,{onClick:n=>{n.stopPropagation(),b(u=>!u)},label:a(E?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},E?e.createElement(C.default,null):e.createElement(x.default,null))}))))),e.createElement(y.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(g.K,{spacing:4},e.createElement(g.K,{spacing:1},e.createElement(P.Z,{variant:"delta",as:"h2"},a({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})),e.createElement(P.Z,null,a({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:e.createElement(oe,{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"},a({id:"Settings.profile.form.section.experience.here",defaultMessage:"here"}))}))),e.createElement(M.r,{gap:5},e.createElement(c.P,{s:12,col:6},e.createElement(G.P,{label:a({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:a({id:"global.select",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:()=>{d({target:{name:"preferedLanguage",value:null}})},clearLabel:a({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:l.preferedLanguage,onChange:n=>{d({target:{name:"preferedLanguage",value:n}})}},Object.keys(j).map(n=>{const u=j[n];return e.createElement(O.W,{value:n,key:n},u)}))),e.createElement(c.P,{s:12,col:6},e.createElement(G.P,{label:a({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:a({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:a({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:l.currentTheme,onChange:n=>{d({target:{name:"currentTheme",value:n}})}},Le.map(n=>e.createElement(O.W,{value:n,key:n},a({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:a({id:n,defaultMessage:A()(n)})}))))))))))))))}},17405:(Q,w,t)=>{t.d(w,{YM:()=>T,Rw:()=>L});var e=t(53209),o=t(68547);const r={firstname:e.Z_().trim().required(o.translatedErrors.required),lastname:e.Z_(),email:e.Z_().email(o.translatedErrors.email).lowercase().required(o.translatedErrors.required),username:e.Z_().nullable(),password:e.Z_().min(8,o.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Z_().min(8,o.translatedErrors.minLength).oneOf([e.iH("password"),null],"components.Input.error.password.noMatch").when("password",(f,m)=>f?m.required(o.translatedErrors.required):m)},L={...r,currentPassword:e.Z_().when(["password","confirmPassword"],(f,m,p)=>f||m?p.required(o.translatedErrors.required):p),preferedLanguage:e.Z_().nullable()},A={roles:e.IX().min(1,o.translatedErrors.required).required(o.translatedErrors.required)},T=e.Ry().shape({...r,isActive:e.Xg(),...A})}}]);
