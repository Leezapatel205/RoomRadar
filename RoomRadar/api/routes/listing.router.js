import express from 'express';
import { createListing, getListingById,getUserListings,deleteListing ,updateListing,getListing ,getListings} from '../controllers/listing.controllers.js';
import { verifyToken } from '../until/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);



// router.get('/:id', getListingById); // Listing details ka route add karein
router.get('/user/:userId', verifyToken, getUserListings);
router.get('/get', getListings);


export default router;
