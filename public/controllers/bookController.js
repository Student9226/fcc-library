const Book = require("../models/models").Book;
// const Comments = require("../models/models").Comments;

const bookController = {
  createBook: (req, res) => {
    const title = req.body.title;
    if (!title) {
      return res.json("missing required field title");
    }
    const bookToBeCreated = new Book({
      title
    });

    bookToBeCreated.save((err, data) => {
      if (err) {
        return console.error(err);
      } else {
        const { _id, title } = data;
        const result = { _id, title };
        res.json(result);
      }
    });
  },
  getBookList: (req, res) => {
    Book.find((err, books) => {
      if (err) {
        return console.error(err);
      }
      return res.json(books);
    });
  },
  deleteAllBooks: (req, res) => {
    Book.deleteMany({})
      .then(() => {
        console.log("all books deleted");
      })
      .catch(err => {
        console.log(err);
      });
  },

  commentOnBook: (req, res) => {
    console.log("comment");
  },
  deleteBookById: (req, res) => {
    console.log("deleteId");
  },
  getBookDetail: (req, res) => {
    console.log("detaillsss");
  }
};

// module.exports = function(app) {
//   app
//     .route("/api/books")
//     .get(function(req, res) {
//       //response will be array of book objects
//       //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]
//     })

//     .post(function(req, res) {
//       let title = req.body.title;
//       //response will contain new book object including atleast _id and title
//     })

//     .delete(function(req, res) {
//       //if successful response will be 'complete delete successful'
//     });

//   app
//     .route("/api/books/:id")
//     .get(function(req, res) {
//       let bookid = req.params.id;
//       //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}
//     })

//     .post(function(req, res) {
//       let bookid = req.params.id;
//       let comment = req.body.comment;
//       //json res format same as .get
//     })

//     .delete(function(req, res) {
//       let bookid = req.params.id;
//       //if successful response will be 'delete successful'
//     });
// };

module.exports = bookController;
