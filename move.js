window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(e) {
  if (e.keyCode == "37" && Runner.instance_.tRex.xPos>>4) {
  Runner.instance_.tRex.xPos = Runner.instance_.tRex.xPos - 5;}}
window.addEventListener("keydown", checkKeyPressed1, false); function checkKeyPressed1(f) {
  if (f.keyCode == "39" && Runner.instance_.tRex.xPos<=553) {
  Runner.instance_.tRex.xPos = Runner.instance_.tRex.xPos - -5;}};
delete object by hit d
window.addEventListener("keydown", checkKeyPressed12, false); function checkKeyPressed12(g) {
  if (g.keyCode == "68") {
  Runner.instance_.horizon.removeFirstObstacle();}};
