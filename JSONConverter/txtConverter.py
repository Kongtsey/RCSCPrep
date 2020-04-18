import pdftotext

paperYear = 2011
with open("PastPapers/BCSE-"+str(paperYear)+"-PE.pdf","rb") as f:
    pdf = pdftotext.PDF(f)
# for page in pdf:
#     print(page)
paperContent = ("\n\n".join(pdf))
with open("PastPapers/BCSE-"+str(paperYear)+"-PE.txt","w") as f:
    f.write(paperContent)