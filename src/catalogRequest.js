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
            "guid": "0e9cc51f443b447ca29d95e8e6953714",
            "area": "四川省",
            "cataTitle": "fwefew",
            "itemName": "ggwgw",
            "applySituation": "fewfw",
            "fileName": "fewgwg",
            "rejectReason": "fww",
            "dataName": "grebe",
            "dataSource": "erbrb",
            "orgName": "市规划自然资源局",
            "userName": "成都市",
            "userCode": "12510000MB1C99058D",
            "nameCn": "efewfw",
            "isInList": 1,
            "applyUploaded": 1,
            "needFile": 1,
            "systemName": "fewfwe",
            "sharedWay": "0101",
            "updateCycle": "1",
            "contactPerson": "gweew",
            "contactPhone": "15608181234",
            "contactMail": "1231",
            "status": 1,
            "creatTime": "2023-06-29 11:31:33",
            "sLastUpdatetime": "2023-06-29 11:33:59",
            "slastUpdatetime": "2023-06-29 11:33:59"
        },
        {
            "guid": "18bbd3886c384d25b4b39388a22d15c8",
            "area": "四川省",
            "cataTitle": "测试3",
            "itemName": "测试3",
            "applySituation": "测试3",
            "fileName": "测试3",
            "rejectReason": "测试3",
            "dataName": "测试3",
            "dataSource": "测试3",
            "orgName": "生态环境部",
            "userName": "四川省大数据中心",
            "userCode": "12510000MB1C99058D",
            "nameCn": "测试3",
            "isInList": 1,
            "applyUploaded": 1,
            "needFile": 1,
            "systemName": "测试3",
            "sharedWay": "0101",
            "updateCycle": "1",
            "contactPerson": "男士",
            "contactPhone": "13522334455",
            "contactMail": "123456",
            "status": 1,
            "creatTime": "2023-07-03 02:51:26",
            "sLastUpdatetime": "2023-07-03 02:50:06",
            "slastUpdatetime": "2023-07-03 02:50:06"
        },
        {
            "guid": "9fb0b57837764eb8a09218985ad0c768",
            "area": "四川省",
            "cataTitle": "测试2",
            "itemName": "测试2",
            "applySituation": "测试2",
            "fileName": "测试2",
            "rejectReason": "测试1",
            "dataName": "测试2",
            "dataSource": "测试2",
            "orgName": "外交部",
            "userName": "四川省大数据中心",
            "userCode": "12510000MB1C99058D",
            "nameCn": "测试2",
            "isInList": 1,
            "applyUploaded": 1,
            "needFile": 1,
            "systemName": "测试2",
            "sharedWay": "0101",
            "updateCycle": "1",
            "contactPerson": "男士",
            "contactPhone": "13511122223",
            "contactMail": "123456",
            "status": 1,
            "creatTime": "2023-07-03 02:50:17",
            "sLastUpdatetime": "2023-07-03 02:48:58",
            "slastUpdatetime": "2023-07-03 02:48:58"
        },
        {
            "guid": "a8d6db2b1f354c359fa294a44899c63f",
            "area": "四川省",
            "cataTitle": "dadad",
            "itemName": "dqdada",
            "applySituation": "adad",
            "fileName": "dadad",
            "rejectReason": "dadad",
            "dataName": "dadad",
            "dataSource": "aadad",
            "orgName": "外交部",
            "userName": "四川省大数据中心",
            "userCode": "12510000MB1C99058D",
            "nameCn": "adadadad",
            "isInList": 1,
            "applyUploaded": 1,
            "needFile": 1,
            "systemName": "dadad",
            "sharedWay": "0101",
            "updateCycle": "1",
            "contactPerson": "dadadada",
            "contactPhone": "13000000000",
            "contactMail": "949d4a9d4@qq.com",
            "status": 1,
            "creatTime": "2023-07-03 02:45:25",
            "sLastUpdatetime": "2023-07-03 02:44:06",
            "slastUpdatetime": "2023-07-03 02:44:06"
        },
        {
            "guid": "ed36344374364bbaac64f812039e53ef",
            "area": "四川省",
            "cataTitle": "11111111",
            "itemName": "1111111",
            "applySituation": "1111111111",
            "fileName": "1111111111",
            "rejectReason": "11111111",
            "dataName": "11111111111",
            "dataSource": "111",
            "orgName": "发展改革委",
            "userName": "四川省大数据中心",
            "userCode": "12510000MB1C99058D",
            "nameCn": "11111111",
            "isInList": 1,
            "applyUploaded": 1,
            "needFile": 1,
            "systemName": "11111111",
            "sharedWay": "0101",
            "updateCycle": "1",
            "contactPerson": "女士",
            "contactPhone": "13522334466",
            "contactMail": "123456",
            "status": 1,
            "creatTime": "2023-07-03 02:56:24",
            "sLastUpdatetime": "2023-07-03 02:55:05",
            "slastUpdatetime": "2023-07-03 02:55:05"
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
