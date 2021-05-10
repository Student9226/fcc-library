const bookController = {
  createBook: (req, res) => {
    console.log("create");
  },
  getBookList: (req, res) => {
    console.log("view");
  },
  deleteAllBooks: (req, res) => {
    console.log("delete ALL");
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
