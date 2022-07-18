import service from "@/utils/http";

const baseUrl = "/list/";

const listApi = {
  get3dList: (params: any) => service.post(`${baseUrl}getList`, { ...params }),
};
export default listApi;
