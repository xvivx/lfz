let bmapPromise: Promise<void>;

export async function loadbmap(): Promise<void> {
  if (window.BMap) {
    return;
  }

  if (bmapPromise) {
    return bmapPromise;
  }

  bmapPromise = new Promise((resolve) => {
    const mapscript = document.createElement('script');
    const windowscript = document.createElement('script');
    const csslink = document.createElement('link');

    csslink.rel = 'stylesheet';
    csslink.href = '//api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css';
    windowscript.src = '//api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.js';
    mapscript.src = '//api.map.baidu.com/api?v=2.0&callback=onBMapCallback&ak=HXzCTkEFIzSTuAR3OjkfiyLNGQ4iHfGv&$=1';

    const csslinkPromise = new Promise((resolve) => {
      csslink.onload = () => {
        resolve(undefined);
      };
    });
    const windowscriptPromise = new Promise((resolve) => {
      windowscript.onload = () => {
        resolve(undefined);
      };
    });

    const mapscriptPromise = new Promise((resolve) => {
      window.onBMapCallback = () => {
        document.body.appendChild(windowscript);

        resolve(undefined);
      };
    });

    mapscriptPromise.then(() => {
      Promise.all([windowscriptPromise, csslinkPromise]).then(() => {
        resolve();
      });
    });

    document.body.appendChild(csslink);
    document.body.appendChild(mapscript);
  });

  return bmapPromise;
}
