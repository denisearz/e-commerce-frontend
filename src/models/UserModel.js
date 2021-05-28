export class UserModel {
  constructor(rawData) {
    this.id = rawData.id;
    this.email = rawData.email
    this.password = rawData.password;
    this.user_type=rawData.user_type;
    this.token = rawData.token
  }
  
  get authHeader() {
    return {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
  }
}
