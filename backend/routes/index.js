const express=require('express')
const contentDetails= require('../controller/index')
const router=express()

// middleware
// router.use(express.static(__dirname + '/public'));
// // router.use('/uploads', express.static('uploads'));
// const upload = multer({ dest: 'uploads/' })

//routes
router.post('/api/addContent', contentDetails.addContent)
router.get('/api/allContent', contentDetails.allContent)
router.put('/api/uploadContent/:id', contentDetails.updateContent)
router.get('/api/content_details/:id', contentDetails.contentDetails)


module.exports = router;