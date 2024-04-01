import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";

export const GET = async (req, res, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const DELETE = async (req, res, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
