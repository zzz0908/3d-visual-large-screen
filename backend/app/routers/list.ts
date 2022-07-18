import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;
  // 查询列表
  router.post("/api-3d/list/getList", controller.list.getList);
};
