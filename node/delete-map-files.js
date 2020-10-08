/**
 * @description 实现这个方法，能够删除指定文件夹下的所有 `.map` 文件。
 * @param {string} p
 * @return {void}
 */
const deleteMapFiles = (p) => {
  // 请实现……
  console.log(p);
  const fs = require("fs");
  const path = require("path");
  let dirPath = path.join(__dirname, p);
  let files = [];

  //判断是否有这个路径，有就执行删除操作
  if (fs.existsSync(dirPath)) {
    files = fs.readdirSync(dirPath, { withFileTypes: true });
    // console.log(files)
    files.forEach((item) => {
      if (item.isDirectory()) {
        //如果为目录，遍历子目录
        deleteMapFiles(p + "/" + item.name);
      } else if (item.name.indexOf(".map") !== -1) {
          //如果文件名当中有.map存在，则删除这个文件
          const filePath=p+"/"+item.name
          fs.unlink(filePath, function(err) {
            if (err) {
              throw err;
            }
            console.log("文件:" + filePath + "删除成功！");
          });
        
      }
    });
  }
};

deleteMapFiles("./playground");

// * ------------------------------------------------

// * playground 文件夹目前的目录结构如下：

/*
playground
├── index.html
├── index.js
├── index.js.map
└── static
    ├── main.js
    ├── main.js.map
    ├── style.css
    └── style.css.map
*/

// * 调用 deleteMapFiles('./playground') ，将删除所有 map 文件
// * 然后文件结构应该如下：

/*
playground
├── index.html
├── index.js
└── static
    ├── main.js
    └── style.css
*/
