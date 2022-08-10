import{r as a,o as i,c as s,a as e,b as n,F as r,d as t,e as h}from"./app.7e250e46.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const d={},c=e("h1",{id:"android-usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#android-usage","aria-hidden":"true"},"#"),t(" Android Usage")],-1),u=e("blockquote",null,[e("p",null,[t("If you are currently using the Beta Safety Chrome extension, "),e("em",null,[e("strong",null,"disable it first")]),t(". Do not attempt to run both Beta Safety and Beta Protection extensions at once. Bad things will happen.")])],-1),p=e("p",null,"At this time the only platform and browser combination that's known to support Chrome extensions is Kiwi Browser on Android. That means you won't be able to use Beta Protection at all on iOS and it will only be active while browsing with Kiwi (after you've set it up).",-1),b=e("p",null,"It's also worth noting that the experience on Android is sub-optimal at best, and it's not a scenario the author provides official support for. You can give it a try but it will be slow, possibly flaky, and you'll be on your own if anything goes wrong.",-1),f=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),t(" Prerequisites")],-1),g=t("First off, make sure you have a censoring backend (i.e. "),_={href:"https://silveredgold.github.io/beta-censoring/",target:"_blank",rel:"noopener noreferrer"},m=t("Beta Censoring"),w=t(" or Beta Safety) running on a PC on your "),y=e("strong",null,"local",-1),x=t(" network. Follow the guides for your backend of choice to run the backend, but you can ignore any parts about loading extensions into Chrome/Kiwi since we'll be using Beta Protection for that part."),k=e("blockquote",null,[e("p",null,"You will need the IP address (or hostname) of the PC with the backend running for the next steps, so make sure you have that before proceeding")],-1),B=e("h2",{id:"download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download","aria-hidden":"true"},"#"),t(" Download")],-1),v=t("Download the extension package from the "),C={href:"https://github.com/silveredgold/beta-protection/releases",target:"_blank",rel:"noopener noreferrer"},P=t("GitHub Releases"),S=t(" page. You should download the "),I=e("strong",null,"beta-protection.crx",-1),R=t(" file from the Release, "),E=e("em",null,"not",-1),A=t(" the ZIP file. Remember where you downloaded the CRX file, for later on."),D=h('<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>In Kiwi, tap the main menu (in the top right) and choose Extensions. Ensure the Developer mode toggle at the top-right of the page is enabled and you should see a few extra buttons at the top of the page.</p><p>Tap on the <em>+ (from .zip/.crx/.user.js)</em> button at the top and navigate to the CRX file you downloaded in the last step. Beta Protection should appear in your extension list. Tap the toggle in the bottom right of its tile to enable the extension.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>At this point Beta Protection is running, but you still need to tell it where your backend is running. Still on the Extensions page, tap on the <em>Details</em> button for Beta Protection and scroll down to tap on <em>Extension options</em>. That will open the settings screen where you can tap on the <em>Backend Host</em> section to reveal the configutation for the backend. In the text box, enter the address for your backend of choice (see below).</p><p>Tap <em>Save and Reconnect</em> to save your new backend, then scroll up and tap on <em>Recheck</em> button under the Connection Status icon to check if your phone can reach the backend successfully. If so, you&#39;re ready to go! The &quot;popup&quot; menu will now be at the bottom of the Kiwi main menu and will open in a new tab where you can set the censoring mode(s) or open the full settings (with the button in the top right).</p><h3 id="beta-censoring" tabindex="-1"><a class="header-anchor" href="#beta-censoring" aria-hidden="true">#</a> Beta Censoring</h3><p>For Beta Censoring your address will generally be <code>http://&lt;YOUR-IP-ADDRESS-OR-NAME&gt;:2382</code>, subtituting in the address/hostname of the PC with the Beta Censoring server running on it. If you check the server&#39;s web interface, the hostname will be shown at the top of the page header.</p><h3 id="beta-safety" tabindex="-1"><a class="header-anchor" href="#beta-safety" aria-hidden="true">#</a> Beta Safety</h3><p>For Beta Safety, your address will be <code>ws://&lt;YOUR-IP-ADDRESS-OR-NAME&gt;:8090/ws</code>, substituting in the address/hostname of the PC with Beta Safety running on it.</p>',10);function q(T,F){const o=a("ExternalLinkIcon");return i(),s(r,null,[c,u,p,b,f,e("p",null,[g,e("a",_,[m,n(o)]),w,y,x]),k,B,e("p",null,[v,e("a",C,[P,n(o)]),S,I,R,E,A]),D],64)}var O=l(d,[["render",q]]);export{O as default};