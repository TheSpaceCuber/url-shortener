import express from 'express'
const router = express.Router()
import Url from './models/url.js'

router.get('/', async (req, res) => {
    try {
        const urls = await Url.find()
        res.status(200).json(urls)
    } catch (err) {
        res.status(500).json({'message': err.message})
        console.log(err)
    }
})

router.post('/shorten-url', async (req, res) => {
    try {
        await Url.create({originalUrl: req.body.originalUrl})
        res.redirect('/')
    } catch (err) {
        res.status(500).json({'message': err.message})
        console.log(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        console.log(req.params)
        const url = await Url.findOne({shortenedUrl: req.params.id})
        if (url == null) return res.sendStatus(404)
        res.redirect(url.originalUrl)
    } catch (err) {
        res.status(500).json({'message': err.message})
        console.log(err)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const url = await Url.findByIdAndDelete(req.params.id)
        if (url == null) return sendStatus(404)
        res.status(200).send(url)
    } catch (err) {
        res.status(500).json({'message': err.message})
        console.log(err)
    }
})

export default router