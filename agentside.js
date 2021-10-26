console.log("agentside.js loaded");

function loadAgentViewer() {
  event.preventDefault();
  var sessionKey = document.getElementById("sessionKey").value;
  var loginkey = document.getElementById("loginkey").value;
  var partnerid = document.getElementById("partnerid").value;
  var partneruserid = document.getElementById("partneruserid").value;
  var site = `https://www.glance.net/agentjoin/AgentView.aspx?partnerid=${partnerid}&partneruserid=${partneruserid}&loginkey=${loginkey}&SessionKey=${sessionKey}&Wait=1`;
  document.getElementsByName("agentframe")[0].src = site;
}

window.addEventListener("load", event => {
  document.getElementById("Submit").addEventListener("click", loadAgentViewer);
});
