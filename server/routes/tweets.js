import express from "express";
import { createTweet, deleteTweet, getAllTweets, likeOrDislike, getUserTweets, getExploreTweets} from "../controllers/tweet.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();


// create a tweet
router.post("/", verifyToken, createTweet);

//detele a tweet 

router.delete("/:id", verifyToken, deleteTweet);

//Like or dislike a tweet
router.put("/:id/like", verifyToken, likeOrDislike);

//get all timeline tweets
router.get("/timeline/:userId", getAllTweets);

router.get("/user/all/:id", getUserTweets)

router.get("/explore", getExploreTweets);

export default router;