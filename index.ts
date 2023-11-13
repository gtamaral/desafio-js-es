/////////// DESAFIO JAVASCRIPT /////////////

// 1st ==> croar a classe do livro e atrelar seus atributos
class Book {
    id: number;
    title: string;
    description: string;
    author: string;

    constructor(id: number, title: string, description: string, author: string) {
        this.id = id
        this.title = title
        this.description = description
        this.author = author
    }
}

// 2st ==> criar a class
class Booklist {
    books: Book[];

    constructor() {
        this.books = []
    }

    // funcoes ===> ADD, DELETE, SEARCH and UPDATE

    add(info: Omit<Book, "id">): Book {     //omitindo o id como parametro
        // add id p o book
        const id  = Math.floor(Math.random() * 1000);

        const newBook = new Book(id, info.title, info.description, info.author)
        this.books.push(newBook)
        return newBook;
    } 

    getBooks(): Book[] {
        return this.books
    }

    removeById(id: number): void {
        this.books = this.books.filter(book => book.id !== id)
    }

    getBookById(id: number): Book | undefined {
        return this.books.find(book => book.id === id)
    }

    updateBookById(id: number, info: {title?: string, description?: string, author?: string}): Book | undefined {
        // 1st => encontrar o livro a partir do seu id chamando a funcao ja criada
        const BookGetUpdate = this.getBookById(id)

        // caso o livro exista, vai receber o update
        if(BookGetUpdate) {
            if(info.title) {
                BookGetUpdate.title = info.title
            }
            if(info.description) {
                BookGetUpdate.description = info.description
            }
            if(info.author) {
                BookGetUpdate.author = info.author
            }
            return BookGetUpdate
        }
        //  se nao, recebe undefined
        return undefined
    }
}

