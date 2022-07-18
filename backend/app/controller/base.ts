import { Controller } from "egg";
export default class BaseController extends Controller {
  constructor(ctx) {
    super(ctx);
  }
  /*
   * return success
   * @params: object data
   * @params: string msg
   * @return: object { success, code, msg, data }
   */
  sendSuccess(data: any = {}) {
    const { ctx } = this;
    ctx.body = {
      success: true,
      status: 0,
      message: "success",
      data: null,
      ...data,
    };
    ctx.status = 200;
  }

  /*
   * return fail
   * @params: object data
   * @params: string msg
   * @return: object { success, code, msg, data }
   */
  sendFail(data: any = {}) {
    const { ctx } = this;
    ctx.body = {
      success: false,
      ...data,
    };
    ctx.status = 200;
  }

  /*
   * return sendData
   * @params: object data
   * @params: string msg
   * @return: object { success, code, msg, data }
   */
  sendData(data: any) {
    const { ctx } = this;
    ctx.body = data;
    ctx.status = 200;
  }
}
