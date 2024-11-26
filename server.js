import express from "express";


const posts = [
    { id: 1, descricao: "teste", imagem: "https://placecats.com/millie/300/150" },
    { id: 2, descricao: "teste2", imagem: "https://placecats.com/millie/300/150" },
    { id: 3, descricao: "teste3", imagem: "https://placecats.com/millie/300/150"},
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("iniciando servidor")
})

app.get("/posts", (req, res) => {
    res.sendStatus(200).json(posts)
})

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});