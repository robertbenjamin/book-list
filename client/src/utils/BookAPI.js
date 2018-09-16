import queryAPI from './queryAPI';

class BookAPI {
  static async getAll() {
    return await queryAPI('get', '/books');
  }

  static async get(id) {
    return await queryAPI('get', `/books/${id}`);
  }

  static async post(body) {
    return await queryAPI('post', '/books', body);
  }

  static async put(id, body) {
    return await queryAPI('put', `/books/${id}`, body);
  }

  static async delete(id) {
    await queryAPI('delete', `/books/${id}`);
  }
}

export default BookAPI;
