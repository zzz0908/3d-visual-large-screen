import BaseController from "./base";
export default class HomeController extends BaseController {
  public async getList() {
    const { ctx } = this;
    try {
      const data = await ctx.service.list.getList();
      this.sendSuccess({ data });
    } catch (error) {
      console.log(error);
      this.sendFail({});
    }
  }
}
