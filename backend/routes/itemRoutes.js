import { Router } from 'express'
import { verifyToken } from '../firebase/firebase.js'
import {
  getItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
} from '../controllers/itemController.js'

const router = Router()

router.get('/',       verifyToken, getItems)
router.get('/:id',   verifyToken, getItemById)
router.post('/',     verifyToken, addItem)
router.put('/:id',   verifyToken, updateItem)
router.delete('/:id', verifyToken, deleteItem)

export default router
