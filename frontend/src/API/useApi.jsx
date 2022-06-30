import { service } from "../services/axios.services";

class GetServiceApi {
  static async getAllPosts( limit, offset, search, category) {
    const response = await service.get("/product", {
      params: {
        limit: limit,
        offset: offset,
        name: search,
        category: category,
      }
    });
    return response;
  }
  static async getCategory() {
    const response = await service.get("/category");
    return response;
  }
}

export default GetServiceApi;