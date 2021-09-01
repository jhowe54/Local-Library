function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id)
  return found;
}

function sortAccountsByLastName(accounts) {
  const sortedAccounts = accounts.sort((lastA, lastB) => {
    return lastA["name"]["last"] > lastB["name"]["last"] ? 1: -1;
  })
  return sortedAccounts;
}
//filters all book object's borrow arrays that contain the account ID and returns the number of borrows associated with that account
function getTotalNumberOfBorrows(account, books) { 
  const numOfBorrows = books.filter((book) => {
    return book.borrows.some((bookId) => bookId.id === account.id)
  })
  return numOfBorrows.length;
}
//returns an array of all book objects that are currently checked out by an account and adds the author information to each of these books
function getBooksPossessedByAccount(account, books, authors) {
  let checkedOutBooks = [];
  books.forEach((book) => {
    if(book.borrows.find((bookId) => bookId.id === account.id && !bookId.returned)) {
      checkedOutBooks.push(book);
    }
  })
  checkedOutBooks.forEach((book) => {
    let authorName = authors.find((authId) => authId.id === book.authorId);
    book['author'] = authorName;
  })
  return checkedOutBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
