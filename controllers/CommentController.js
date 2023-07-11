import Comment from "../models/CommentModel.js";

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCommentById = async (req, res) => {
    try{
        const comments = await Comment.findById(req.params.id);
        res.json(comments);
    } catch (error){
        res.status(404).json({message: error.message});
    }
}

export const saveComment = async (req, res) => {
    const comments = new Comment(req.body);
    try{
        const insertcomments = await comments.save();
        res.status(201).json(insertcomments);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export const updateComment = async (req, res) => {
    try{
        const updatecomment = await Comment.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatecomment);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

export const deleteComment = async (req, res) => {
    try{
        const deletecomment = await Comment.deleteOne({_id:req.params.id});
        res.status(200).json(deletecomment);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}