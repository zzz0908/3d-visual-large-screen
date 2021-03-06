import { Application } from "egg";
import listApi from "./routers/list";
export default (app: Application) => {
  const { controller, router } = app;

  router.get("/", controller.home.index);

  listApi(app);
};
