import { Post } from "../models/post";

export class PostsController {
    static async getAll(req:any, res:any){
        const posts=await Post.find();
        res.json(posts);
    }
    // paima viena irasa:
    static async get(req:any, res:any){
        // const post = await Post.findOne({'_id':req.params.id});

        const post = await Post.findById(req.params.id);
        res.json(post);
    }

    //prideda irasus:
    static async store(req:any, res:any){
        // idedam irasa
        const newPost=new Post({
            title:req.body.title,
            content:req.body.content
        });
        // paleidziam issaugojima (vykdoma asinchroniskai-promise del to await)
        await newPost.save();
        // sugrazinam ta pati irasa kuris buvo iterptas i DB
        res.json(newPost)
    }

    static async update(req:any, res:any){
        const post=await Post.findOne({'_id':req.params.id});
        if(post!=null){
            post.title=req.body.title
            post.content=req.body.content
            post.save();
        }
        
        // dar galima ieskoti taip:
        // const post=await Post.find({
        //     'title':'Naujas',
        //     'content':'Tekstas'
        // })

        console.log(post);
        res.json(post);
    }

    static async delete(req:any, res:any){
        const post=await Post.findOneAndDelete({
            '_id':req.params.id
        })
        res.json(post);
    }
}