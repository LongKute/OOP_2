import StorageService from "./16.js";

class UserStorage extends StorageService {
  constructor(storageType = "local") {
    super(storageType);
  }

  saveUser(key, user) {
    const users = this.load(key) || [];

    // Check for duplicates (username or email)
    const isDuplicate = users.some((existingUser) => existingUser.username === user.username || existingUser.email === user.email
    );

    if (!isDuplicate) {
      super.save(key, user);
      console.log("User saved successfully!");
    } else {
      console.warn("User already exists!");
    }
  }

  validateLogin(key, loginUser) {
    const users = this.load(key) || [];
    return users.some(
      (user) =>
        user.username === loginUser.username &&
        user.password === loginUser.password
    );
  }
}

export default UserStorage;
