let header = document.getElementById("header");
let isPositive = true;
let opacity = 0; // 不透明度

function opacityAnimate() {
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

  header.style.opacity = opacity;
}

// 300ミリ秒ごとに opacityAnimate 関数を実行する
setInterval(opacityAnimate, 300);

