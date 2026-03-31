import ImageKit from '@imagekit/nodejs'
import { ENV } from './env.js';

const imagekit=new ImageKit({
    privateKey: ENV.IMAGEKIT_PRIVATE_KEY
})

export default imagekit