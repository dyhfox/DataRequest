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
  var res = [
        {
            "guid": 1,
            "area": "四川",
            "cataTitle": "疫情共享",
            "orgName": "外交部",
            "sharedType": "1",
            "id": 6,
            "itemName": "传达啊擦大大111",
            "applySituation": "传达啊擦大大",
            "fileName": "传达啊擦大大",
            "rejectReason": "dadadada",
            "dataName": "传达啊擦大大",
            "dataSource": "传达啊擦大大",
            "userName": "成都市",
            "userCode": "116100000233",
            "nameCn": "大大大，大大大，大大大，阿发发发",
            "isInList": 1,
            "applyUploaded": 1,
            "needFile": 1,
            "systemName": "传达啊擦大大",
            "sharedWay": "0102",
            "updateCycle": "2",
            "contactPerson": "张三",
            "contactPhone": "13000000000",
            "contactMail": "9049134141@qq.com",
            "status": 1,
            "creatTime": "2023-06-29 14:49:34",
            "sLastUpdatetime": "2023-06-29 14:52:00",
            "slastUpdatetime": "2023-06-29 14:52:00"
        },
        {
            "guid": 2,
            "area": "四川",
            "cataTitle": "海外领事认证信息",
            "orgName": "外交部",
            "sharedType": "1",
            "id": null,
            "itemName": null,
            "applySituation": null,
            "fileName": null,
            "rejectReason": null,
            "dataName": null,
            "dataSource": null,
            "userName": null,
            "userCode": null,
            "nameCn": null,
            "isInList": null,
            "applyUploaded": null,
            "needFile": null,
            "systemName": null,
            "sharedWay": null,
            "updateCycle": null,
            "contactPerson": null,
            "contactPhone": null,
            "contactMail": null,
            "status": 0,
            "creatTime": null,
            "sLastUpdatetime": null,
            "slastUpdatetime": null
        },
        {
            "guid": 3,
            "area": "四川",
            "cataTitle": "海外安全提醒信息",
            "orgName": "外交部",
            "sharedType": "1",
            "id": null,
            "itemName": null,
            "applySituation": null,
            "fileName": null,
            "rejectReason": null,
            "dataName": null,
            "dataSource": null,
            "userName": null,
            "userCode": null,
            "nameCn": null,
            "isInList": null,
            "applyUploaded": null,
            "needFile": null,
            "systemName": null,
            "sharedWay": null,
            "updateCycle": null,
            "contactPerson": null,
            "contactPhone": null,
            "contactMail": null,
            "status": 0,
            "creatTime": null,
            "sLastUpdatetime": null,
            "slastUpdatetime": null
        },
        {
            "guid": 4,
            "area": "四川",
            "cataTitle": "海外安全事件信息",
            "orgName": "外交部",
            "sharedType": "1",
            "id": null,
            "itemName": null,
            "applySituation": null,
            "fileName": null,
            "rejectReason": null,
            "dataName": null,
            "dataSource": null,
            "userName": null,
            "userCode": null,
            "nameCn": null,
            "isInList": null,
            "applyUploaded": null,
            "needFile": null,
            "systemName": null,
            "sharedWay": null,
            "updateCycle": null,
            "contactPerson": null,
            "contactPhone": null,
            "contactMail": null,
            "status": 0,
            "creatTime": null,
            "sLastUpdatetime": null,
            "slastUpdatetime": null
        },
        {
            "guid": 5,
            "area": "四川",
            "cataTitle": "领事证件",
            "orgName": "外交部",
            "sharedType": "2",
            "id": null,
            "itemName": null,
            "applySituation": null,
            "fileName": null,
            "rejectReason": null,
            "dataName": null,
            "dataSource": null,
            "userName": null,
            "userCode": null,
            "nameCn": null,
            "isInList": null,
            "applyUploaded": null,
            "needFile": null,
            "systemName": null,
            "sharedWay": null,
            "updateCycle": null,
            "contactPerson": null,
            "contactPhone": null,
            "contactMail": null,
            "status": 0,
            "creatTime": null,
            "sLastUpdatetime": null,
            "slastUpdatetime": null
        },
        {
            "guid": 6,
            "area": "四川",
            "cataTitle": "平安丝路",
            "orgName": "外交部",
            "sharedType": "2",
            "id": null,
            "itemName": null,
            "applySituation": null,
            "fileName": null,
            "rejectReason": null,
            "dataName": null,
            "dataSource": null,
            "userName": null,
            "userCode": null,
            "nameCn": null,
            "isInList": null,
            "applyUploaded": null,
            "needFile": null,
            "systemName": null,
            "sharedWay": null,
            "updateCycle": null,
            "contactPerson": null,
            "contactPhone": null,
            "contactMail": null,
            "status": 0,
            "creatTime": null,
            "sLastUpdatetime": null,
            "slastUpdatetime": null
        },
        {
            "guid": 7,
            "area": "四川",
            "cataTitle": "海外安全提醒",
            "orgName": "外交部",
            "sharedType": "2",
            "id": null,
            "itemName": null,
            "applySituation": null,
            "fileName": null,
            "rejectReason": null,
            "dataName": null,
            "dataSource": null,
            "userName": null,
            "userCode": null,
            "nameCn": null,
            "isInList": null,
            "applyUploaded": null,
            "needFile": null,
            "systemName": null,
            "sharedWay": null,
            "updateCycle": null,
            "contactPerson": null,
            "contactPhone": null,
            "contactMail": null,
            "status": 0,
            "creatTime": null,
            "sLastUpdatetime": null,
            "slastUpdatetime": null
        },
        {
            "guid": 8,
            "area": "四川",
            "cataTitle": "全国综合农业区划",
            "orgName": "发展改革委",
            "sharedType": "2",
            "id": null,
            "itemName": null,
            "applySituation": null,
            "fileName": null,
            "rejectReason": null,
            "dataName": null,
            "dataSource": null,
            "userName": null,
            "userCode": null,
            "nameCn": null,
            "isInList": null,
            "applyUploaded": null,
            "needFile": null,
            "systemName": null,
            "sharedWay": null,
            "updateCycle": null,
            "contactPerson": null,
            "contactPhone": null,
            "contactMail": null,
            "status": 0,
            "creatTime": null,
            "sLastUpdatetime": null,
            "slastUpdatetime": null
        },
        {
            "guid": 9,
            "area": "四川",
            "cataTitle": "全国气候区划综合信息",
            "orgName": "发展改革委",
            "sharedType": "2",
            "id": null,
            "itemName": null,
            "applySituation": null,
            "fileName": null,
            "rejectReason": null,
            "dataName": null,
            "dataSource": null,
            "userName": null,
            "userCode": null,
            "nameCn": null,
            "isInList": null,
            "applyUploaded": null,
            "needFile": null,
            "systemName": null,
            "sharedWay": null,
            "updateCycle": null,
            "contactPerson": null,
            "contactPhone": null,
            "contactMail": null,
            "status": 0,
            "creatTime": null,
            "sLastUpdatetime": null,
            "slastUpdatetime": null
        },
        {
            "guid": 10,
            "area": "四川",
            "cataTitle": "全国森林区划信息库",
            "orgName": "发展改革委",
            "sharedType": "2",
            "id": null,
            "itemName": null,
            "applySituation": null,
            "fileName": null,
            "rejectReason": null,
            "dataName": null,
            "dataSource": null,
            "userName": null,
            "userCode": null,
            "nameCn": null,
            "isInList": null,
            "applyUploaded": null,
            "needFile": null,
            "systemName": null,
            "sharedWay": null,
            "updateCycle": null,
            "contactPerson": null,
            "contactPhone": null,
            "contactMail": null,
            "status": 0,
            "creatTime": null,
            "sLastUpdatetime": null,
            "slastUpdatetime": null
        }
    ]

  // await postRequest(baseUrl + "/" + currentUrlType + "/query", data).then((resMsg) => {
  //   if (resMsg.code === 200 && resMsg.data.length >= 0) {
  //     res = resMsg.data;
  //   }
  // });

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

async function updateNewCata(cfg) {
  await postRequest(baseUrl + "/main/update", cfg)
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
