// // server.js
// const express = require('express');
// const { sequelize, User, Image, Post, Comment, PostImage, UserImage } = require('./models');

// const app = express();
// app.use(express.json());

// // Sync database
// sequelize.sync({ force: true }).then(() => {
//     console.log('Database & tables created!');
// });

// // Endpoint: Register User
// app.post('/register', async (req, res) => {
//     const { email, mat_khau, ho_ten, gioi_tinh, ngay_sinh } = req.body;
//     try {
//         const user = await User.create({ email, mat_khau, ho_ten, gioi_tinh, ngay_sinh });
//         res.status(201).json(user);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// // Endpoint: Login User
// app.post('/login', async (req, res) => {
//     const { email, mat_khau } = req.body;
//     try {
//         const user = await User.findOne({ where: { email, mat_khau } });
//         if (user) {
//             res.status(200).json(user);
//         } else {
//             res.status(401).json({ error: 'Invalid credentials' });
//         }
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// // EEndpoint: Get All Images
// app.get('/images', async (req, res) => {
//     try {
//         const images = await Image.findAll();
//         res.status(200).json(images);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// server.js
const express = require('express');
const { sequelize, User, Image, Post, Comment, PostImage, UserImage } = require('./models');

const app = express();
app.use(express.json());

// Sync database
sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
});

// Register User
app.post('/register', async (req, res) => {
    const { email, mat_khau, ho_ten, gioi_tinh, ngay_sinh } = req.body;
    try {
        const user = await User.create({ email, mat_khau, ho_ten, gioi_tinh, ngay_sinh });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Login User
app.post('/login', async (req, res) => {
    const { email, mat_khau } = req.body;
    try {
        const user = await User.findOne({ where: { email, mat_khau } });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get All Images
app.get('/images', async (req, res) => {
    try {
        const images = await Image.findAll();
        res.status(200).json(images);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get Images by Tag
app.get('/images/tag/:tag', async (req, res) => {
    const { tag } = req.params;
    try {
        const images = await Image.findAll({ where: { tags: tag } });
        res.status(200).json(images);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Create Post
app.post('/posts', async (req, res) => {
    const { noi_dung, nguoi_dung_id } = req.body;
    try {
        const post = await Post.create({ noi_dung, nguoi_dung_id });
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Create Comment on Post
app.post('/comments', async (req, res) => {
    const { noi_dung, nguoi_dung_id, bai_dang_id } = req.body;
    try {
        const comment = await Comment.create({ noi_dung, nguoi_dung_id, bai_dang_id });
        res.status(201).json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get User Information and Images
app.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id, { include: Image });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get Image Information
app.get('/image/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const image = await Image.findByPk(id);
        res.status(200).json(image);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get Comments for an Image
app.get('/image/:id/comments', async (req, res) => {
    const { id } = req.params;
    try {
        const comments = await Comment.findAll({ where: { bai_dang_id: id } });
        res.status(200).json(comments);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Save User ID and Image ID
app.post('/user-image', async (req, res) => {
    const { nguoi_dung_id, anh_id } = req.body;
    try {
        const userImage = await UserImage.create({ nguoi_dung_id, anh_id });
        res.status(201).json(userImage);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get Tags by User ID
app.get('/user/:id/tags', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id, { include: Image });
        const tags = user.Images.map(image => image.tags); // Assuming each image has tags attribute
        res.status(200).json(tags);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete Image by Image ID
app.delete('/image/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const image = await Image.findByPk(id);
        if (image) {
            await image.destroy();
            res.status(200).json({ message: 'Image deleted successfully' });
        } else {
            res.status(404).json({ error: 'Image not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
