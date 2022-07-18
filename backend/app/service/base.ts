import { Service } from "egg";
import path from "path";
import fs from "fs";
import process from "process";
/**
 * List Service
 */
export default class BaseService extends Service {
  createTable(name: string): any {
    const storageDir = path.join(process.cwd(), "mysql");
    if (!fs.existsSync(storageDir)) {
      fs.mkdir(storageDir);
      fs.chmod(storageDir, "777");
    }
    const mysqlTablePath = path.join(storageDir, `${name}.json`);

    if (!fs.existsSync(mysqlTablePath)) {
      fs.appendFileSync(mysqlTablePath, "[]");
    }
    return mysqlTablePath;
  }

  addData(name: string, data: any): void {
    const p = this.createTable(name);
    const sqlData = JSON.parse(`[${fs.readFileSync(p).toString()}]`);
    if (sqlData.length) {
      data.id = sqlData[sqlData.length - 1].id + 1;
    } else {
      data.id = 1;
    }
    sqlData.push(data);
    fs.writeFileSync(p, JSON.stringify(sqlData));
  }

  deleteData(name: string, id: number): void {
    const p = this.createTable(name);
    const sqlData = JSON.parse(`${fs.readFileSync(p).toString()}`);
    fs.writeFileSync(p, JSON.stringify(sqlData.filter((v) => v.id === id)));
  }

  getData(name: string, page: number, pageSize: number): void {
    const p = this.createTable(name);
    const data = JSON.parse(`${fs.readFileSync(p).toString()}`);
    return data.slice((page - 1) * pageSize, page * pageSize);
  }

  updateData(name: string, id: number, data: any) {
    const p = this.createTable(name);
    const sqlData = JSON.parse(`${fs.readFileSync(p).toString()}`);
    const i = sqlData.findIndex((v) => v.id === id);
    if (i > -1) {
      data.id = sqlData[i].id;
      sqlData[i] = data;
    }
    fs.writeFileSync(p, sqlData);
  }
}
