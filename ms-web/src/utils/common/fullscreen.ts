// ts添加document类型
declare const document: any

// 进入全屏方法
const enterFullscreen = () => {
  const docElm = document.documentElement;
  // W3C
  if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
  }
  // 火狐
  else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
  }
  // 谷歌
  else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
  }
  // IE
  else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
  }
};
// 退出全屏方法
const exitFullscreen = () => {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
  }
};
  // 判断当前页面是否全屏

const getFullScreenStatus = () => {
  return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen;
};

// 全屏切换
const toggle = (docElm) => {
  console.log(docElm)
  if (!getFullScreenStatus()) {
      // 全屏
      enterFullscreen(docElm);
  } else {
      // 取消全屏
      exitFullscreen();
  }
};

export {
  enterFullscreen,
  exitFullscreen,
  getFullScreenStatus,
  toggle
}