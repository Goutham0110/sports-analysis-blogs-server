import initDatabase from './src/utils/connect-mongodb';
import Models from './src/models';

const createMany = async (count: number) => {
    for (let i = 1; i <= count; i++) {
        const blogData = {
            title: `Test Blog for formatting 2- ${i}`,
            author: "Tony stark",
            description: "Genius, Billionaire, Playboy, Philosopher now becomes Doctor",
            featured: false,
            content: `
            \tSomething in first line<br/><br/>
            <div>Something after spaces<div/>
            `
        }
        await Models.Blog.create(blogData);
        console.log("inserted ", i);
    }
}

const deleteAll = async () => {
    await Models.Blog.deleteMany();
    console.log("Deleted all blogs")
}

const main = (async()=>{
    const db = await initDatabase();
    try{
        await createMany(5);
    }catch(err){
        console.log(err);
    }finally{
        db?.close();
    }
})()

