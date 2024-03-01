import { Profile, ProfileService } from "../../service/profile/profile.service";

class MockProfileRepository {
  async create(data: Profile) {
    return Promise.resolve({ ...data, id: 1 });
  }
  async getByEmail(email: string) {
    return Promise.resolve(null);
  }
}

describe("ProfileService", () => {
  let profileService: any;
  let profileRepository: any;

  beforeEach(() => {
    profileRepository = new MockProfileRepository();
    profileService = new ProfileService(profileRepository);
  });

  it("should create a profile", async () => {
    const profileData: Profile = {
      name: "Test Profile",
      email: "test@example.com",
      password: "password123",
    };

    const createdProfile = await profileService.create(profileData);
    expect(createdProfile).toEqual({ ...profileData, id: 1 });
  });

  it("should retrieve a profile by email", async () => {
    const email = "test@example.com";
    const profile = await profileService.getByEmail(email);
    expect(profile).toBeNull();
  });
});
