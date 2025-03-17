/**
 * Utility function to dynamically import all images from the images directory
 */

const imageContext = import.meta.glob('../images/*.png', { eager: true });

export const getImageUrl = (imageName) => {
  const imageModule = Object.entries(imageContext).find(([path]) => path.includes(imageName));
  return imageModule ? imageModule[1].default : '';
};

export const getAllImages = () => {
  return Object.entries(imageContext).reduce((acc, [path, module]) => {
    // Extract filename without extension
    const fileName = path.split('/').pop().replace('.png', '');
    acc[fileName] = module.default;
    return acc;
  }, {});
};