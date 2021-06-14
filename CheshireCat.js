let neko1 = document.getElementById("neko1");
let neko2 = document.getElementById("neko2");
let isPositive = true;
let opacity = 0; // 不透明度

function opacityNeko1() {
  if (isPositive) {
    opacity += 0.05;
  } else {
    opacity -= 0.05;
  }

  if (opacity > 1) {
    isPositive = false;
  } else if (opacity < 0) {
    isPositive = true;
  }

  neko1.style.opacity = opacity;
}

function opacityNeko2() {
  if (isPositive) {
    opacity += 0.05;
  } else {
    opacity -= 0.05;
  }

  if (opacity > 1) {
    isPositive = false;
  } else if (opacity < 0) {
    isPositive = true;
  }

  neko2.style.opacity = opacity;
}


// 1000ミリ秒ごとに opacityAnimate 関数を実行する
setInterval(opacityNeko1, 1000);
setInterval(opacityNeko2, 1000);
