import { Document } from "mongoose";


export interface File extends Document {
  name: string,
  originalname: string,
  network_address: string,
  type: string,
  user_path: string,
}