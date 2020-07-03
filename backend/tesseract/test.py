from PIL import Image
import pytesseract
im = Image.open("BCSE-2011-PE.pdf")
text = pytesseract.image_to_string(im, lang="eng")
print(text)