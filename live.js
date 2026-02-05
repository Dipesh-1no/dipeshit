/*
MANUAL SWITCH (SAFE & SIMPLE)

false = LIVE OFF (default)
true  = LIVE ON
*/

let isLive = false;   // mela ke din true kar dena (optional)

if(isLive){
  document.getElementById("videoBox").style.display = "block";
  document.getElementById("liveBadge").style.display = "inline-flex";
  document.getElementById("offlineBox").style.display = "none";
}