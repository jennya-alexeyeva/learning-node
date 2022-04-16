import mongoose from "mongoose";

const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  postedBy: {
    username: String,
    handle: String
  },
  liked: Boolean,
  dislikes: Number,
  disliked: Boolean,
  avatarImage: String
}, {collection: 'tuits'});
export default schema;