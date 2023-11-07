"use strict";(self.webpackChunklemurian_adventure_guild=self.webpackChunklemurian_adventure_guild||[]).push([[1505],{4137:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(h,o(o({ref:e},d),{},{components:a})):n.createElement(h,o({ref:e},d))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},596:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(4137));const l={sidebar_position:1},o="Basics",i={unversionedId:"basics",id:"basics",title:"Basics",description:"DM Fiat",source:"@site/house_rules/basics.mdx",sourceDirName:".",slug:"/basics",permalink:"/wiki/house_rules/basics",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Extra Bonus Actions",permalink:"/wiki/house_rules/Combat_Rules/Extra_Bonus_Action_Options"}},s={},p=[{value:"DM Fiat",id:"dm-fiat",level:2},{value:"Portal",id:"portal",level:2},{value:"Rest Schedule",id:"rest-schedule",level:2},{value:"Character Creation",id:"character-creation",level:2},{value:"Levels",id:"levels",level:2},{value:"HP at Each Level",id:"hp-at-each-level",level:2}],d={toc:p},u="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basics"},"Basics"),(0,r.kt)("h2",{id:"dm-fiat"},"DM Fiat"),(0,r.kt)("p",null,"DMs reserve the right to adjust any rules at any time for the sake of fairness, balance, or fun."),(0,r.kt)("h2",{id:"portal"},"Portal"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"../archives/portal"},"portal")," is mysterious, but operates on its own mostly consistent set of rules. The portal opens at 7pm and closes promptly at 8:45pm real world time on game days. Portal usage out of game (i.e. via Discord) will have a posted limit on when the portal will close."),(0,r.kt)("h2",{id:"rest-schedule"},"Rest Schedule"),(0,r.kt)("p",null,"In between every session is a rest, with everybody on the same schedule. The pattern:"),(0,r.kt)("mermaid",{value:"graph TD;\n    s1[Session]-- Short Rest ---s2[Session];\n    s2-- Short Rest --- s3[Session];\n    s3--\x3elr(((Long Rest)));"}),(0,r.kt)("admonition",{title:"Character too burnt out?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Consider creating an alt character if playing all 3 sessions a long rest cycle.")),(0,r.kt)("h2",{id:"character-creation"},"Character Creation"),(0,r.kt)("p",null,"We accept any content from official Wizards of the Coast source books."),(0,r.kt)("p",null,"We do 4d6 keep highest 3 (4dkh3) 7 times keep 6. For example, if you rolled (4, ~3~, 5, 5), your stat total is 14 since you drop the 4. To roll stats, either roll in person or do the following in #dice-tower Discord channel ",(0,r.kt)("inlineCode",{parentName:"p"},"!rollstats"),"."),(0,r.kt)("admonition",{title:"Rolled low?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Standard Array is 72 total. If your stat total is less than 72, you can choose to use Standard Array instead.")),(0,r.kt)("h2",{id:"levels"},"Levels"),(0,r.kt)("p",null,"No experience is awarded in the game. Instead, experience is represented by paying gold which represents how you buy training time with experts in the guild. ",(0,r.kt)("a",{parentName:"p",href:"https://www.dndbeyond.com/sources/basic-rules/step-by-step-characters#XPandProficiencyBonusProgression"},"Experience Point table"),"."),(0,r.kt)("admonition",{title:"Experience is Accumulative",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Level 2 requires 300 xp and level 3 requires 900 xp, so the cost from 2->3 is 600 xp.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"Level up")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"Gold Cost")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"Level up")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"th"},"Gold Cost")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 to 2"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"10 to 11"),(0,r.kt)("td",{parentName:"tr",align:null},"18000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2 to 3"),(0,r.kt)("td",{parentName:"tr",align:null},"600"),(0,r.kt)("td",{parentName:"tr",align:null},"11 to 12"),(0,r.kt)("td",{parentName:"tr",align:null},"20000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3 to 4"),(0,r.kt)("td",{parentName:"tr",align:null},"1800"),(0,r.kt)("td",{parentName:"tr",align:null},"12 to 13"),(0,r.kt)("td",{parentName:"tr",align:null},"21500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4 to 5"),(0,r.kt)("td",{parentName:"tr",align:null},"3800"),(0,r.kt)("td",{parentName:"tr",align:null},"13 to 14"),(0,r.kt)("td",{parentName:"tr",align:null},"23000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5 to 6"),(0,r.kt)("td",{parentName:"tr",align:null},"7500"),(0,r.kt)("td",{parentName:"tr",align:null},"14 to 15"),(0,r.kt)("td",{parentName:"tr",align:null},"25000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6 to 7"),(0,r.kt)("td",{parentName:"tr",align:null},"9000"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7 to 8"),(0,r.kt)("td",{parentName:"tr",align:null},"11000"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8 to 9"),(0,r.kt)("td",{parentName:"tr",align:null},"14000"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9 to 10"),(0,r.kt)("td",{parentName:"tr",align:null},"16000"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"hp-at-each-level"},"HP at Each Level"),(0,r.kt)("p",null,"At first level, your character's HP is the maximum roll on your Hit Die + DON modifier as normal.\nAt every subsequent level, roll your new level's hit die.\nYou may then choose to take the result of your roll or choose to instead use the average of the roll rounded down.\nIn either case, add your CON modifier as normal."),(0,r.kt)("admonition",{title:"Example",type:"tip"},(0,r.kt)("h3",{parentName:"admonition",id:"conan-the-barbarian"},"Conan the Barbarian"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Rolls 1d12 and gets a 9."),(0,r.kt)("li",{parentName:"ol"},"Keeps this roll and adds his CON modifier of +3 for a total of +12HP."),(0,r.kt)("li",{parentName:"ol"},"This health is added to both his current and total HP.")),(0,r.kt)("h3",{parentName:"admonition",id:"squish-the-wizard"},"Squish the Wizard"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Rolls 1d6 and gets a 2."),(0,r.kt)("li",{parentName:"ol"},"Chooses to take the average rounded down of 3 instead, then adds his CON modifier of +0 to gain a total of +3HP."))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"There have been reported issues with DNDBeyond's HP calculator. ","[sic]","\nPlease double check your HP on DNDBeyond and if necessary use manual overrides or manipulations to make it correct in that system. Your character should only start with the max for your hit dice plus your CON bonus at level 1 (DNDBeyond will sometimes double the CON bonus)")))}m.isMDXComponent=!0}}]);