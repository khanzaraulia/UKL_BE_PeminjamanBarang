import Express from "express";
import userRoute from "./router/userRouter"
import itemRoute from "./router/itemRouter"
import borrowRoute from "./router/borrowRouter"
const app = Express()

app.use(Express.json())

app.use(`/user`, userRoute)
app.use(`/item`, itemRoute)
app.use(`/borrow`, borrowRoute)

const PORT = 1992
app.listen(PORT, () => {
    console.log(`Server peminjaman barang run on port ${PORT}`)
})