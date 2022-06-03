const router = require('express').Router();

const {
    addComment,
    removeComment
} = require('../../controllers/comment-controller');

// set up POST and DELET routes
router.route('/:pizzaId').post(addComment);
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;