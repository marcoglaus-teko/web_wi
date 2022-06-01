function f() {
    const book = {
        title: 'Schrödinger programmiert Java',
        price: 44.90,
        author: 'Philip Ackermann',
        isbn: '978-3836245838978-3836245838',
        printDescription() { console.log(`${this.author}: ${this.title}`); }
    }
    book.printDescription();
    alert(book.author+'\n'+book.title)
}
