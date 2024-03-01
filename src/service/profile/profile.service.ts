import { ProfileRepository } from "../../repository/profile/profile.repository";

export type Profile = {
  id?: number;
  name: string;
  email: string;
  password: string;
};
export class ProfileService {
  private repository: ProfileRepository;

  constructor(repository: ProfileRepository) {
    this.repository = repository;
  }

  async create(data: Profile) {
    return this.repository.create(data);
  }

  async getByEmail(email: string) {
    return this.repository.getByEmail(email);
  }
}
