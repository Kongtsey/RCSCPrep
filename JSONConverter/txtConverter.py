import pdftotext
with open("PastPapers/BCSE-2013-PE.pdf","rb") as f:
    pdf = pdftotext.PDF(f)
# for page in pdf:
#     print(page)
tezt = ("\n\n".join(pdf))
print(tezt)