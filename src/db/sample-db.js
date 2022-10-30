const { faker } = require('@faker-js/faker');
const { v4 } = require('uuid');
const Article = require('../models/article/article');

class SampleDB {
  constructor(numOfArticles) {
    this.articles = [];
    this.numOfArticles = numOfArticles;
    this.langs = ['ru', 'en'];
  }

  fill() {
    for (let i = 0; i < this.numOfArticles; i++) {
      const lang = faker.datatype.number({
        min: 0,
        max: this.langs.length - 1,
      });
      const language = this.langs[lang];
      const newArticle = new Article(
        faker.vehicle.vehicle(),
        faker.name.fullName(),
        faker.lorem.text(),
        v4().slice(0, 8),
        language,
        [],
      );
      this.articles.push(newArticle);
    }
  }

  findById(id) {
    const article = this.articles.find((a) => a.id === id);
    if (article) {
      return article;
    }
    return null;
  }

  all() {
    return this.articles;
  }

  update(id, data) {
    const article = this.findById(id);
    const idx = this.articles.findIndex((a) => a.id === id);
    if (article) {
      this.articles[idx] = {
        ...article,
        ...data,
      };
      return true;
    }
    return false;
  }
}

module.exports = SampleDB;
