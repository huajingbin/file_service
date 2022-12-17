import * as mongoose from 'mongoose';

export default new mongoose.Schema({
  name: String,
  originalname: String,
  network_address: String,
  type: String,
  user_path: String,
  size: Number,
  md5:String
})