import BaseService from "./base";

/**
 * List Service
 */
export default class List extends BaseService {
  mysql = "list";
  /**
   * getList
   * @param name - your name
   */
  public async getList(page: number = 1, pageSize: number = 10): Promise<any> {
    return this.getData(this.mysql, page, pageSize);
  }
}
