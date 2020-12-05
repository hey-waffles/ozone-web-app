import { initializeMongoose, PostModel } from "../../server/mongoose";

export default async function WordCount(req, res) {
  await initializeMongoose();
  const result = await PostModel.aggregate([{
    $group: { _id: null, wordCount: { $sum: "$wordCount" }}
  }]);

  console.log(result)
  
  res.status(200).json(result);
}