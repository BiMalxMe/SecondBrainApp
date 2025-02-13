import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import { contentModel, LinkModel, userModel } from "./db";
import { userMiddleware } from "./middleware";

const app=express()
app.use(express.json())
const jwtPassword = "454354"

app.post("/api/v1/signup",async(req,res)=>{
    //zod validation
    const username = req.body.username
    const password=req.body.password;
    try{
    await userModel.create({
        username,
        password,
    })
    res.json({
        msg:"User signed up"
    })
}catch(e){
    res.json({
        msg:"Something went wrong"
    })
}
})
app.post("/api/v1/signin",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const existingUser=await userModel.findOne({
        username,
        password
    })
    if(existingUser){
        const token=jwt.sign({
            id:existingUser._id
        },jwtPassword)
    res.json({
        token : token
    })
    }else{
        res.status(403).json(
            {
                msg:"Incorrect Credentials"
            }
        )
    }

})
app.post("/api/v1/content",userMiddleware,async(req,res)=>{
    const link = req.body.link;
    const type = req.body.type;
        
    await contentModel.create({
        link,
        type,
        //@ts-ignore
        userId : req.userId,
        tags : []
})

        res.json({
            msg : "Content Added"
        })
})
app.get("/api/v1/content",userMiddleware,async(req,res)=>{
            //@ts-ignore
        const userId = req.userId;
        const content = await contentModel.find({
            userId,
        }).populate("userId","username")
        res.json({
            msg : "Sucessfully Fetched the content",
            content,
        })
})
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await contentModel.deleteMany({
        _id:contentId,
        // @ts-ignore
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share", userMiddleware, async (req, res) => {
    const share = req.body.share;
    if (share) {
            const existingLink = await LinkModel.findOne({
                        // @ts-ignore

                userId: req.userId
            });

            if (existingLink) {
                res.json({
                    hash: existingLink.hash
                })
                return;
            }
                    // @ts-ignore
            const hash = random(10);
            await LinkModel.create({
                        // @ts-ignore
            userId: req.userId,
                hash: hash
            })

            res.json({
                hash
            })
    } else {
        await LinkModel.deleteOne({
                    // @ts-ignore
            userId: req.userId
        });

        res.json({
            message: "Removed link"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async (req, res) => {
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash
    });

    if (!link) {
        res.status(411).json({
            message: "Sorry incorrect input"
        })
        return;
    }
    // userId
    const content = await contentModel.find({
        userId: link.userId
    })

    console.log(link);
    const user = await userModel.findOne({
        _id: link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }

    res.json({
        username: user.username,
        content: content
    })

})

app.listen(3000)