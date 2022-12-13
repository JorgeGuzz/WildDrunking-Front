from PIL import Image
from os import listdir


def crop(png_image_name):
    im = Image.open(png_image_name)
    im2 = im.crop(im.getbbox())
    im2.save(png_image_name)


for f in listdir('.'):
    if f.endswith('.png'):
        crop(f)
