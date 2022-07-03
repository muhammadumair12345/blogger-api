//Mongoose provides a straight-forward, schema-based solution to model your application data.
import mongoose from 'mongoose';

//Everything in Mongoose starts with a Schema.
//Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const blogSchema = mongoose.Schema({
  title: { type: String, required: true },
  username: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
});

//To use our schema definition, we need to convert our userSchema into a Model we can work with.
//To do so, we pass it into mongoose.model(modelName, schema)
export default mongoose.model('Blog', blogSchema);
