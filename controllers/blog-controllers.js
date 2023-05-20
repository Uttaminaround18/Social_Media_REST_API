import Blog from "../model/Blog";

export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (err) {
        console.log(err);
    }

    if (blogs) {
        res.status(200).json({ blogs });
        return;
    }
    res.status(404).json({ message: "No Blogs Found" });
    return;
}

export const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;
    const blog = new Blog({
        title,
        description,
        image,
        user,
    });

    try {
        await blog.save();
    } catch (err) {
        console.log(err);
    }

    res.status(200).json({ blog });
}

export const updateBlogs = async (req, res, next) => {

    const { title, description } = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId, {
            title,
            description,
        });

    } catch (err) {
        console.log(err);
        return;
    }

    if (blog) {
        res.status(200).json({ blog });
        return;
    }

    res.status(500).json({ message: "Unable to Update" });
    return;
}

