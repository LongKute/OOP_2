class StorageService {
  constructor(storageType = "local") {
    this.storage = storageType === "local" ? localStorage : sessionStorage;
  }

  save(key, value) {
    try {
      const data = this.load(key) || [];
      data.push(value); // Thêm mới
      this.storage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }

  load(key) {
    try {
      const data = this.storage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Error loading data:", error);
      return [];
    }
  }

  delete(key) {
    try {
      this.storage.removeItem(key);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }

  clear() {
    try {
      this.storage.clear();
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  }
}

export default StorageService;
