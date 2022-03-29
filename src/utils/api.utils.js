import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "https://todos-api-lab.herokuapp.com/todos",
    });
  }

  addTodo = async (title) => {
    try {
      const { data } = await this.api.post("/", { title });
      return data;
    } catch (error) {
      throw error.response;
    }
  };

  getTodos = async () => {
    try {
      const { data } = await this.api.get("/");
      return data;
    } catch (error) {
      throw error.response;
    }
  };

  updateTodo = async (id, todo) => {
    try {
      await this.api.put(`/${id}`, todo);
    } catch (error) {
      throw error.response;
    }
  };

  deleteTodo = async (id) => {
    try {
      await this.api.delete(`/${id}`);
    } catch (error) {
      throw error.response;
    }
  };
}

export default new Api();
