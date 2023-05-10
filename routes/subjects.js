import { Router } from "express";
const router = new Router();
router.get('/', (req, res) => {
    res.render('subjects/all');
});

/* router.get('/Aya', (req, res) => {
    res.render('departments/all');
});
router.get('/Alaa', (req, res) => {
    res.send('I am Alaa Hathout');
});
router.get('/Esraa', (req, res) => {
    res.send('I am Esraa Hussien');
});
router.get('/Zain', (req, res) => {
    res.send('I am Zain Hathout');
}); */
export default router;

