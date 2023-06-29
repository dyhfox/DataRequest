var baseUrl = "https://59.225.206.17:2080/submit";
var currentUrlType = ''
function postRequest(url, data, type = "POST") {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onload = function () {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        resolve(response);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    xhr.onerror = function () {
      reject(Error("Network Error"));
    };

    xhr.send(JSON.stringify(data));
  });
}

/**
 * 更新接口类型
 * @param {*} type 
 */
function updateType(type) {
  currentUrlType = type;
}

/**
 * 获取目录列表
 * @param {目录页} pageNo
 * @param {每页长度} pageSize
 * @returns
 */
async function getAllCata(pageNo, pageSize, title) {
  var data = {
    title: title,
    pageNum: pageNo,
    pageSize: pageSize,
  };
  var res = []
  await postRequest(baseUrl + "/" + currentUrlType + "/query", data).then((resMsg) => {
    if (resMsg.code === 200 && resMsg.data.length >= 0) {
      res = resMsg.data;
    }
  });

  return res;
}

async function addNewCata(cfg) {
  await postRequest(baseUrl + "/" + currentUrlType + "/add", cfg)
    .then((resMsg) => {
      if (resMsg.code === 200) {
        return true;
      }
    })
    .catch((err) => {
      return err;
    });
}

async function deleteCata(guid, id) {
  await postRequest(baseUrl + "/" + currentUrlType + "/delete", { guid: guid, id: id })
    .then((resMsg) => {
      if (resMsg.code === 200) {
        return true;
      }
    })
    .catch((err) => {
      return err;
    });
}

async function getOrgName(type) {
  var res = [];
  await postRequest(baseUrl + type, {}).then((resMsg) => {
    if (resMsg.code === 200) {
      res = resMsg.data;
    }
  })
  .catch((err) => {
    return err;
  });
  // console.log("orgList", res);
  return res;
}

function getDataSuppply() {}
