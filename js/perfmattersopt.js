function logCRP(){
	var e=window.performance.timing,
	t=e.domContentLoadedEventStart-e.domLoading,n=e.domComplete-e.domLoading;
	var r=document.getElementById("crp-stats");r.textContent="DCL: "+t+"ms, onload: "+n+"ms"}

	window.addEventListener("load",function(e){logCRP()})