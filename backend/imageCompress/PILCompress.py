from PIL import Image
import os

for fileName in os.listdir('./scannedAnswers'):
    if fileName.endswith("jpeg") or fileName.endswith("jpg"):
        img = Image.open("./scannedAnswers/"+fileName)
        img.save("./compressedImages/"+fileName, optimize=True, quality=20)
    else:
        continue