class Article {
  constructor(title, author, text, id, language, references) {
    this.title = title;
    this.author = author;
    this.text = text;
    this.id = id;
    this.language = language;
    this.references = references;
  }
}

module.exports = Article;
