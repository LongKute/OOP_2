class Store {
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = [];
  }
  getState() {
    return this.state;
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }
  subscribe(listener) {
    if (typeof listener === "function") {
      this.listeners.push(listener);
    } else {
      throw new Error("Listener must be a function");
    }
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
  notify() {
    this.listeners.forEach((listener) => listener(this.state));
  }
  async fetchState(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch state from server");
      }
      const data = await response.json();
      this.setState(data); // Cập nhật trạng thái từ server
    } catch (error) {
      console.error("Error fetching state:", error);
    }
  }
  async updateState(url, newProduct) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) {
        throw new Error("Failed to update state on server");
      }
      const data = await response.json();
      console.log("Product added successfully:", data);
      this.fetchState(url); // Đồng bộ lại trạng thái
    } catch (error) {
      console.error("Error updating state:", error);
    }
  }
}
// Sử dụng CartStore
const cartStore = new CartStore();

// Đăng ký lắng nghe thay đổi trạng thái
cartStore.subscribe((state) => {
  console.log("Cart state updated:", state);
});
