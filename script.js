function fruit() {
  document.getElementById('vegetable').style.display = 'none';
  document.getElementById('dryfruit').style.display = 'none';
  document.getElementById('fruits').style.display = 'flex';
}
function vegetable() {
  document.getElementById('fruits').style.display = 'none';
  document.getElementById('dryfruit').style.display = 'none';
  document.getElementById('vegetable').style.display = 'flex';
}
function dryfruit() {
  document.getElementById('fruits').style.display = 'none';
  document.getElementById('vegetable').style.display = 'none';
  document.getElementById('dryfruit').style.display = 'flex';
}
function alls() {
  document.getElementById('fruits').style.display = 'flex';
  document.getElementById('vegetable').style.display = 'flex';
  document.getElementById('dryfruit').style.display = 'flex';
}
