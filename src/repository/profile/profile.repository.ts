import { Axios } from "../../config/axios";

export class ProfileRepository {
  private Axios = Axios;

  async create(data: any) {
    return this.Axios.post("/profile", data);
  }

  async getByEmail(email: string) {
    return this.Axios.get(`/profile/`, { params: { email } });
  }
}
