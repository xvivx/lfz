const fs = require('fs');
const path = require('path');
const AliOss = require('ali-oss');

const oss = new AliOss(require('./oss-config'));

async function get(objName) {
  const { content } = await oss.get(objName);

  return content.toString('utf-8');
}

async function put(objName, data, acl = 'public-read') {
  var buffer;

  if (Buffer.isBuffer(data)) {
    buffer = data;
  } else if (typeof data === 'object') {
    buffer = Buffer.from(JSON.stringify(data, null, 2));
  } else {
    buffer = Buffer.from(String(data));
  }

  var ossResult = await withRetry(() =>
    ossClient.put(objName, buffer, {
      headers: {
        'x-oss-object-acl': acl,
      },
    })
  );

  var resp = (ossResult && ossResult.res) || {};

  if (resp.status === 200 || resp.status === 204) {
    return {
      status: `success`,
      name: ossResult.name,
    };
  } else {
    return Promise.reject({
      status: `error`,
      error: `调用OSS网络出错，状态码：${resp.status || `未知错误`}`,
    });
  }
}

async function upload(objName, stream) {
  var ossResult = await oss.putStream(objName, stream, {
    headers: {
      'x-oss-object-acl': `public-read`,
    },
  });

  var resp = (ossResult && ossResult.res) || {};

  if (resp.status === 200 || resp.status === 204) {
    return {
      status: `success`,
      name: ossResult.name,
    };
  } else {
    return Promise.reject({
      status: `error`,
      error: `调用OSS网络出错，状态码：${resp.status || `未知错误`}`,
    });
  }
}

function loopfile(entry, dirs) {
  const paths = fs.readdirSync(entry);

  paths.forEach(function (item) {
    const currentDir = entry + '/' + item;

    const stat = fs.statSync(currentDir);

    if (stat.isFile()) {
      dirs.push(currentDir);
    } else if (stat.isDirectory()) {
      loopfile(currentDir, dirs);
    }
  });

  return dirs;
}

async function deploy() {
  const entry = path.resolve('dist');
  const dirs = loopfile(entry, []);
  const promises = [];

  dirs.forEach((dir) => {
    promises.push(upload(dir.replace(entry + '/', ''), fs.createReadStream(dir)));
  });

  await Promise.all(promises);
  console.log(`发布完成, 请访问: http://www.laserform3d.com`);
}

deploy();
